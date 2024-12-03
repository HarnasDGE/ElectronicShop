export const TextWithHorizontalLine = ({ children }) => {
  return (
    <div className="flex items-center w-full text-gray ">
      <div className="flex-1 h-px bg-gray"></div>
      <div className="mx-2">{children}</div>
      <div className="flex-1 h-px bg-gray"></div>
    </div>
  );
};
