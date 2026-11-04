import Image from "next/image";
export function Thumb({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative mx-auto h-10 w-14 overflow-hidden rounded bg-gray-200">
      {src ? (
        <Image src={src} alt={alt} fill sizes="56px" className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* keep your existing placeholder <svg> here */}

          <div className="mx-auto flex h-10 w-14 items-center justify-center rounded bg-gray-200">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
