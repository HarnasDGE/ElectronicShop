import { WidthWrapper } from "./WidthWrapper";

export const GridWrapper = ({ children, className, sidebar = "left" }) => {
  return (
    <WidthWrapper>
      <div
        className={`grid grid-cols-1 ${
          sidebar === "left"
            ? "lg:grid-cols-[29%_70%]"
            : "lg:grid-cols-[70%_29%]"
        }  gap-[1%] ${className}`}
      >
        {children}
      </div>
    </WidthWrapper>
  );
};
