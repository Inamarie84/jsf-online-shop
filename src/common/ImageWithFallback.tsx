// src/components/Common/ImageWithFallback.tsx
import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  title?: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, title, className }: Props) {
  return src ? (
    <Image
      src={src}
      alt={alt || title || "Image"}
      fill
      className={className || "object-cover"}
    />
  ) : (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm rounded">
      No image available
    </div>
  );
}
