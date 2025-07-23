import type { AnnotationBoxProps, Annotations } from "../../types/types";

const AnnotationBox: React.FC<AnnotationBoxProps> = ({ title, content }) => {
  return (
    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
      <h4 className="font-medium text-gray-800 mb-1 flex items-center">
        <span className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-1">
          i
        </span>
        <span>なぜ聞くべきか</span>
      </h4>
      <p className="text-sm text-gray-700">{content}</p>
    </div>
  );
};

export default AnnotationBox;
