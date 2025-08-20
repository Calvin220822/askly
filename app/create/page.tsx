import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Create() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex-1 h-screen">文件上传</div>
      <div className="flex-non h-screen w-[300px] px-3 border-l">
        <Link href="/playground" className="mt-4 cursor-pointer">
          <Button className="mt-2 w-full cursor-pointer">创建Agent</Button>
        </Link>
      </div>
    </div>
  );
}
