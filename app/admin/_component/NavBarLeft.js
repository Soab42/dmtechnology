"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathName = usePathname().slice(1);

  return (
    <div className="flex justify-center xl:flex-col flex-wrap gap-2 m-4 w-full px-2 text-[.7rem]">
      <Link
        className={`btn  ${
          pathName == "admin" ? "bg-green-400" : "bg-gray-400 text-white"
        }`}
        href={"/admin"}
      >
        DashBoard
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("users") ? "bg-green-400" : "bg-gray-400 text-white"
        }`}
        href={"/admin/users"}
      >
        Users List
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("branch_date")
            ? "bg-green-400"
            : "bg-gray-400 text-white"
        }`}
        href={"/admin/branch_date"}
      >
        Branch Date
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("cashbook")
            ? "bg-green-400"
            : "bg-gray-400 text-white"
        }`}
        href={"/admin/cashbook"}
      >
        Cash & Bank book
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("rp") ? "bg-green-400" : "bg-gray-400 text-white"
        }`}
        href={"/admin/rp"}
      >
        Recept Payment Report
      </Link>
      <Link
        className={`btn  ${
          pathName.includes("income")
            ? "bg-green-400"
            : "bg-gray-400 text-white"
        }`}
        href={"/admin/income"}
      >
        Income Statement
      </Link>
      <Link
        className={`btn ${
          pathName.includes("balance")
            ? "bg-green-400"
            : "bg-gray-400 text-white"
        }`}
        href={"/admin/balance"}
      >
        Balance Sheet
      </Link>
    </div>
  );
}
