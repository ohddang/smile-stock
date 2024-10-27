"use client";

import Footer from "./Footer";

export default function Contents({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between fixed top-16 left-48 w-[calc(100%-192px)] h-[calc(100%-64px)] bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      {children}
      <Footer />
    </div>
  );
}
