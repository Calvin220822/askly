'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { apiFetch } from '@/lib/api';

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

    // fetch presigned URL
    const res = await apiFetch('/api/file/presigned_url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        file_name: encodeURIComponent('testname.pdf'),
        bucket: s3Bucket,
      }),
    });
    const data = await res.json();

    // upload file to Supabase Storage
    await apiFetch(data.upload_url, {
      method: 'PUT',
      body: file,
    });

    // send metadata to backend
    await apiFetch('/api/file/save_metadata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 'userId',
        bucket: s3Bucket,
        path: data.file_path,
        size: file.size,
        type: file.type,
      }),
    });

    setUploading(false);
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
