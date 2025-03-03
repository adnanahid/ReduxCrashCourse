import React from "react";

export default function Button({ handler, children }) {
  return (
    <button
      onClick={handler}
      className="border px-6 py-1 rounded-sm bg-black text-white"
    >
      {children}
    </button>
  );
}