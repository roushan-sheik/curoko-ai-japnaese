import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Building,
  Users,
  Lightbulb,
  Settings,
  CheckCircle,
  AlertCircle,
  XCircle,
  X,
} from "lucide-react";

interface InterviewItemsStructureLeftSidebarProps {
  onClose?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

interface InterviewItem {
  id: string;
  translationKey: string;
  icon: React.ComponentType<any>;
  progress: number;
}

interface RequiredItem {
  translationKey: string;
  status: "completed" | "partial" | "missing";
}

const InterviewItemsStructureLeftSidebar: React.FC<
  InterviewItemsStructureLeftSidebarProps
> = ({ onClose, onScrollToSection }) => {
  const { t } = useTranslation("home");
  const [activeItem, setActiveItem] = useState<string>("");

  const interviewItems: InterviewItem[] = [
    {
      id: "business-background",
      translationKey: "businessBackground",
      icon: Building,
      progress: 100,
    },
    {
      id: "user-info",
      translationKey: "userInfo",
      icon: Users,
      progress: 70,
    },
    {
      id: "feature-requests",
      translationKey: "featureRequests",
      icon: Lightbulb,
      progress: 40,
    },
    {
      id: "technical-constraints",
      translationKey: "technicalConstraints",
      icon: Settings,
      progress: 0,
    },
  ];

  const requiredItems: RequiredItem[] = [
    { translationKey: "businessBackground", status: "completed" },
    { translationKey: "userInfo", status: "completed" },
    { translationKey: "featureRequests", status: "partial" },
    { translationKey: "technicalConstraints", status: "missing" },
  ];

  const getProgressBarColor = (progress: number): string => {
    if (progress === 100) return "bg-green-500";
    if (progress > 0) return "bg-yellow-500";
    return "bg-gray-300";
  };

  const getStatusIcon = (status: RequiredItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case "partial":
        return <AlertCircle className="w-3 h-3 text-orange-500" />;
      case "missing":
        return <XCircle className="w-3 h-3 text-red-500" />;
      default:
        return <XCircle className="w-3 h-3 text-red-500" />;
    }
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (onScrollToSection) {
      onScrollToSection(itemId);
    }
  };

  return (
    <div className="w-full bg-white border-r border-gray-200 p-4 overflow-y-auto relative">
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

      {/* Header */}
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center justify-between mt-8 lg:mt-0">
        <span>{t("interviewItems")}</span>
        <span className="text-xs text-gray-500">{t("progress")}</span>
      </h3>

      {/* Interview Items */}
      <div className="space-y-2">
        {interviewItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`cursor-pointer hover:bg-gray-100 rounded p-2 transition-colors ${
                activeItem === item.id ? "bg-gray-100" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 flex items-center">
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span>{t(item.translationKey)}</span>
                </span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${getProgressBarColor(
                      item.progress
                    )}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Required Items Section */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-gray-700 mb-2">{t("requiredItems")}</h4>
        <div className="text-xs text-gray-600 space-y-1">
          {requiredItems.map((item, index) => (
            <div key={index} className="flex items-center">
              {getStatusIcon(item.status)}
              <span className="ml-1">{t(item.translationKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewItemsStructureLeftSidebar;
