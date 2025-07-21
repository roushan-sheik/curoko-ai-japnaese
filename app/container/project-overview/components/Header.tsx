import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RotateCcw,
  RotateCw,
  Save,
  Eye,
  Download,
  Globe,
  Menu,
  X,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

interface HeaderProps {
  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (open: boolean) => void;
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  leftSidebarOpen,
  setLeftSidebarOpen,
  rightSidebarOpen,
  setRightSidebarOpen,
}) => {
  const { t, i18n } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSave = () => {
    const savedData = localStorage.getItem("content-store");
    if (!savedData) return;

    const parsed = JSON.parse(savedData);
    toast.success("Content saved successfully!");

    // Example: POST to backend
    // await fetch("/api/save", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(parsed),
    // });
  };

  return (
    <header className="h-14 bg-white border-b border-gray-200 px-2 sm:px-4 flex items-center justify-between">
      {/* Mobile Menu Button & Left Sidebar Toggle */}
      <ToastContainer position="bottom-center" autoClose={3000} />
      <div className="flex items-center gap-2 lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-gray-100"
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      {/* Left Section - Action Buttons */}
      <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-start">
        {/* Always visible primary buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Save Button - Always visible */}
          <Button
            onClick={handleSave}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Save className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{t("Save")}</span>
          </Button>

          {/* Desktop: Show all buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t("Undo")}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
            >
              <RotateCw className="w-4 h-4" />
              <span>{t("Redo")}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
            >
              <Eye className="w-4 h-4" />
              <span>{t("Preview")}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              <span>{t("Export")}</span>
            </Button>
          </div>

          {/* Tablet: Show some buttons */}
          <div className="hidden sm:flex md:hidden items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 px-2 py-1.5 text-xs border-gray-300 hover:bg-gray-50"
            >
              <RotateCcw className="w-3 h-3" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 px-2 py-1.5 text-xs border-gray-300 hover:bg-gray-50"
            >
              <RotateCw className="w-3 h-3" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 px-2 py-1.5 text-xs border-gray-300 hover:bg-gray-50"
            >
              <Eye className="w-3 h-3" />
            </Button>
          </div>

          {/* Mobile: More actions menu */}
          <div className="flex sm:hidden relative">
            <Button
              variant="outline"
              size="sm"
              className="p-2 border-gray-300 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MoreHorizontal className="w-3 h-3" />
            </Button>

            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    {t("Undo")}
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                    <RotateCw className="w-4 h-4" />
                    {t("Redo")}
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {t("Preview")}
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {t("Export")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 sm:gap-3">
        {/* Right Sidebar Toggle - Mobile/Tablet */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100"
            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Language Toggle */}
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="ml-1 text-xs sm:text-sm">
            {i18n.language === "en" ? "EN" : "JP"}
          </span>
        </Button>

        {/* Last Updated - Hide on small screens */}
        <div className="hidden md:block text-sm text-gray-500">
          {`${t("lastUpdated")}: 2024/12/10 14:30`}
        </div>

        {/* Shortened version for tablets */}
        <div className="hidden sm:block md:hidden text-xs text-gray-500">
          14:30
        </div>
      </div>

      {/* Click outside to close mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
