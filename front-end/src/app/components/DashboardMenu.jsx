"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importujemy usePathname

const menuItems = [
  { name: "Products", src: "/products" },
  { name: "Posts", src: "/posts" },
  { name: "Comments", src: "/comments" },
  { name: "Reviews", src: "/reviews" },
  { name: "Events", src: "/events" },
  { name: "Sale", src: "/sale" },
  { name: "Brands", src: "/brands" },
  { name: "Faq", src: "/faq" },
  { name: "Instagram", src: "/instagram" },
  { name: "Payments", src: "/payments" },
  { name: "Delivery", src: "/delivery" },
];

export const DashboardMenu = () => {
  const pathname = usePathname(); // Pobieramy aktualną ścieżkę

  return (
    <ul className="bg-secondary text-mainText font-bold py-8 px-3">
      {menuItems.map((item, index) => {
        const isActive = pathname === `/dashboard${item.src}`; // Sprawdzamy, czy link jest aktywny

        return (
          <li
            key={index}
            className={`p-2 border-b-2 hover:bg-background/20 cursor-pointer ${
              isActive ? "bg-background/30 p-4  " : ""
            }`} // Dodajemy klasy dla aktywnego linku
          >
            <Link
              href={`/dashboard${item.src}`}
              className="block w-full h-full"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
