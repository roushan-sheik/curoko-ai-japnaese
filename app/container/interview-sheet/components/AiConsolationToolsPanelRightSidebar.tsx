import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bot,
  Settings,
  Lightbulb,
  Send,
  X,
  BarChart3,
  Grid3X3,
  HelpCircle,
  BookOpen,
  Mic,
  CheckCircle,
} from "lucide-react";

interface AiConsultationToolsPanelRightSidebarProps {
  onClose?: () => void;
  currentSection?: string;
}

const AiConsultationToolsPanelRightSidebar: React.FC<
  AiConsultationToolsPanelRightSidebarProps
> = ({ onClose, currentSection = "userInfo" }) => {
  const { t } = useTranslation("home");
  const [activeTab, setActiveTab] = useState<"ai" | "tools">("ai");
  const [message, setMessage] = useState("");

  const aiSuggestions = [
    "各ユーザーの業務上の役割と責任範囲",
    "モバイルデバイスからのアクセス頻度",
    "研修やサポートの必要性",
    "他部署からのアクセス要望",
  ];

  const tools = [
    {
      id: "interview-progress",
      titleKey: "interviewProgress",
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "importance-matrix",
      titleKey: "importanceMatrix",
      icon: Grid3X3,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "question-templates",
      titleKey: "questionTemplates",
      icon: HelpCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "terminology-dict",
      titleKey: "terminologyDict",
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: "voice-memo",
      titleKey: "voiceMemo",
      icon: Mic,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderAIPanel = () => (
    <div className="flex-1 w-full flex flex-col">
      {/* AI Panel Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <Bot className="w-4 h-4 mr-2 text-blue-600" />
          <span>{t("aiConsultation")}</span>
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          {t("currentSection")}: <span>{t(currentSection)}</span>
        </p>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 chat-messages overflow-y-auto">
        <div className="space-y-4">
          <div className="ai-suggestion p-3 rounded-lg bg-blue-50 border border-blue-100">
            <p className="text-sm font-medium text-gray-800 mb-2 flex items-center">
              <Lightbulb className="w-4 h-4 mr-1 text-yellow-500" />
              <span>{t("aiSuggestions")}</span>
            </p>
            <p className="text-sm text-gray-700 mb-2">
              「{t(currentSection)}
              」について記入いただきました。さらに詳しく聞いておくと良い項目：
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              {aiSuggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-3 h-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              これらも確認されることをお勧めします。
            </p>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 chat-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder={t("messageInputPlaceholder")}
        />
        <button
          onClick={handleSendMessage}
          disabled={!message.trim()}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {t("sendButton")}
        </button>
      </div>
    </div>
  );

  const renderToolsPanel = () => (
    <div className="flex-1 p-4">
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
        <Settings className="w-4 h-4 mr-2 text-blue-600" />
        <span>{t("tools")}</span>
      </h3>
      <div className="space-y-3">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <button
              key={tool.id}
              className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors group"
            >
              <div className="flex items-center">
                <div
                  className={`p-1.5 rounded ${tool.bgColor} group-hover:scale-105 transition-transform`}
                >
                  <IconComponent className={`w-4 h-4 ${tool.color}`} />
                </div>
                <span className="text-sm ml-2 text-gray-700 group-hover:text-gray-900">
                  {t(tool.titleKey)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col h-full">
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

      {/* Tab Buttons */}
      <div className="border-b border-gray-200 flex mt-8 lg:mt-0">
        <button
          onClick={() => setActiveTab("ai")}
          className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
            activeTab === "ai"
              ? "text-blue-600 border-blue-600 bg-blue-50"
              : "text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50"
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>{t("aiConsultation")}</span>
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
            activeTab === "tools"
              ? "text-blue-600 border-blue-600 bg-blue-50"
              : "text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50"
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>{t("tools")}</span>
        </button>
      </div>

      {/* Panel Content */}
      {activeTab === "ai" ? renderAIPanel() : renderToolsPanel()}
    </div>
  );
};

export default AiConsultationToolsPanelRightSidebar;
