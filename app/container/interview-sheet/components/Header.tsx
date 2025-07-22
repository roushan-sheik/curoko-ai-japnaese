import React, { useState } from "react";
import {
  RotateCcw,
  RotateCw,
  Save,
  FileText,
  Globe,
  Menu,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  leftSidebarOpen?: boolean;
  setLeftSidebarOpen?: (open: boolean) => void;
  rightSidebarOpen?: boolean;
  setRightSidebarOpen?: (open: boolean) => void;
  progress?: {
    percentage: number;
    completed: number;
    total: number;
  };
}

const Header: React.FC<HeaderProps> = ({
  leftSidebarOpen,
  setLeftSidebarOpen,
  rightSidebarOpen,
  setRightSidebarOpen,
  progress = { percentage: 52, completed: 4, total: 8 },
}) => {
  const { t, i18n } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSave = () => {
    // Handle save functionality
    console.log("Save clicked");
  };

  const handleUndo = () => {
    console.log("Undo clicked");
  };

  const handleRedo = () => {
    console.log("Redo clicked");
  };

  const handleCreateRequirementsDoc = () => {
    console.log("Create requirements doc clicked");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "jp" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-white  border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLeftSidebarOpen?.(!leftSidebarOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>

          {/* Desktop Buttons - Always visible on medium+ screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleUndo}>
              <RotateCcw />
              {t("Undo")}
            </Button>

            <Button variant="outline" size="sm" onClick={handleRedo}>
              <RotateCw />
              {t("Redo")}
            </Button>

            <Button variant="default" size="sm" onClick={handleSave}>
              <Save />
              {t("Save")}
            </Button>

            <Button
              variant="success"
              size="sm"
              onClick={handleCreateRequirementsDoc}
            >
              <FileText />
              {t("createRequirementsDoc")}
            </Button>
          </div>

          {/* Tablet - Show primary buttons only */}
          <div className="hidden sm:flex md:hidden items-center space-x-2">
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save />
              <span className="hidden sm:inline">{t("Save")}</span>
            </Button>

            <Button
              variant="success"
              size="sm"
              onClick={handleCreateRequirementsDoc}
            >
              <FileText />
              <span className="hidden sm:inline text-xs">
                {t("createRequirementsDoc").length > 10
                  ? t("createRequirementsDoc").substring(0, 8) + "..."
                  : t("createRequirementsDoc")}
              </span>
            </Button>
          </div>

          {/* Mobile - Primary action + dropdown menu */}
          <div className="flex sm:hidden items-center space-x-2 relative">
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MoreHorizontal />
            </Button>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleUndo();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <RotateCcw className="w-4 h-4" />
                      {t("Undo")}
                    </button>
                    <button
                      onClick={() => {
                        handleRedo();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <RotateCw className="w-4 h-4" />
                      {t("Redo")}
                    </button>
                    <button
                      onClick={() => {
                        handleCreateRequirementsDoc();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <FileText className="w-4 h-4" />
                      {t("createRequirementsDoc")}
                    </button>
                  </div>
                </div>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </>
            )}
          </div>
        </div>

        {/* Right Section - Progress & Language */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            <Globe />
            {i18n.language === "en" ? "EN" : "JP"}
          </Button>

          {/* Right Sidebar Toggle - Mobile/Tablet */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setRightSidebarOpen?.(!rightSidebarOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Info */}
          <div className="text-sm text-gray-500">
            <span className="hidden sm:inline">
              {t("progress")}: {progress.percentage}% ({progress.completed}/
              {progress.total} {t("itemsCompleted")})
            </span>
            <span className="sm:hidden">{progress.percentage}%</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
