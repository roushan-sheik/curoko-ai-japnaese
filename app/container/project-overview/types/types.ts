export interface EditableContentProps {
  id: string;
  placeholder: string;
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
}

export interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  translateKey?: string;
}
export interface SubSectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  translateKey?: string;
}
