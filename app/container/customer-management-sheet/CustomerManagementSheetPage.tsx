import { useTranslation } from "react-i18next";

const CustomerManagementSheetPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="border border-gray-300 rounded-lg p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {t("customerManagementSystemHearingSheet")}
          </h1>
          <p className="text-sm text-gray-600">
            Created on: 2024/12/10 | Person in charge: Sales Planning
            Department, Tanaka
          </p>
        </div>

        {/* Hearing Overview */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Hearing Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We conducted a hearing to clarify current issues and requests
            regarding the introduction of a system aimed at improving the
            efficiency of customer management in the sales department.
          </p>
        </section>

        {/* Participants */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Participants
          </h2>
          <div className="space-y-1 text-gray-700">
            <p>
              Sales Manager: Mr. <span className="line-through">Sato</span>
            </p>
            <p>
              Sales Manager: Suzuki-<span className="line-through">san</span>
            </p>
            <p>
              Sales representatives: Mr.{" "}
              <span className="line-through">Takahashi</span> and Mr.{" "}
              <span className="line-through">Nakamura</span>
            </p>
          </div>
        </section>

        {/* Current Issues */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Current issues
          </h2>
          <p className="text-gray-700 mb-3">
            The current customer management relies on personal Excel files,
            which creates the following issues:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="line-through">
                Personalization of customer information
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Difficulties in sharing information
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Lack of visibility into sales activities
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Increased effort required to create reports
            </li>
          </ul>
        </section>

        {/* Expected Effects */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Expected effects of the system
          </h2>
          <p className="text-gray-700 mb-3">
            The new system is expected to have the following effects:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              30% improvement in sales efficiency
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Monthly report creation time reduced to 1/3
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Reduce lost sales opportunities
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Information sharing across the team
            </li>
          </ul>
        </section>

        {/* Next Check */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Next check
          </h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Requirements for integration with existing systems
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Security Policy
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              User authority design
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Data migration method
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CustomerManagementSheetPage;
