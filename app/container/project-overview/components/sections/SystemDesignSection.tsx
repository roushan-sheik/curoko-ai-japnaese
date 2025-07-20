import { Building } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import EditableContent from "../ui/EditableContent";

const SystemDesignSection: React.FC = () => {
  return (
    <section
      id="system-design"
      className="mb-8 p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <SectionHeader
        icon={<Building className="mr-3 text-blue-600 w-5 h-5 flex-shrink-0" />}
        title="systemDesign"
      />

      <EditableContent
        id="system-design-content"
        placeholder="システム設計の詳細を記述してください..."
        minHeight="min-h-32"
      >
        <p className="text-gray-500 italic">
          このセクションは後で詳細を記述予定です。
        </p>
      </EditableContent>
    </section>
  );
};

export default SystemDesignSection;
