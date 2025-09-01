'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from 'lucide-react';
import { Button } from './ui/button';
import Userinfo from './Userinfo';

interface HeaderProps {
  children?: React.ReactNode;
  hasBack?: boolean;
}

export default function Header(props: HeaderProps) {
  const { children, hasBack } = props;
  const router = useRouter();
  return (
    <header className="flex-none flex w-full shrink-0 items-center justify-between border-b bg-primary-foreground px-5 py-4">
      <div className="flex items-center gap-2">
        {hasBack && (
          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon />
          </Button>
        )}
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="object-contain"
        />
        <div className="font-bold">Askly</div>
      </div>
      <div className="flex items-center">
        <Userinfo />
      </div>
    </header>
  );
}
