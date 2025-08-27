import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default async function Home() {
  const data = await fetch('/api/agents');
  const agents = await data.json();
  console.log('agents', agents);

  return (
    <div className="font-sans min-h-screen">
      <Header />
      <div className="px-4">
        <div className="flex items-center justify-between py-3">
          <div className="text-xl font-bold">Agents</div>
          <Link href="/create">
            <Button className="mt-2">New AI Agent</Button>
          </Link>
        </div>
        {agents?.data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.data.map((agent: any) => (
              <div
                key={agent.id}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {agent.description}
                </p>
                <Link href={`/playground/${agent.id}`}>
                  <Button className="w-full">View Agent</Button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex max-w-[420px] flex-col items-center justify-center gap-2">
              <h2 className="font-semibold text-base text-primary sm:text-lg">
                No agents yet..
              </h2>
              <p className="text-center text-paragraph-3 text-sm sm:text-base">
                Create your first AI Agent to start automating support,
                generating leads, and answering customer questions.
              </p>
              <Link href="/create">
                <Button className="w-full">Create AI Agent</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
