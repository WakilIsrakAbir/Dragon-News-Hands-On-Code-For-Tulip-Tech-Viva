import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <div className="mb-1 font-bold text-2xl text-white text-center bg-blue-400 p-2 rounded-md">
        Social Media
      </div>
      <div className="p-5">
        <h2 className="mb-3 text-xl font-bold">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn flex gap-2">
            <FaGoogle /> Login With Google
          </button>
          <button className="btn flex gap-2">
            <FaGithub /> Login With Github
          </button>
        </div>
        <h2 className="mt-3 mb-3 text-xl font-bold">Find Us On</h2>
        <div className="flex flex-col gap-2">
          <Link
            href={"https://www.facebook.com/wakil.israk.abir.2024"}
            className="btn flex gap-2"
          >
            <FaFacebook /> Facebook
          </Link>

          <Link
            href={"https://www.instagram.com/wakil_israk_abir/"}
            className="btn flex gap-2"
          >
            <FaInstagram /> Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
