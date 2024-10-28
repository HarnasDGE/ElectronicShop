export const WidthWrapper = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-[1720px] ${className}`}>
      {children}
    </div>
  );
};
