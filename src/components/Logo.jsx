import { Scale } from "lucide-react";
import React from "react";
import { assets } from "../../data";

const Logo = () => {
  return (
    <div>
      <a href="#home">
        <img src={assets.logo} alt="atom logo" className="w-20" />
      </a>
    </div>
  );
};

export default Logo;
