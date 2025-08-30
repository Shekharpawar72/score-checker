import React from "react";

export default function SidebarButton({ label, icon: Icon, active, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition
        ${active ? "bg-blue-500 text-white" : "hover:bg-gray-200 text-gray-700"}
        ${danger ? "text-red-600 hover:bg-white hover:shadow-lg hover:shadow-red-800 " : ""}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{label}</span>
    </button>
  );
}
