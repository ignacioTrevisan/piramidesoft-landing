"use client";
import { useAdmin } from "./context/AdminContext";
import { Dashboard } from "./components/Dashboard";
import { ProductosSection } from "./components/ProductosSection";
import { BlogsSection } from "./components/BlogsSection";
import { ConsultasSection } from "./components/ConsultasSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AdminPage() {
  const { activeSection } = useAdmin();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "productos":
        return <ProductosSection />;
      case "blogs":
        return <BlogsSection />;
      case "consultas":
        return <ConsultasSection />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div ref={contentRef} className="w-full">
      {renderSection()}
    </div>
  );
}
