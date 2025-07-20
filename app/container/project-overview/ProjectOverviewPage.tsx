import React from "react";
import ProjectOverviewSection from "./components/sections/ProjectOverviewSection";
import RequirementsSection from "./components/sections/RequirementsSection";
import SystemDesignSection from "./components/sections/SystemDesignSection";

const ProjectOverviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <ProjectOverviewSection />
      <RequirementsSection />
      <SystemDesignSection />
    </div>
  );
};

export default ProjectOverviewPage;
