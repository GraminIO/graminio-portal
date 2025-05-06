import React from "react";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void; // New prop for modal click handler
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryButtonLink,
  secondaryButtonText,
  onSecondaryButtonClick,
  className = "",
}) => {
  return (
    <section
      className={`py-20 bg-gradient-to-r from-primary to-secondary text-white ${className}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButtonLink}
              className="bg-white text-primary px-8 py-3 rounded-[5px] font-medium shadow-md hover:bg-gray-100 transition duration-300"
            >
              {"Learn More"}
            </a>
            {secondaryButtonText && (
              <button
                onClick={onSecondaryButtonClick}
                className="bg-transparent border-2 border-white px-8 py-3 rounded-[5px] font-medium hover:bg-white hover:text-primary transition duration-300"
              >
                {"Schedule a Demo"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
