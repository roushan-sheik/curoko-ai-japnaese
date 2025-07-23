import { useTranslation } from "react-i18next";
import type {
  SectionHeaderProps,
  StatusConfig,
  StatusType,
  Translations,
} from "../../types/types";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  status,
}) => {
  const { t } = useTranslation("home");

  const statusConfig: Record<StatusType, StatusConfig> = {
    completed: { bg: "bg-green-100", text: "text-green-800", label: "完了" },
    inProgress: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "進行中",
    },
    notStarted: { bg: "bg-gray-100", text: "text-gray-800", label: "未着手" },
  };

  const currentStatus: StatusConfig =
    statusConfig[status] || statusConfig.notStarted;

  return (
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <span className="mr-3 text-blue-600">{icon}</span>
      <span className="title3">{t(title)}</span>
      <span
        className={`ml-2 px-2 py-1 text-xs ${currentStatus.bg} ${currentStatus.text} rounded`}
      >
        {currentStatus.label}
      </span>
    </h2>
  );
};
export default SectionHeader;
