import React, { useState } from "react";
import Header from "~/container/project-overview/components/Header";
import LeftSidebar from "~/container/project-overview/components/LeftSidebar";
import RightSidebar from "~/container/project-overview/components/RightSidebar";
import ProjectOverviewPage from "~/container/project-overview/ProjectOverviewPage";

const ProjectOverviewLayout = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Sidebar - Fixed */}
        <div
          className={`
            fixed lg:relative lg:translate-x-0 inset-y-0 left-0 z-20 w-80 lg:w-auto
            transform transition-transform duration-300 ease-in-out
            ${leftSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:basis-[20%] bg-white border-r border-gray-200 overflow-y-auto
            top-14 lg:top-0 h-[calc(100vh-3.5rem)] lg:h-full
          `}
        >
          <LeftSidebar onClose={() => setLeftSidebarOpen(false)} />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col basis-[100%] lg:basis-[60%] h-full">
          {/* Fixed Header */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 sticky top-0 z-10">
            <Header
              leftSidebarOpen={leftSidebarOpen}
              setLeftSidebarOpen={setLeftSidebarOpen}
              rightSidebarOpen={rightSidebarOpen}
              setRightSidebarOpen={setRightSidebarOpen}
            />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <ProjectOverviewPage />
          </div>
        </div>

        {/* Right Sidebar - Fixed */}
        <div
          className={`
            fixed lg:relative lg:translate-x-0 inset-y-0 right-0 z-20 w-80 lg:w-auto
            transform transition-transform duration-300 ease-in-out
            ${rightSidebarOpen ? "translate-x-0" : "translate-x-full"}
            lg:basis-[20%] bg-white border-l border-gray-200 overflow-y-auto
            top-14 lg:top-0 h-[calc(100vh-3.5rem)] lg:h-full
          `}
        >
          <RightSidebar onClose={() => setRightSidebarOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewLayout;
