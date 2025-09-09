'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Github from '@/public/github.svg';
import Google from '@/public/google.svg';

import { useActionState } from 'react';
import Image from 'next/image';
import { Loader2Icon } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { login, signup } from '@/app/login/actions';

export default function LoginPannel({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const supabase = createClient();

  const initialState: any = { error: null };
  const [state, formAction, isPending] = useActionState(login, initialState);

  const [signupState, signupFormAction, isSigupPending] = useActionState(
    signup,
    initialState
  );

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-8">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button
                  className="flex-1 cursor-pointer"
                  formAction={formAction}
                >
                  {isPending && <Loader2Icon className="animate-spin" />}
                  Login
                </Button>
                <Button
                  type="submit"
                  className="flex-1 cursor-pointer"
                  formAction={signupFormAction}
                >
                  {isSigupPending && <Loader2Icon className="animate-spin" />}
                  Sign up
                </Button>
              </div>
              {state.error && (
                <p className="text-red-500 text-sm mt-2">
                  login error: {state.error}
                </p>
              )}

              {signupState.error && (
                <p className="text-red-500 text-sm mt-2">
                  {' '}
                  sign up error {signupState.error}
                </p>
              )}
            </div>
          </form>
          <div className="flex flex-col gap-3 mt-3">
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full cursor-pointer"
              onClick={signInWithGoogle}
            >
              <Google />
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full cursor-pointer"
              onClick={signInWithGithub}
            >
              <Github />
              GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
