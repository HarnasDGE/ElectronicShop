export const PatternBackground = ({ src, className }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-0  ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};
