import { House, Plus, X } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { useSidebar } from "~/context/ SidebarContext";

const Sidebar: React.FC = () => {
  const { isOpen, close } = useSidebar();
  const { t } = useTranslation("sidebar");

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 top-17 z-10 lg:hidden transition-opacity duration-300 ${
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
      ${isOpen ? "w-75" : "w-0"}
      overflow-hidden
      z-20   
    `}
      >
        <div className="p-4">
          {/* home house with cross button */}
          <div className="flex items-center justify-between pl-4">
            <NavLink to={"/"}>
              <div className="flex items-center gap-2">
                <House />
                <h3 className="text-body1 text-nowrap">{t("home")}</h3>
              </div>
            </NavLink>
            {/* Cross button to close sidebar */}
            <button
              onClick={close}
              className="p-1 rounded-md hover:bg-gray-100 cursor-pointer  transition-colors focus:outline-none"
              aria-label="Close sidebar"
            >
              <X size={22} className="text-gray-500 hover:text-primary " />
            </button>
          </div>

          {/* title  */}
          <div>
            <div className="max-h-20 overflow-hidden ">
              <h3 className="text-body1 flex items-center gap-3  select-none font-bold mt-4">
                {t("sidebarTeamProjectManagement")}
                <Plus
                  className="text-neutral-400/70 hover:text-primary cursor-pointer"
                  size={20}
                  strokeWidth={2.8}
                />
              </h3>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
