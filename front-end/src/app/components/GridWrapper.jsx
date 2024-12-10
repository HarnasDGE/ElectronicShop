import { WidthWrapper } from "./WidthWrapper";

export const GridWrapper = ({ children, className, sidebar = "LEFT" }) => {
  return (
    <WidthWrapper
      className={`grid grid-cols-1 ${
        sidebar === "LEFT" ? "lg:grid-cols-[29%_70%]" : "lg:grid-cols-[70%_29%]"
      }  gap-[1%] transition-all  ${className}`}
    >
      {children}
    </WidthWrapper>
  );
};
