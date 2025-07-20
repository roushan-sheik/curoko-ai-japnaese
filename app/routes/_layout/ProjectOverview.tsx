import React from "react";
import Header from "~/container/project-overview/components/Header";
import LeftSidebar from "~/container/project-overview/components/LeftSidebar";
import RightSidebar from "~/container/project-overview/components/RightSidebar";
import ProjectOverviewPage from "~/container/project-overview/ProjectOverviewPage";

const ProjectOverviewLayout = () => {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Sidebar - Fixed */}
        <div className="basis-[100%] lg:basis-[20%] bg-white border-r border-gray-200 overflow-y-auto">
          <LeftSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col basis-[100%] lg:basis-[60%] h-full">
          {/* Fixed Header */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 sticky top-0 z-10">
            <Header />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <ProjectOverviewPage />
          </div>
        </div>

        {/* Right Sidebar - Fixed */}
        <div className="basis-[100%] lg:basis-[20%] bg-white border-l border-gray-200 overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewLayout;
