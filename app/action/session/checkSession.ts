"use server";

import { cookies } from 'next/headers';
import { verifyToken, UserPayload } from '@/app/lib/auth/jwt';

export async function checkSession(): Promise<UserPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }

    const payload = await verifyToken(token);
    return payload;
  } catch (error) {
    console.error('Session check failed:', error);
    return null;
  }
}

export async function checkAdminSession(): Promise<UserPayload | null> {
  const user = await checkSession();
  
  if (!user || user.role !== 'admin') {
    return null;
  }
  
  return user;
}
