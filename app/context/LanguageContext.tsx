import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Types
export type Language = "en" | "ja";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data structure
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    teamProject: "Team & Project Management",
    private: "Private",
    developmentTeam: "Development Team",
    salesTeam: "Sales Team",
    marketingTeam: "Marketing Team",
    maToolSettings: "MA Tool Settings",
    hearingSheet: "Hearing Sheet",

    // Required Items
    requiredItems: "Required Items",
    businessBackground: "Business Background & Issues",
    utilizationInfo: "Utilization Information",
    functionRequirements: "Function Requirements",
    technicalConstraints: "Technical Constraints",

    // Status
    completed: "Completed",
    inProgress: "In Progress",
    pending: "Pending",

    // Header
    aiConsultation: "AI Consultation",
    progress: "Progress",
    notifications: "Notifications",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",

    // Common
    currentStatus: "Current Status",
    currentIssues: "Current Issues & Problems",
    improvement: "Improvement Goals",
    next: "Next",
    previous: "Previous",
    save: "Save",
    cancel: "Cancel",

    // Progress
    itemsCompleted: "items completed",
    progressPercentage: "Progress",
  },
  ja: {
    // Navigation
    home: "ホーム",
    teamProject: "チーム・プロジェクト管理",
    private: "プライベート",
    developmentTeam: "開発チーム",
    salesTeam: "営業チーム",
    marketingTeam: "マーケティングチーム",
    maToolSettings: "MAツール設定",
    hearingSheet: "ヒアリングシート",

    // Required Items
    requiredItems: "必須項目",
    businessBackground: "業務背景・課題",
    utilizationInfo: "利用者情報",
    functionRequirements: "機能要望",
    technicalConstraints: "技術的制約",

    // Status
    completed: "完了",
    inProgress: "進行中",
    pending: "保留中",

    // Header
    aiConsultation: "AI相談",
    progress: "進捗",
    notifications: "通知",
    profile: "プロフィール",
    settings: "設定",
    logout: "ログアウト",

    // Common
    currentStatus: "現在の状況",
    currentIssues: "現在の課題・問題点",
    improvement: "改善したい目標",
    next: "次へ",
    previous: "前へ",
    save: "保存",
    cancel: "キャンセル",

    // Progress
    itemsCompleted: "項目完了",
    progressPercentage: "進捗",
  },
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ja"); // Default to Japanese

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("kuroco-language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ja")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem("kuroco-language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Export translations for external use if needed
export { translations };
