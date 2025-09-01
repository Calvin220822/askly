'use client';
import { useActionState } from 'react';
// import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { login, signup } from './actions';

export default function LoginPage() {
  const initialState: any = { error: null };
  const [state, formAction, isPending] = useActionState(login, initialState);

  const [signupState, signupFormAction, isSigupPending] = useActionState(
    signup,
    initialState
  );

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <br />
      <div>
        <Button formAction={formAction}>
          {isPending && <Loader2Icon className="animate-spin" />}
          Log in
        </Button>
        {state.error && (
          <p className="text-red-500 text-sm mt-2">{state.error}</p>
        )}
      </div>

      <br />
      <div>
        <Button formAction={signupFormAction}>
          {isSigupPending && <Loader2Icon className="animate-spin" />}
          Sign up
        </Button>
        {signupState.error && (
          <p className="text-red-500 text-sm mt-2">{signupState.error}</p>
        )}
      </div>
    </form>
  );
}
