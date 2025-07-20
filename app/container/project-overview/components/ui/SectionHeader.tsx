import { useTranslation } from "react-i18next";
import type { SectionHeaderProps } from "../../types/types";

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  const { t } = useTranslation("common");

  return (
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      {icon}
      <span>{t(title)}</span>
    </h2>
  );
};
export default SectionHeader;
