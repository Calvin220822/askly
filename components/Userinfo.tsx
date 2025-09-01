'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from './ui/button';

export default function Userinfo() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  const logout = async () => {
    await fetch('/logout', { method: 'POST' });
    window.location.href = '/';
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user.email ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user.email ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div>{user}</div>
        <Button onClick={logout}>logout</Button>
      </div>
    );
  }

  return <div>{user ? user : '未登录'}</div>;
}
