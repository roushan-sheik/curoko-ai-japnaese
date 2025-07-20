import React, { useState, useRef, useEffect } from "react";
import type { EditableContentProps } from "../../types/types";

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

  const handleInput = () => {
    if (contentRef.current) {
      setContent(contentRef.current.innerHTML);
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
