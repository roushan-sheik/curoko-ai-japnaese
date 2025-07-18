import { Menu } from "lucide-react";
import { Link } from "react-router";
import LanguageDropdown from "~/container/header/components/LanguageDropdown";
import ProfileDropdown from "~/container/header/components/ProfileDropdown";
import { useSidebar } from "~/context/ SidebarContext";

const Header: React.FC = () => {
  const { toggle } = useSidebar();

  return (
    <header
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          id="menu-button"
          onClick={toggle}
          className="p-2 rounded-md hover:bg-secondary cursor-pointer transition-colors focus:outline-none "
          aria-label="Toggle sidebar"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <Link to="/" className="flex items-center gap-2 focus:outline-none">
          <h1 className="text-heading2 text-primary font-bold">KUROCO AI</h1>
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <LanguageDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
