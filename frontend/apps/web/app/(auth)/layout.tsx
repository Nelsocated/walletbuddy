import React from "react";
import Image from "next/image";
import logo from "../../../public/walletbuddy_logo.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-0 -translate-x-25 flex items-center">
        <div className="size-150 rounded-full bg-secondary blur-3xl opacity-10" />
      </div>
      <div className="relative z-10 grid grid-cols-2 w-full items-center px-20 h-screen">
        <div className="flex flex-col text-subheader text-textWhite">
          <Image src={logo} alt="logo" width={150} height={150} />
          <div className="text-header text-secondary">
            Welcome to <span className="block font-bold">WalletBuddy!</span>
          </div>
          <div className="line-clamp-2 text-title">
            Your friendly guide to better spending!
          </div>
        </div>
        <main className="flex justify-center items-center w-full">
          {children}
        </main>
      </div>
    </>
  );
}
