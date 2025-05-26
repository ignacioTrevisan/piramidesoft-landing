"use server";

import { logoutUser } from "@/app/action/session/logoutUser";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const result = await logoutUser();
  
  if (result.ok) {
    redirect('/auth/login');
  }
  
  return result;
}
