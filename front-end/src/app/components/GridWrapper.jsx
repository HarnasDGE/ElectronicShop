import { WidthWrapper } from "./WidthWrapper";

export const GridWrapper = ({ children, className }) => {
  return (
    <WidthWrapper>
      <div
        className={`grid grid-cols-1 lg:grid-cols-[29%_70%] gap-[1%] ${className}`}
      >
        {children}
      </div>
    </WidthWrapper>
  );
};
