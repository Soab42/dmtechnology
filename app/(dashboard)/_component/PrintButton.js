import React from "react";
import { AiOutlinePrinter } from "react-icons/ai";

export default function PrintButton({ print }) {
  return (
    <button
      className={
        "shadowBtn btn text-[.7rem] font-normal fixed bottom-[2rem] right-5 flex items-center gap-2 justify-center py-1"
      }
      onClick={print}
    >
      <AiOutlinePrinter className={"text-[.8rem]"} /> Print
    </button>
  );
}
