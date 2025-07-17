import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* Left Logo Box  */}
      <div>
        <Menu strokeWidth={2.5} />
        <h3 className="text-heading2 text-primary">KUROCO AI</h3>
      </div>
      {/* Right Profile and Language Box  */}
      <div>
        <h1 className="text-display1">Hero Heading</h1>
        <p className="text-body2 text-primary">This is body text</p>
        <h1 className="text-title3 text-red-500">Red title</h1>
        <h1 className="text-title3 text-primary">Primary color title</h1>
        <h1 className="text-title3 text-blue-600">Blue title</h1>
      </div>
    </div>
  );
};

export default Header;
