import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Bot, FileText, Edit3, Upload, ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionContainer from "~/components/shared/SectionContainer";
import { NavLink } from "react-router";
import type { ProjectOption } from "./types/types";

const CreateNewProject = () => {
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

  const projectOptions: ProjectOption[] = [
    {
      id: "ai-generation",
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: t("aiSupportedAutoGeneration"),
      description: t("aiSupportedAutoGenerationDesc"),
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      id: "template-based",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: t("templateBasedCreation"),
      description: t("templateBasedCreationDesc"),
      bgColor: "bg-green-50 hover:bg-green-100",
      borderColor: "border-green-200",
    },
    {
      id: "free-form",
      icon: <Edit3 className="w-8 h-8 text-purple-600" />,
      title: t("freeForm"),
      description: t("freeFormDesc"),
      bgColor: "bg-purple-50 hover:bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      id: "import",
      icon: <Upload className="w-8 h-8 text-gray-700" />,
      title: t("import"),
      description: t("importDesc"),
      bgColor: "bg-gray-50 hover:bg-gray-100",
      borderColor: "border-gray-200",
    },
  ];

  return (
    <SectionContainer>
      <div className="w-full mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-heading1">{t("createNewProject")}</h1>
          </div>
          <p className="text-body1 text-muted-foreground">
            {t("selectCreationMethod")}
          </p>
        </div>

        {/* Project Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projectOptions.map((option) => (
            <div
              key={option.id}
              className={`
                relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
                ${option.bgColor} ${option.borderColor}
                hover:shadow-md hover:scale-[1.02]
              `}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-white shadow-sm">
                  {option.icon}
                </div>
                <h3 className="text-heading3 font-semibold text-foreground">
                  {option.title}
                </h3>
                <p className="text-body2 text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <NavLink to="/">
            <Button variant="outline" className="px-8">
              {t("back")}
            </Button>
          </NavLink>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CreateNewProject;
