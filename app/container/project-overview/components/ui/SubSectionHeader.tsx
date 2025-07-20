import { useTranslation } from "react-i18next";
import type { SubSectionHeaderProps } from "../../types/types";

const SubSectionHeader: React.FC<SubSectionHeaderProps> = ({
  icon,
  title,
  translateKey,
}) => {
  const { t } = useTranslation("common");
  return (
    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
      {icon}
      <span>{t(title)}</span>
    </h3>
  );
};
export default SubSectionHeader;
