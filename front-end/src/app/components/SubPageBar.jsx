import Link from "next/link";

export const SubPageBar = ({ title, className }) => {
  return (
    <div
      className={`bg-subPageGradient flex flex-col items-center justify-center py-10 ${className}`}
    >
      <h1 className="text-center">{title}</h1>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>-</li>
        <li className="font-bold">{title}</li>
      </ul>
    </div>
  );
};
