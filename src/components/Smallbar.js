import React from "react";
import { MdSpaceDashboard, MdAddToPhotos } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { SiSecurityscorecard } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

export default function Smallbar() {
  return (
    <div className="w-[90px] bg-cyan-800 text-white h-screen pt-6 flex flex-col justify-start gap-10">
      <Link
        href="/"
        className="text-2xl text-center hover:opacity-85"
        title="INvite cards app logo"
      >
        <p className="">INvite</p>
        <SiSecurityscorecard className="text-[35px] font-bold text-center w-full mt-4" />
      </Link>
      <Link href="/dashboard" title="Dashboard">
        <MdSpaceDashboard className="text-[35px] font-bold text-center w-full hover:opacity-85" />
      </Link>
      <Link href="/create" title="Create cards">
        <MdAddToPhotos className="text-[35px] font-bold text-center w-full hover:opacity-85" />
      </Link>
      <Link href="/balance" title="Buy coins">
        <GiWallet className="text-[35px] font-bold text-center w-full hover:opacity-85" />
      </Link>
      <Link href="/" title="Settings">
        <IoSettingsSharp className="text-[35px] font-bold text-center w-full hover:opacity-85" />
      </Link>
      <Link href="/logout" className="flex items-center gap-2" title="Logout">
        <IoLogOutOutline className="text-[35px] font-bold text-center w-full hover:opacity-85" />
      </Link>
    </div>
  );
}
