import React from "react";

export const Icon = ({ size = "w-8", className = "", alt = "", Image }) => {
  return (
    <div>
      <img src={Image} className={`${size} ${className}  `} alt={alt} />
    </div>
  );
};

export default Icon;
