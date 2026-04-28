"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={loading ? "hidden" : "block min-h-screen"}>
        {children}
      </div>
    </>
  );
}
