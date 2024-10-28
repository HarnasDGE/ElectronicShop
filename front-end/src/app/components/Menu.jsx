import Link from "next/link";

export const Menu = ({ className }) => {
  const menuItems = [
    {
      name: "Home",
      src: "/",
    },
    {
      name: "About Us",
      src: "/about-us",
    },
    {
      name: "Catalog",
      src: "/catalog",
    },
    {
      name: "Track Order",
      src: "/track-order",
    },
    {
      name: "Contat",
      src: "/contact",
    },
  ];
  return (
    <ul
      className={`flex-inline items-center  lg:justify-between xl:justify-start xl:gap-16 w-full ${className}`}
    >
      {menuItems.map((item) => (
        <Link href={item.src} key={item.name} className="group">
          <li className="whitespace-nowrap transition-all group-hover:text-secondary ">
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
