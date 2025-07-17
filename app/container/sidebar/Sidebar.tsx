import React from "react";
import { useSidebar } from "~/context/ SidebarContext";

const Sidebar: React.FC = () => {
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 top-17 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`
      h-full bg-white border-r shadow-md fixed lg:relative 
      transition-all duration-300 ease-in-out
      ${isOpen ? "w-64" : "w-0"}
      overflow-hidden
      z-50   
    `}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <ul className="mt-4 space-y-2">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
