import React from "react";

export default function MainLayout({
  header,
  side,
  main,
}: {
  header: React.ReactNode;
  side: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-0 flex items-center justify-center translate-y-20">
        <div className="size-150 rounded-full bg-secondary blur-3xl opacity-10" />
      </div>
      <div className="relative flex flex-col h-screen w-full py-5">
        <div className="flex flex-col">{header}</div>
        <div className="flex-1 grid grid-cols-[400px_1fr] overflow-hidden gap-3 px-7">
          <aside className="grid grid-rows-2 h-full gap-3 overflow-hidden">
            {side}
          </aside>
          <main className="overflow-hidden">{main}</main>
        </div>
      </div>
    </>
  );
}
