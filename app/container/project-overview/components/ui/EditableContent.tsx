import React, { useState, useRef, useEffect } from "react";
import type { EditableContentProps } from "../../types/types";
import { useProgress } from "~/context/useProgressContext";

const EditableContent: React.FC<EditableContentProps> = ({
  id,
  placeholder,
  children,
  className = "",
  minHeight = "min-h-24",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const { setProgress } = useProgress();

  useEffect(() => {
    if (contentRef.current) {
      setContent(contentRef.current.innerHTML);
    }
  }, [children]);

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (contentRef.current) {
      setContent(contentRef.current.innerHTML);
    }
  };

  // const handleInput = () => {
  //   if (contentRef.current) {
  //     setContent(contentRef.current.innerHTML);
  //   }
  // };
  const handleInput = () => {
    if (contentRef.current) {
      const newContent = contentRef.current.innerText;
      setContent(contentRef.current.innerHTML);

      // Example logic to detect "stakeholder" keyword
      if (id === "purpose-content") {
        const complete =
          newContent.includes("ステークホルダー") ||
          newContent.includes("stakeholder") ||
          newContent.length > 30;

        setProgress((prev) => ({
          ...prev,
          "project-overview": complete ? 100 : 50,
        }));
      }

      if (id === "non-functional-content") {
        setProgress((prev) => ({
          ...prev,
          "system-design": newContent.length > 20 ? 100 : 0,
        }));
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className={`block-editor border border-gray-200 rounded p-4 ${minHeight} focus:ring-2 focus:ring-blue-500 focus:outline-none overflow-x-auto ${className}`}
      contentEditable
      suppressContentEditableWarning
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInput={handleInput}
      data-placeholder={placeholder}
      style={{
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
export default EditableContent;
