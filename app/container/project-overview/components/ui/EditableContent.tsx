import React, { useState, useRef, useEffect } from "react";
import type { EditableContentProps } from "../../types/types";
import { useProgress } from "~/context/useProgressContext";

// Global Undo Stack
export const undoStack: { [id: string]: string[] } = {};

const EditableContent: React.FC<EditableContentProps> = ({
  id,
  placeholder,
  children,
  className = "",
  minHeight = "min-h-24",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { setProgress } = useProgress();

  useEffect(() => {
    const saved = localStorage.getItem("content-store");
    if (saved) {
      const parsed = JSON.parse(saved);
      const content = parsed[id]?.html;
      if (content && contentRef.current) {
        contentRef.current.innerHTML = content;
      }
    }
  }, []);

  const saveContent = (html: string) => {
    const text = contentRef.current?.innerText || "";
    const updatedAt = new Date().toISOString();

    const newData = {
      id,
      html,
      text,
      updatedAt,
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("content-store") || "{}");
    const updated = { ...existing, [id]: newData };
    localStorage.setItem("content-store", JSON.stringify(updated));

    // Save to undoStack
    if (!undoStack[id]) undoStack[id] = [];
    undoStack[id].push(html);

    // API call here
    // sendToBackend(id, newData)
  };

  const handleInput = () => {
    if (contentRef.current) {
      const html = contentRef.current.innerHTML;
      saveContent(html);

      const text = contentRef.current.innerText;

      // Progress bar example
      if (id === "purpose-content") {
        const complete =
          text.includes("ステークホルダー") ||
          text.includes("stakeholder") ||
          text.length > 30;
        setProgress((prev) => ({
          ...prev,
          "project-overview": complete ? 100 : 50,
        }));
      }

      if (id === "non-functional-content") {
        setProgress((prev) => ({
          ...prev,
          "system-design": text.length > 20 ? 100 : 0,
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
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      onInput={handleInput}
      data-placeholder={placeholder}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
};

export default EditableContent;
