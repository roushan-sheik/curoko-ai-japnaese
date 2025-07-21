import { createContext, useContext, useState } from "react";

interface ProgressState {
  [key: string]: number; // example: { "project-overview": 100, "requirements": 50 }
}

const ProgressContext = createContext<{
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
}>({
  progress: {},
  setProgress: () => {},
});

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progress, setProgress] = useState<ProgressState>({
    "project-overview": 0,
    requirements: 0,
    "system-design": 0,
  });

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
