export const WidthWrapper = ({ children, className }) => {
  const maxWidth = 1720;
  return (
    <div className={`mx-auto w-full max-w-[${maxWidth}px] ${className}`}>
      {children}
    </div>
  );
};
