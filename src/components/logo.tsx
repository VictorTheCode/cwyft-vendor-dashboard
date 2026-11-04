import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 100, height = 32 }: LogoProps) {
  return (
    <Image
      src="/cwyft-logo.png"
      alt="Cwyft"
      width={width}
      height={height}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
}
