'use client';
import Image from 'next/image';
import LoginPannel from '@/components/LoginPannel';

export default function LoginPage() {
  return (
    <div className="h-screen w-screen overflow-hidden p-3 flex flex-col">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="object-contain"
        />
        <div className="font-bold">Askly</div>
      </div>

      <div className="flex items-center justify-center w-full pt-40">
        <div className="w-[500px]">
          <LoginPannel />
        </div>
      </div>
    </div>
  );
}
