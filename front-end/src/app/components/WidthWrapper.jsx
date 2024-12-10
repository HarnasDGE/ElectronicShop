export const WidthWrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1720px] transition-all ${className}`}
    >
      {children}
    </div>
  );
};
