import React from "react";

function Button({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold w-full"
    >
      {children}
    </button>
  );
}

export default Button;
