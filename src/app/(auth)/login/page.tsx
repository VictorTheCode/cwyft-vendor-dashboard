import Link from "next/link";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { MailIcon } from "@/components/icons";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md ">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Login to Your Vendor Account
        </h1>
      </div>

      <form className="space-y-4">
        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<MailIcon />}
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="submit" fullWidth className="mt-2">
          Login
        </Button>
      </form>

      {/* temporary login link - removve when real auth is implemented  */}

      <Link
        href="/dashboard"
        className="mt-3 block w-full rounded-lg border border-pink py-2.5 text-center text-sm font-medium text-pink transition hover:bg-pink/10"
      >
        Continue to demo dashboard
      </Link>

      <p className="text-center text-xs text-gray-400 mt-6">
        Questions?{" "}
        <Link href="/support" className="text-pink hover:underline font-medium">
          Contact Support
        </Link>
      </p>
    </div>
  );
}
