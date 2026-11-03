import Link from "next/link";
import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#001D39] h-16 flex items-center justify-between px-8 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <span className="text-sm text-gray-200">
          Already have an account?{" "}
          <Link href="/login" className="text-pink font-medium hover:underline">
            Log in
          </Link>
        </span>
      </header>
      <main className="flex-1 flex items-start justify-center pt-8 pb-12 px-4">
        {children}
      </main>
    </div>
  );
}
