"use client";
import React from "react";
import { useReactToPrint } from "react-to-print";
import PrintButton from "../(dashboard)/_component/PrintButton";

export default function PrintWrapper({ children }) {
  const printRef = React.useRef();
  const print = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <div>
      <PrintButton print={print} />
      <div className="p-6" ref={printRef}>
        {children}
      </div>
    </div>
  );
}
