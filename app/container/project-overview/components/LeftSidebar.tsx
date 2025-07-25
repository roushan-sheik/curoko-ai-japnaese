import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  Target,
  Layers,
  Package,
  Settings as SettingsIcon,
  User,
  Cog,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { useProgress } from "~/context/useProgressContext";

interface LeftSidebarProps {
  onClose?: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ onClose }) => {
  const { t } = useTranslation("home");
  const [activeItem, setActiveItem] = useState("project-overview");
  const [expandedSections, setExpandedSections] = useState([
    "project-overview",
  ]);
  const { progress } = useProgress(); // dynamic progress from context

  const sidebarItems = [
    {
      id: "project-overview",
      title: t("projectOverview"),
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
      progress: progress["project-overview"] || 0,
      children: [
        {
          id: "purpose-background",
          title: t("purposeBackground"),
          icon: Target,
        },
        { id: "project-scope", title: t("projectScope"), icon: Layers },
        { id: "deliverables", title: t("deliverables"), icon: Package },
      ],
    },
    {
      id: "requirements",
      title: t("requirements"),
      icon: SettingsIcon,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      progress: progress["requirements"] || 0,
      children: [
        { id: "functional-req", title: t("functionalRequirements"), icon: Cog },
        {
          id: "non-functional",
          title: t("nonFunctionalRequirements"),
          icon: SettingsIcon,
        },
      ],
    },
    {
      id: "system-design",
      title: t("systemDesign"),
      icon: Layers,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      progress: progress["system-design"] || 0,
      children: [],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="p-4 relative">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors lg:hidden z-10"
          aria-label="Close sidebar"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}

      <nav className="space-y-2 mt-8 lg:mt-0">
        {sidebarItems.map((item) => (
          <div key={item.id}>
            {/* Main Item */}
            <div
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                activeItem === item.id
                  ? `${item.bgColor} border-l-4 border-green-500`
                  : "hover:bg-gray-50"
              }`}
              onClick={() => {
                setActiveItem(item.id);
                toggleSection(item.id);
              }}
            >
              <div className="flex items-center gap-3 flex-1">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm font-medium text-gray-700">
                  {item.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Progress Bar */}
                <div className="w-12 h-1 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.progress === 100
                        ? "bg-green-500"
                        : item.progress > 0
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                {item.children.length > 0 &&
                  (expandedSections.includes(item.id) ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  ))}
              </div>
            </div>

            {/* Children Items */}
            {expandedSections.includes(item.id) && item.children.length > 0 && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child) => (
                  <div
                    key={child.id}
                    className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all ${
                      activeItem === child.id
                        ? "bg-gray-100"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveItem(child.id)}
                  >
                    <child.icon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{child.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
