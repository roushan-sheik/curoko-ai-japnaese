import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* Left Logo Box  */}
      <div>
        <Menu strokeWidth={2.5} />
        <h3 className="text-display3">KUROCO AI</h3>
      </div>
      {/* Right Profile and Language Box  */}
      <div></div>
    </div>
  );
};

export default Header;
