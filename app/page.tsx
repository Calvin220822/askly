import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <div>
        <h2>Agents</h2>
        <div>
          <div className="flex max-w-[420px] flex-col items-center justify-center gap-2">
            <h2 className="font-semibold text-base text-primary sm:text-lg">
              No agents yet..
            </h2>
            <p className="text-center text-paragraph-3 text-sm sm:text-base">
              Create your first AI Agent to start automating support, generating
              leads, and answering customer questions.
            </p>
            <Link href="/create">
              <Button className="w-full">Create AI Agent</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
