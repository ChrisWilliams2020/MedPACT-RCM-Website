import { useState, useRef } from "react";
import { Upload, User } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  personId: string;
  personName: string;
  currentImage?: string;
}

export default function ImageUpload({ personId, personName, currentImage }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState<string>(currentImage || "");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(true);

    try {
      // Create a local preview immediately
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      // In a real implementation, you would upload to server here
      // const formData = new FormData();
      // formData.append('image', file);
      // formData.append('personId', personId);
      // const response = await fetch('/api/upload-image', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();
      // setImageUrl(data.url);

      setTimeout(() => setUploading(false), 500);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
      setUploading(false);
    }
  };

  return (
    <div className="relative h-20 w-20 flex-shrink-0 rounded-2xl bg-gray-100 border border-gray-300 group cursor-pointer overflow-hidden">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={personName}
          fill
          className="object-cover"
          sizes="80px"
        />
      ) : (
        <div className="flex items-center justify-center h-full w-full text-gray-400">
          <User className="h-8 w-8" />
        </div>
      )}
      
      {/* Upload overlay */}
      <div
        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        onClick={() => fileInputRef.current?.click()}
      >
        {uploading ? (
          <div className="text-white text-xs">Uploading...</div>
        ) : (
          <Upload className="h-6 w-6 text-white" />
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
