import React from "react";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdSpaceDashboard, MdAddToPhotos } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { SiSecurityscorecard } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[240px] bg-cyan-800 h-screen text-white text-xl px-4 py-4 flex flex-col gap-8">
      <Link href="/" className="text-center">
        <SiSecurityscorecard className="text-5xl w-full mb-2" />
        INVite
      </Link>
      <Link href="/profile" className="flex items-center gap-2">
        <MdAccountCircle className="text-3xl" />
        Account
      </Link>
      <div className="flex items-center gap-2">
        <MdOutlineAccountBalanceWallet className="text-3xl" />
        <span>Balance :</span>
        <span className="ml-auto pr-5">10 Rs</span>
      </div>
      <div className="flex items-center gap-2">
        <MdSpaceDashboard className="text-3xl" />
        Dashboard
      </div>
      <div className="flex items-center gap-2">
        <MdAddToPhotos className="text-3xl" />
        Create Cards
      </div>
      <div className="flex items-center gap-2">
        <GiWallet className="text-3xl" />
        Buy Coins
      </div>
      <Link href="/logout" className="flex items-center gap-2">
        <IoLogOutOutline className="text-3xl" />
        Logout
      </Link>
    </div>
  );
}
