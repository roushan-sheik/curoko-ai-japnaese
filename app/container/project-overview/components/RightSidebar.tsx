import React, { useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  CheckCircle,
  Target,
  Users,
  AlertTriangle,
  X,
  Settings,
  FileText,
  BarChart3,
  List,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useProgress } from "~/context/useProgressContext";

const RightSidebar = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("ai");
  const { t } = useTranslation("home");
  const { progress } = useProgress();

  const checklist = [
    {
      id: 1,
      title: t("stakeholderClarification"),
      completed: progress["project-overview"] >= 30,
    },
    {
      id: 2,
      title: t("successMetricsDefinition"),
      completed: progress["project-overview"] >= 60,
    },
    {
      id: 3,
      title: t("riskIdentification"),
      completed: progress["requirements"] >= 50,
    },
    {
      id: 4,
      title: t("budgetScheduleOverview"),
      completed: progress["system-design"] >= 50,
    },
  ];

  const tools = [
    {
      id: 1,
      title: t("requirementAnalysis"),
      icon: BarChart3,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: t("terminologyChecker"),
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: t("progressManagement"),
      icon: List,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      title: t("prioritySettings"),
      icon: Star,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      highlighted: true,
    },
    {
      id: 5,
      title: t("templateInsertion"),
      icon: FileText,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  const renderAITab = () => (
    <div className="p-6  h-full">
      {/* AI Assistant Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800">{t("aiAssistant")}</h3>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 mb-3">
            {t("projectOverviewAbout")}
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">
                {t("stakeholderClarification")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">
                {t("successMetricsDefinition")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">
                {t("riskIdentification")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-600">
                {t("budgetScheduleOverview")}
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            {t("additionalQuestions")}
          </p>
        </div>
      </div>

      {/* Progress Checklist */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-3">
          {t("progressChecklist")}
        </h4>
        <div className="space-y-3">
          {checklist.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5
                ${
                  item.completed
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300 bg-white"
                }
              `}
              >
                {item.completed && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
              </div>
              <span
                className={`text-sm ${
                  item.completed
                    ? "text-gray-700 line-through"
                    : "text-gray-700"
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Insights */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-3">{t("quickInsights")}</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Target className="w-4 h-4 text-blue-500" />
            <div>
              <p className="text-xs font-medium text-gray-700">
                {t("projectObjectives")}
              </p>
              <p className="text-xs text-gray-600">{t("clearlyDefined")}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Users className="w-4 h-4 text-green-500" />
            <div>
              <p className="text-xs font-medium text-gray-700">
                {t("stakeholders")}
              </p>
              <p className="text-xs text-gray-600">
                {t("identifiedAndMapped")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-xs font-medium text-gray-700">
                {t("nextSteps")}
              </p>
              <p className="text-xs text-gray-600">
                {t("budgetScheduleNeeded")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="border-t pt-4">
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {t("askAI")}
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder={t("messageInputPlaceholder")}
            className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors">
            {t("sendButton")}
          </button>
        </div>
      </div>
    </div>
  );

  const renderToolsTab = () => (
    <div className="p-6 h-full">
      <div className="space-y-2">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <div
              key={tool.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                tool.highlighted
                  ? "bg-gray-100 border border-gray-200"
                  : "bg-white border border-gray-100"
              }`}
            >
              <div className={`p-2 ${tool.bgColor} rounded-lg`}>
                <IconComponent className={`w-4 h-4 ${tool.color}`} />
              </div>
              <span className="text-sm text-gray-700">{tool.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-80 h-screen bg-white border-l border-gray-200 flex flex-col">
      {/* Close Button - Top Right */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 left-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors lg:hidden z-20"
          aria-label="Close sidebar"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mt-12 lg:mt-0">
        <div className="flex">
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "ai"
                ? "text-blue-600 border-blue-600 bg-blue-50"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Bot className="w-4 h-4" />
            {t("askAI")}
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "tools"
                ? "text-blue-600 border-blue-600 bg-blue-50"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Settings className="w-4 h-4" />
            {t("tools")}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "ai" ? renderAITab() : renderToolsTab()}
      </div>
    </div>
  );
};

export default RightSidebar;
