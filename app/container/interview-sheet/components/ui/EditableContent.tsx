import { useEffect, useRef, useState } from "react";
import type { ContentData, EditableContentProps } from "../../types/types";

const EditableContent: React.FC<EditableContentProps> = ({
  id,
  placeholder,
  children,
  className = "",
  minHeight = "min-h-24",
  onContentChange,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize content from children or stored content
    if (children && contentRef.current) {
      const content = typeof children === "string" ? children : "";
      contentRef.current.innerHTML = content;
    }
  }, [children]);

  const handleInput = (): void => {
    if (contentRef.current && onContentChange) {
      const html: string = contentRef.current.innerHTML;
      const text: string = contentRef.current.innerText;

      // Prepare data for API
      const contentData: ContentData = {
        id,
        html,
        text,
        updatedAt: new Date().toISOString(),
      };

      onContentChange(contentData);
    }
  };

  const handleFocus = (): void => {
    setIsEditing(true);
  };

  const handleBlur = (): void => {
    setIsEditing(false);
  };

  return (
    <div
      ref={contentRef}
      className={`${className} ${minHeight} outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
        isEditing ? "bg-yellow-50" : ""
      }`}
      contentEditable
      suppressContentEditableWarning={true}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInput={handleInput}
      data-placeholder={placeholder}
      style={{
        position: "relative",
        minHeight: "60px",
      }}
    >
      {children}
    </div>
  );
};

// API Integration Types (for your reference)
export interface InterviewContentAPI {
  updateContent: (id: string, data: ContentData) => Promise<void>;
  getContent: (id: string) => Promise<ContentData | null>;
  getAllContent: () => Promise<ContentData[]>;
}

// Example API implementation
export const useInterviewContent = (): InterviewContentAPI => {
  const updateContent = async (
    id: string,
    data: ContentData
  ): Promise<void> => {
    try {
      const response = await fetch("/api/interview-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...data }),
      });

      if (!response.ok) {
        throw new Error("Failed to update content");
      }
    } catch (error) {
      console.error("Failed to save content:", error);
      throw error;
    }
  };

  const getContent = async (id: string): Promise<ContentData | null> => {
    try {
      const response = await fetch(`/api/interview-content/${id}`);
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to get content:", error);
      return null;
    }
  };

  const getAllContent = async (): Promise<ContentData[]> => {
    try {
      const response = await fetch("/api/interview-content");
      if (!response.ok) {
        throw new Error("Failed to get all content");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to get all content:", error);
      return [];
    }
  };

  return { updateContent, getContent, getAllContent };
};
export default EditableContent;
