import React from "react";
import Header from "~/container/project-overview/components/Header";
import LeftSidebar from "~/container/project-overview/components/LeftSidebar";
import RightSidebar from "~/container/project-overview/components/RightSidebar";
import ProjectOverviewPage from "~/container/project-overview/ProjectOverviewPage";

const ProjectOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-[100%] lg:basis-[20%] bg-blue-400">
        <LeftSidebar />
      </div>
      <div className="basis-[100%] lg:basis-[60%] bg-gray-400">
        <Header />
        <div>
          <ProjectOverviewPage />
        </div>
      </div>
      <div className="basis-[100%] lg:basis-[20%] bg-blue-400">
        <RightSidebar />
      </div>
    </div>
  );
};

export default ProjectOverview;
