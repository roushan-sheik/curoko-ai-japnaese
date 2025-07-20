import React from "react";
import { useTranslation } from "react-i18next";
import { Target, Layers, Package, Zap } from "lucide-react";

const ProjectOverviewPage = () => {
  const { t } = useTranslation("home");

  return (
    <div className="p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Layers className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t("projectOverview")}
          </h1>
        </div>
      </div>

      {/* Purpose & Background Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            {t("purposeBackground")}
          </h2>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            {t("projectPurposeDescription")}
          </p>
        </div>
      </div>

      {/* Project Scope Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1 bg-blue-100 rounded">
            <Layers className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            {t("projectScope")}
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700">{t("customerInfoManagement")}</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700">{t("salesActivityRecording")}</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700">{t("reportingFunctionality")}</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700">
              {t("existingSystemIntegration")}
            </span>
          </div>
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1 bg-purple-100 rounded">
            <Package className="w-4 h-4 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            {t("deliverables")}
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">1.</span>
            <span className="text-gray-700">{t("requirementsDefinition")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">2.</span>
            <span className="text-gray-700">{t("systemDesignDocument")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">3.</span>
            <span className="text-gray-700">{t("crmApplication")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">4.</span>
            <span className="text-gray-700">{t("userManual")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">5.</span>
            <span className="text-gray-700">{t("operationGuide")}</span>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 bg-blue-100 rounded">
            <Zap className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            {t("requirements")}
          </h2>
        </div>

        {/* Functional Requirements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1 bg-green-100 rounded">
              <Zap className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              {t("functionalRequirements")}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    {t("functionName")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    {t("priority")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                    {t("overview")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {t("userLogin")}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {t("high")}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {t("userAuthenticationFunction")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewPage;
