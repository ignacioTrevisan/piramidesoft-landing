"use client";
import { Sidebar } from "./Sidebar";
import { AdminProvider } from "../context/AdminContext";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { UserPayload } from "@/app/lib/auth/jwt";

interface AdminLayoutClientProps {
  children: React.ReactNode;
  user: UserPayload;
}

export const AdminLayoutClient: React.FC<AdminLayoutClientProps> = ({
  children,
  user,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="admin-container">
      <AdminProvider>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar user={user} />
          <main
            ref={mainRef}
            className="admin-main-content flex-1 min-h-screen"
          >
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </AdminProvider>
    </div>
  );
};
