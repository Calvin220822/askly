'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const s3Bucket = process.env.NEXT_PUBLIC_S3_BUCKET || 'agentFiles';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    // TOOD：需要获取presigined URL
    // 上传文件到 Supabase 存储桶
    const { data, error } = await supabase.storage
      .from(s3Bucket)
      .upload(`agentFiles/${file.name}`, file, {
        cacheControl: '86400', // 缓存 1 天
        upsert: false, // 文件不覆盖
      });

    if (error) throw error;

    // 将文件元数据保存到数据库
    await fetch('/api/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 'userId',
        bucket: s3Bucket,
        path: data.path,
        size: file.size,
        mime_type: file.type,
      }),
    });

    setUploading(false);
    console.log('File uploaded:', data);
    toast.success('File uploaded successfully!');
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>
    </div>
  );
}
