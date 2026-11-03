import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 100, height = 32 }: LogoProps) {
  return (
    <Image
      src="/CWYFT LOGO WHITE+PINK 2.png"
      alt="Cwyft"
      width={width}
      height={height}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
}
