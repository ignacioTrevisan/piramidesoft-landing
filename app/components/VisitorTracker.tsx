"use client";
import { useVisitorTracking } from "@/app/hooks/useVisitorTracking";
import { ReactNode } from "react";

interface VisitorTrackerProps {
  children: ReactNode;
}

export const VisitorTracker: React.FC<VisitorTrackerProps> = ({ children }) => {
  useVisitorTracking();
  
  return <>{children}</>;
};
