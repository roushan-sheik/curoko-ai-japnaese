import React from "react";
import { useTranslation } from "react-i18next";
import { RotateCcw, RotateCw, Save, Eye, Download, Globe } from "lucide-react";
import { Button } from "~/components/ui/button";

const Header = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <header className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      {/* Left Section - Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Undo Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t("Undo")}</span>
        </Button>

        {/* Redo Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
        >
          <RotateCw className="w-4 h-4" />
          <span>{t("Redo")}</span>
        </Button>

        {/* Save Button */}
        <Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white">
          <Save className="w-4 h-4" />
          <span>{t("Save")}</span>
        </Button>

        {/* Preview Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
        >
          <Eye className="w-4 h-4" />
          <span>{t("Preview")}</span>
        </Button>

        {/* Export Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 px-3 py-1.5 text-sm border-gray-300 hover:bg-gray-50"
        >
          <Download className="w-4 h-4" />
          <span>{t("Export")}</span>
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Language Toggle */}
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
          <Globe className="w-4 h-4" />
          <span className="ml-1 text-sm">
            {i18n.language === "en" ? "EN" : "JP"}
          </span>
        </Button>

        {/* Last Updated */}
        <div className="text-sm text-gray-500">
          {`${t("lastUpdated")}: 2024/12/10 14:30`}
        </div>
      </div>
    </header>
  );
};

export default Header;
