import Link from "next/link";
import UserAvater from "../../assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between items-center my-8">
            <div></div>
            <ul className="flex justify-between items-center gap-5">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>

            <div className="flex items-center  justify-center gap-5">
                <Image src={UserAvater} alt="User Image" width={40} height={40} className="rounded-full"></Image>
                <button className="btn bg-purple-500 text-white"><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;