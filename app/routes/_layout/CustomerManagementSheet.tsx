import React, { useState } from "react";
import AiConsultationToolsPanelRightSidebar from "~/container/interview-sheet/components/AiConsolationToolsPanelRightSidebar";
import Header from "~/container/interview-sheet/components/Header"; // Your new Header component
import CustomerManagementSheetPage from "~/container/customer-management-sheet/CustomerManagementSheetPage";

const CustomerManagementSheet = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);

  // Sample progress data - you can replace this with actual progress tracking
  const progressData = {
    percentage: 52,
    completed: 4,
    total: 8,
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main Content Area - Now takes full remaining width */}
        <div className="flex flex-col basis-[100%] lg:basis-[80%] h-full">
          {/* Fixed Header */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 sticky top-0 z-0">
            <Header
              rightSidebarOpen={rightSidebarOpen}
              setRightSidebarOpen={setRightSidebarOpen}
              progress={progressData}
            />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <CustomerManagementSheetPage />
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
          <AiConsultationToolsPanelRightSidebar
            onClose={() => setRightSidebarOpen(false)}
            currentSection="userInfo" // or any other section
          />
        </div>

        {/* Overlay for right sidebar mobile */}
        {rightSidebarOpen && (
          <div
            className="fixed inset-0 top-[70px] bg-black/40 bg-opacity-50 z-10 lg:hidden"
            onClick={() => setRightSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerManagementSheet;
