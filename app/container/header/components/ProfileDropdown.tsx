import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "~/context/LanguageContext";

const ProfileDropdown: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full cursor-pointer bg-primary/10  p-3 text-sm  hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="User menu"
      >
        <User className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-popover border rounded-md shadow-lg z-50 animate-in fade-in-0 zoom-in-95">
          <div className="p-3 border-b">
            <p className="font-medium text-popover-foreground">
              {t("aiConsultation")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("currentStatus")}: {t("utilizationInfo")}
            </p>
          </div>
          <div className="p-1">
            <Link
              to="/profile"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors rounded-md text-popover-foreground"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-4 h-4" />
              {t("profile")}
            </Link>
            <Link
              to="/settings"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors rounded-md text-popover-foreground"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              {t("settings")}
            </Link>
            <Link
              to="/notifications"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors rounded-md text-popover-foreground"
              onClick={() => setIsOpen(false)}
            >
              <Bell className="w-4 h-4" />
              {t("notifications")}
            </Link>
            <div className="border-t my-1" />
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors rounded-md text-popover-foreground"
              onClick={() => {
                setIsOpen(false);
                // Add logout logic here
              }}
            >
              <LogOut className="w-4 h-4" />
              {t("logout")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
