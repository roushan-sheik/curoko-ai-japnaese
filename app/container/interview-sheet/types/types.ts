export interface ContentData {
  id: string;
  html: string;
  text: string;
  updatedAt: string;
}

export interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  status: StatusType;
}

export interface AnnotationBoxProps {
  title: string;
  content: string;
}

export interface EditableContentProps {
  id: string;
  placeholder: string;
  children?: React.ReactNode;
  className?: string;
  minHeight?: string;
  onContentChange?: (data: ContentData) => void;
}

export type StatusType = "completed" | "inProgress" | "notStarted";

export interface StatusConfig {
  bg: string;
  text: string;
  label: string;
}

export interface Translations {
  [key: string]: string;
}

export interface Annotations {
  [key: string]: string;
}
