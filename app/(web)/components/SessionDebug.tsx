'use client';

import { useSession } from '@/app/hooks/useSession';

export const SessionDebug = () => {
  const { user, isLoading, isAuthenticated } = useSession();

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-50">
      <div><strong>🔍 Session Debug:</strong></div>
      <div>Loading: {isLoading ? 'YES' : 'NO'}</div>
      <div>Authenticated: {isAuthenticated ? 'YES' : 'NO'}</div>
      <div>User: {user ? user.name : 'NULL'}</div>
      <div>Role: {user ? user.role : 'NULL'}</div>
    </div>
  );
};
