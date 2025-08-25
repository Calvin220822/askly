import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';

export default function Create() {
  return (
    <div className="flex flex-col h-screen">
      <Header hasBack />
      <div className="flex flex-1 items-center justify-center">
        <div className="flex-1 h-full p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-2xl text-heading tracking-tighter">
                Files
              </h2>
              <p className="text-heading-description text-sm">
                Upload documents to train your AI. Extract text from PDFs, DOCX,
                and TXT files.
              </p>
            </div>
          </div>
          <FileUpload />
        </div>
        <div className="flex-non w-[300px] h-full px-3 border-l">
          <Link href="/playground" className="mt-4 cursor-pointer">
            <Button className="mt-2 w-full cursor-pointer">创建Agent</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
