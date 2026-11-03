import Link from "next/link";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

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

      <p className="text-center text-xs text-gray-400 mt-6">
        Questions?{" "}
        <Link href="/support" className="text-pink hover:underline font-medium">
          Contact Support
        </Link>
      </p>
    </div>
  );
}
