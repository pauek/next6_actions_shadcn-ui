"use client";

import { useState } from "react";

export default function Collapsible({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="border rounded-sm pl-8 p-1 relative min-h-7 mb-2">
      <div
        onClick={() => setCollapsed((x) => !x)}
        className={`hover:cursor-pointer absolute p-2 top-0.5 left-0 transition-transform ${
          collapsed ? "rotate-90" : "rotate-180"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M273.342 66.038a20 20 0 0 0-34.684 0L29.569 430.007a20 20 0 0 0 17.342 29.963h418.178a20 20 0 0 0 17.342-29.962ZM67.644 427.97L256 100.091L444.356 427.97Z"
          />
        </svg>
      </div>
      {collapsed ? title : children}
    </div>
  );
}
