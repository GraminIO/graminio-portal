import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blog.json";

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);

  const currentPosts = blogData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    const bookmarkButtons =
      document.querySelectorAll<HTMLElement>("[data-bookmark]");
    const handleBookmarkClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.classList.toggle("ri-bookmark-line");
      target.classList.toggle("ri-bookmark-fill");
      target.classList.toggle("text-primary");
    };

    bookmarkButtons.forEach((btn) =>
      btn.addEventListener("click", handleBookmarkClick)
    );

    return () => {
      bookmarkButtons.forEach((btn) =>
        btn.removeEventListener("click", handleBookmarkClick)
      );
    };
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <><div className="overall_section bg-[#ededed]">
      {/* HERO SECTION */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/99ee1a691f85297348f435db8d3c63c9.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>

        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Insights & Inspiration
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Explore our collection of thought-provoking articles, expert
              advice, and the latest trends across various topics.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG LIST SECTION */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-md shadow-sm overflow-hidden blog-card"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
              <div className="flex items-center mb-3">
                          <span className="bg-blue-100 text-primary text-xs font-medium px-3 py-1 rounded-[5px]">Technology</span>
                          <span className="text-gray-500 text-sm ml-auto">April 25, 2025</span>
                        </div>
                {/* <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-medium px-3 py-1 rounded-[5px]">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    {post.date}
                  </span>
                </div> */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 blog-title">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-start">
                  <Link
                    to={post.link}
                    className="flex mt-3 items-center justify-center text-white px-6 py-2 rounded-[5px] bg-[#0d2b4b] hover:bg-yellow-600"
                  >
                    <i className="ri-corner-down-right-fill mr-2"></i> Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogData.length > POSTS_PER_PAGE && (
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-[5px] shadow">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-l-[5px] hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 text-sm font-medium border ${
                    currentPage === i + 1
                      ? "bg-yellow-600 text-white border-yellow-600"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-r-[5px] hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </section>
      {/* Newsletter Section */}
      {/* <section className="bg-gray-100 mt-[50px] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, resources, and insights delivered
              directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-[5px] border-none focus:ring-2 focus:ring-primary/30 text-gray-700"
              />
              <button className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section> */}
      </div>
    </>
  );
};

export default Blog;
