import { Menu } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-3  shadow-md">
      {/* Left Logo Box  */}
      <NavLink to={"/"}>
        <div className="flex items-center gap-4 ">
          <Menu strokeWidth={2.5} />
          <h3 className="text-heading2 text-primary">KUROCO AI</h3>
        </div>
      </NavLink>

      {/* Right Profile and Language Box  */}
      <div></div>
    </div>
  );
};

export default Header;
