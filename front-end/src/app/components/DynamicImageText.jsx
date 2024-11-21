import React from "react";

export const DynamicImageText = ({ imageSrc, alt, children }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-6 items-start">
        <div className="w-full flex-shrink-0">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full max-w-sm rounded-lg mx-auto lg:mx-0"
            style={{ float: "left", marginRight: "1rem" }} // Float for wrapping text
          />
          {children}
        </div>
      </div>
    </div>
  );
};
