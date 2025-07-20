import { type ReactNode } from "react";

export interface ProjectOption {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  navigateLink: string;
}

export type ProjectOptionId =
  | "ai-generation"
  | "template-based"
  | "free-form"
  | "import";

// Alternative with more specific typing
export interface StrictProjectOption {
  id: ProjectOptionId;
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: `bg-${string}` | `bg-${string} hover:bg-${string}`;
  borderColor: `border-${string}`;
}
