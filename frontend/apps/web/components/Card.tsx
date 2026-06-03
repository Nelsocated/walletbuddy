import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full rounded-2xl border border-primary bg-back1 scrollbar-gutter-stable overflow-y-auto py-3 px-4">
      <div className="flex flex-col h-full">{children}</div>
    </div>
  );
}
