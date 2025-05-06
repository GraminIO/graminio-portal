import React from "react";

interface RequestDemoButtonProps {
  onClick: () => void;
}
const RequestDemoButton: React.FC<RequestDemoButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-[5px] font-medium shadow-md transition duration-300"
      onClick={onClick}
    >
      Request a Demo
    </button>
  );
};

export default RequestDemoButton;
