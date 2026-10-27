"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {

    const pathname = usePathname();
    // console.log(pathname, "pathname");

    const isActive = href === pathname;

  return (
    <Link href={href} className={`${isActive ? "bg-green-500 text-white px-2 py-1 rounded-md " :""}`}>{children}</Link>
  )
}

export default NavLink