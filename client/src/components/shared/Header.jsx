"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    setCurrentDate(format(new Date(), "EEEE, MMM dd, yyyy"));
  }, []);
  return (
    <div className="text-center my-8 space-y-2">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={200}
        className="mx-auto"
      />
      <h1>Journalism Without Fear or Favour</h1>
      <p>{currentDate}</p>
    </div>
  );
};

export default Header;
