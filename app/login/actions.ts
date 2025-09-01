'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  console.log(error, 'login error');

  if (error) {
    return { error: error.message };
    // redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  console.log(data, 'signup data');

  const { error } = await supabase.auth.signUp(data);

  console.log(error, 'signup error');

  if (error) {
    return { error: error.message };
    // redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
