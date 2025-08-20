import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex w-full shrink-0 items-center justify-between border-b bg-primary-foreground px-5 py-4">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="object-contain"
        />
        <div className="font-bold">Askly</div>
      </div>
      <div>userinfo</div>
    </header>
  );
}
