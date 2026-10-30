"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/" || pathname.startsWith("/category")
      : pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "bg-green-500 text-white px-3 py-1 rounded-md" : "text-gray-700 hover:text-green-600"
      } font-medium transition`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
