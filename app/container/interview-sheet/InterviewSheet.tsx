import React from "react";
import { Building, Users, Lightbulb, Settings } from "lucide-react";

import type { ContentData } from "./types/types";
import SectionHeader from "./components/ui/SectionHeader";
import AnnotationBox from "./components/ui/AnnotationBox";
import EditableContent from "./components/ui/EditableContent";

const InterviewSheetPage: React.FC = () => {
  const handleContentChange = (data: ContentData): void => {
    console.log("Content updated:", data);

    // Here you would make your API call:
    // await updateContent(data.id, data);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      {/* Business Background Section */}
      <section
        id="business-background"
        className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <SectionHeader
          icon={<Building className="w-5 h-5" />}
          title="businessBackground"
          status="completed"
        />

        <AnnotationBox
          title="whyAskThis"
          content="businessBackgroundAnnotation"
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              現在の業務フロー / Current Business Flow
            </label>
            <EditableContent
              id="current-business-flow"
              placeholder="現在の業務フローについて詳しく教えてください... / Please describe your current business flow in detail..."
              minHeight="min-h-24"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              現在は、営業担当者が個別にExcelファイルで顧客情報を管理しています。新規顧客の情報は手動で入力し、営業活動の記録も個人のメモに依存している状況です。月次報告書の作成にも多くの時間を要しており、情報の共有も困難な状況です。
            </EditableContent>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              現在の課題・問題点 / Current Issues & Problems
            </label>
            <EditableContent
              id="current-issues"
              placeholder="現在抱えている課題について教えてください... / Please tell us about current challenges..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>顧客情報が個人管理で属人化している</li>
                <li>営業活動の進捗が見えづらい</li>
                <li>重複営業や機会損失が発生している</li>
                <li>報告書作成に時間がかかりすぎる</li>
              </ul>
            </EditableContent>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              改善したい目標 / Improvement Goals
            </label>
            <EditableContent
              id="improvement-goals"
              placeholder="システム導入により達成したい目標は... / What goals do you want to achieve with system implementation..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              営業チーム全体で顧客情報を共有し、営業効率を30%向上させたい。また、月次報告書の作成時間を現在の1/3に短縮し、よりお客様との時間に集中できる環境を作りたい。
            </EditableContent>
          </div>
        </div>
      </section>

      {/* User Information Section */}
      <section
        id="user-info"
        className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <SectionHeader
          icon={<Users className="w-5 h-5" />}
          title="userInfo"
          status="inProgress"
        />

        <AnnotationBox title="whyAskThis" content="userInfoAnnotation" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              主要ユーザー / Primary Users
            </label>
            <EditableContent
              id="primary-users"
              placeholder="システムを主に使用する人は... / Who will be the main users of the system..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              営業部門のメンバー（営業担当者15名、営業マネージャー3名）
              <br />
              営業事務2名
              <br />
              営業部長1名
            </EditableContent>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              利用頻度・アクセス時間 / Usage Frequency & Access Time
            </label>
            <EditableContent
              id="usage-frequency"
              placeholder="いつ、どのくらいの頻度で使用しますか... / When and how frequently will it be used..."
              minHeight="min-h-16"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              営業担当者：日中メイン、外出先からもアクセス
              <br />
              営業マネージャー：朝夕の進捗確認、週次レポート確認
            </EditableContent>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ITスキルレベル / IT Skill Level
            </label>
            <EditableContent
              id="it-skill-level"
              placeholder="ユーザーのITスキルレベルは... / What is the IT skill level of users..."
              minHeight="min-h-16"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            />
          </div>
        </div>
      </section>

      {/* Feature Requests Section */}
      <section
        id="feature-requests"
        className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <SectionHeader
          icon={<Lightbulb className="w-5 h-5" />}
          title="featureRequests"
          status="inProgress"
        />

        <AnnotationBox title="whyAskThis" content="featureRequestsAnnotation" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              必須機能 / Required Features
            </label>
            <EditableContent
              id="required-features"
              placeholder="絶対に必要な機能は... / What features are absolutely necessary..."
              minHeight="min-h-24"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>顧客情報の登録・編集・検索</li>
                <li>営業活動履歴の記録</li>
                <li>売上予測・進捗管理</li>
                <li>基本的なレポート出力</li>
              </ul>
            </EditableContent>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              希望機能 / Desired Features
            </label>
            <EditableContent
              id="desired-features"
              placeholder="あると良い機能は... / What features would be nice to have..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            />
          </div>
        </div>
      </section>

      {/* Technical Constraints Section */}
      <section
        id="technical-constraints"
        className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <SectionHeader
          icon={<Settings className="w-5 h-5" />}
          title="technicalConstraints"
          status="notStarted"
        />

        <AnnotationBox
          title="whyAskThis"
          content="technicalConstraintsAnnotation"
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              既存システムとの連携 / Integration with Existing Systems
            </label>
            <EditableContent
              id="system-integration"
              placeholder="連携が必要な既存システムはありますか... / Are there existing systems that need integration..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              セキュリティ要件 / Security Requirements
            </label>
            <EditableContent
              id="security-requirements"
              placeholder="セキュリティに関する要件は... / What are the security requirements..."
              minHeight="min-h-20"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onContentChange={handleContentChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewSheetPage;
