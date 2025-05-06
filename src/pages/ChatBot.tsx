import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";

interface Message {
  sender: "user" | "agent";
  text: string;
  time: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agent",
      text: "Hi! I'm thrilled that you're interested in our services. What information would you like to explore?",
      time: "Sun 9:25 PM",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const agentImg =
    "https://i.pinimg.com/736x/93/aa/49/93aa49cf8ee04750a3e0dd1ac5a0f2ed.jpg";

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      setMessages([
        ...messages,
        { sender: "user", text: input.trim(), time: timestamp },
      ]);
      setInput("");
      setTyping(true);

      setTimeout(() => {
        const agentResponse: Message = {
          sender: "agent",
          text: "Thank you for your message! Our team will get back to you shortly. Is there anything else you'd like to know about our services?",
          time: new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, agentResponse]);
        setTyping(false);
      }, 2000);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      {/* Minimized Chat Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 flex items-center bg-secondary text-gray-800 rounded-2xl px-4 py-3 shadow-lg cursor-pointer z-50 hover:shadow-xl transition-all"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={agentImg}
              alt="Agent"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">GraminIO Agent</div>
            <div className="text-sm opacity-80">GraminIO</div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-[380px] h-[550px] bg-white rounded-t-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src={agentImg}
                  alt="Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">GraminIO Agent</div>
                <div className="text-sm opacity-80">GraminIO</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <i className="ri-notification-3-line ri-lg cursor-pointer"></i>
              <i
                className="ri-close-line ri-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></i>
            </div>
          </div>

          {/* Chat Content */}
          <div
            className="flex-grow overflow-y-auto p-4 space-y-4"
            ref={chatRef}
          >
            <div className="text-center text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Today</span>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "items-start"
                }`}
              >
                {msg.sender === "agent" && (
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <img
                      src={agentImg}
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div
                    className={`p-3 mb-1 text-sm ${
                      msg.sender === "agent"
                        ? "bg-gray-100 rounded-[16px_16px_16px_4px]"
                        : "bg-primary text-white rounded-[16px_16px_4px_16px]"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`text-xs text-gray-500 ${
                      msg.sender === "user" ? "text-right mr-1" : "ml-1"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                  <img
                    src={agentImg}
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 mb-1 bg-gray-100 rounded-[16px_16px_16px_4px]">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex items-center">
              <i className="ri-home-5-line ri-lg text-gray-500 w-10 h-10 flex items-center justify-center cursor-pointer"></i>
              <div className="flex-grow mx-2 bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  className="w-full bg-transparent border-none outline-none text-sm"
                  placeholder="Type your message"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleSend}
                />
              </div>
              <i className="ri-attachment-2 ri-lg text-gray-500 w-10 h-10 flex items-center justify-center cursor-pointer"></i>
            </div>
            <div className="text-center text-xs text-gray-400 mt-2">
              Powered by <span className="font-medium">graminio.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
