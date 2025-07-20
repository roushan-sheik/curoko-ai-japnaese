import { BarChart3, Maximize2, Package, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import SubSectionHeader from "../ui/SubSectionHeader";
import EditableContent from "../ui/EditableContent";

const ProjectOverviewSection: React.FC = () => (
  <section
    id="project-overview"
    className="mb-8 p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-200"
  >
    <SectionHeader
      icon={<BarChart3 className="mr-3 text-blue-600 w-5 h-5 flex-shrink-0" />}
      title="projectOverview"
    />

    <div id="purpose" className="mb-6">
      <SubSectionHeader
        icon={<Target className="mr-2 text-green-600 w-4 h-4 flex-shrink-0" />}
        title="purposeBackground"
      />
      <EditableContent
        id="purpose-content"
        placeholder="プロジェクトの目的と背景を記述してください..."
      >
        このプロジェクトは、現在の手動による顧客管理プロセスを効率化し、営業チームの生産性向上を目的としています。現状では顧客情報が散在しており、営業活動の効率性に課題があります。
      </EditableContent>
    </div>

    <div id="scope" className="mb-6">
      <SubSectionHeader
        icon={
          <Maximize2 className="mr-2 text-blue-600 w-4 h-4 flex-shrink-0" />
        }
        title="projectScope"
      />
      <EditableContent
        id="scope-content"
        placeholder="プロジェクトのスコープを記述してください..."
      >
        <ul className="list-disc list-inside space-y-1">
          <li>顧客情報管理機能の開発</li>
          <li>営業活動記録機能の実装</li>
          <li>レポート機能の構築</li>
          <li>既存システムとの連携</li>
        </ul>
      </EditableContent>
    </div>

    <div id="deliverables" className="mb-6">
      <SubSectionHeader
        icon={
          <Package className="mr-2 text-purple-600 w-4 h-4 flex-shrink-0" />
        }
        title="deliverables"
      />
      <EditableContent
        id="deliverables-content"
        placeholder="プロジェクトの成果物を記述してください..."
      >
        <ol className="list-decimal list-inside space-y-1">
          <li>要件定義書</li>
          <li>システム設計書</li>
          <li>CRMアプリケーション</li>
          <li>ユーザーマニュアル</li>
          <li>運用保守ガイド</li>
        </ol>
      </EditableContent>
    </div>
  </section>
);
export default ProjectOverviewSection;
