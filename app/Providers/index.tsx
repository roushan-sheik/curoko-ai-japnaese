import React from "react";
import { SidebarProvider } from "~/context/ SidebarContext";
import { LanguageProvider } from "~/context/LanguageContext";
import { ProgressProvider } from "~/context/useProgressContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LanguageProvider>
        <ProgressProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ProgressProvider>
      </LanguageProvider>
    </>
  );
};

export default Providers;
