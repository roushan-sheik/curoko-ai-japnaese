import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Edit3, ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionContainer from "~/components/shared/SectionContainer";
import { NavLink } from "react-router";

const CreateInterviewSheet = () => {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation("home");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until we're on the client side and translation is ready
  if (!isClient || !ready) {
    return (
      <SectionContainer>
        <div className="w-full mx-auto max-w-4xl">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </SectionContainer>
    );
  }

  const handleOptionClick = (optionId: string) => {
    console.log(`Selected option: ${optionId}`);
    // Add navigation logic here
  };

  return (
    <SectionContainer>
      <div className="w-full mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              新規ヒアリングシート作成
            </h1>
          </div>
          <p className="text-gray-600 mb-8">
            {t("selectInterviewSheetMethod")}
          </p>
        </div>

        {/* Two Main Options - Matching Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Template Option */}
          <div
            className="p-8 rounded-lg border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md"
            onClick={() => handleOptionClick("template-based")}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-white shadow-sm">
                <FileText className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t("templateFormat")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("templateFormatDesc")}
              </p>
            </div>
          </div>

          {/* Free Form Option */}
          <div
            className="p-8 rounded-lg border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md"
            onClick={() => handleOptionClick("free-form")}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-white shadow-sm">
                <Edit3 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t("freeFormat")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("freeFormatDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <NavLink to="/">
            <Button variant="outline" className="px-8 py-2">
              {t("back")}
            </Button>
          </NavLink>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CreateInterviewSheet;
