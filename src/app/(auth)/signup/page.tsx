import Link from "next/link";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md ">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Create Your Vendor Account
        </h1>
        <p className="text-sm text-gray-500">
          Get your restaurant registered on Cwyft
        </p>
      </div>

      <form className="space-y-4">
        <FormInput
          id="businessName"
          label="Business Name"
          type="text"
          placeholder="Enter your business name"
        />

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<MailIcon />}
        />

        <FormInput
          id="address"
          label="Full Address"
          type="text"
          placeholder="Enter your address"
          icon={<MapPinIcon />}
        />

        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter phone number"
          icon={<PhoneIcon />}
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <div className="flex items-start gap-2 pt-1">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-pink focus:ring-pink"
          />
          <label htmlFor="terms" className="text-xs text-gray-500">
            I agree to the{" "}
            <Link href="/terms" className="text-pink hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-pink hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button type="submit" fullWidth className="mt-2">
          Create Account
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
