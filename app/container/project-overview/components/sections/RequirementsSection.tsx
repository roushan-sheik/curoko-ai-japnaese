import { Gauge, Settings, Wrench } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import SubSectionHeader from "../ui/SubSectionHeader";
import EditableContent from "../ui/EditableContent";
import FunctionalRequirementsTable from "../ui/FunctionalRequirementsTable";

const RequirementsSection: React.FC = () => (
  <section
    id="requirements"
    className="mb-8 p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200"
  >
    <SectionHeader
      icon={<Settings className="mr-3 text-blue-600 w-5 h-5 flex-shrink-0" />}
      title="requirementsSpec"
    />

    <div id="functional" className="mb-6">
      <SubSectionHeader
        icon={<Wrench className="mr-2 text-green-600 w-4 h-4 flex-shrink-0" />}
        title="functionalReq"
      />
      <EditableContent
        id="functional-content"
        placeholder="機能要件を記述してください..."
        minHeight="min-h-32"
      >
        <FunctionalRequirementsTable />
      </EditableContent>
    </div>

    <div id="non-functional" className="mb-6">
      <SubSectionHeader
        icon={<Gauge className="mr-2 text-orange-600 w-4 h-4 flex-shrink-0" />}
        title="nonFunctionalReq"
      />
      <EditableContent
        id="non-functional-content"
        placeholder="非機能要件を記述してください..."
      >
        <ul className="list-disc list-inside space-y-1">
          <li>レスポンス時間: 3秒以内</li>
          <li>同時接続ユーザー数: 100人</li>
          <li>稼働率: 99.9%以上</li>
          <li>データバックアップ: 日次</li>
        </ul>
      </EditableContent>
    </div>
  </section>
);
export default RequirementsSection;
