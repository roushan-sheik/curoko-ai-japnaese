import React from "react";

import {
  Bot,
  MessageCircle,
  Send,
  CheckCircle,
  Target,
  Users,
  AlertTriangle,
  X,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";

interface RightSidebarProps {
  onClose?: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ onClose }) => {
  const { t } = useTranslation("home");

  const checklist = [
    { id: 1, title: t("stakeholderClarification"), completed: true },
    { id: 2, title: t("successMetricsDefinition"), completed: true },
    { id: 3, title: t("riskIdentification"), completed: true },
    { id: 4, title: t("budgetScheduleOverview"), completed: false },
  ];

  return (
    <div className="p-6 h-full relative">
      {/* Close Button - Top Left */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-1.5 rounded-lg hover:bg-gray-100 transition-colors lg:hidden z-10"
          aria-label="Close sidebar"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}

      {/* AI Assistant Header */}
      <div className="mb-6 mt-8 lg:mt-0">
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
            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-blue-600 hover:bg-blue-700"
          >
            <Send className="w-3 h-3 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
