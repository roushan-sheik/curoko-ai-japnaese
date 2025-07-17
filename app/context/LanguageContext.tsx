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
  const [language, setLanguage] = useState<Language>("ja");
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
