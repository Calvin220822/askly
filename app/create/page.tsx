import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Create() {
  return (
    <div className="flex flex-col h-screen">
      <Header hasBack />
      <div className="flex flex-1 items-center justify-center">
        <div className="flex-1 h-full">文件上传</div>
        <div className="flex-non w-[300px] h-full px-3 border-l">
          <Link href="/playground" className="mt-4 cursor-pointer">
            <Button className="mt-2 w-full cursor-pointer">创建Agent</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
