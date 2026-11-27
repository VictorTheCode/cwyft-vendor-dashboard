"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Check, CloudUpload, ShieldCheck } from "lucide-react";

type RegType = "cac" | "nin";

const businessCategories = [
  "Restaurant",
  "Fast Food",
  "Bakery & Pastries",
  "Drinks & Beverages",
  "Catering",
  "Grills & Shawarma",
];

const inputCls =
  "h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#001D39] outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15 transition";

export default function VendorVerificationPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [feePaid, setFeePaid] = useState(false);
  const [regType, setRegType] = useState<RegType>("cac");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  // CAC fields
  const [regBusinessName, setRegBusinessName] = useState("");
  const [cacNumber, setCacNumber] = useState("");
  const [cacFileName, setCacFileName] = useState("");

  // NIN fields
  const [fullLegalName, setFullLegalName] = useState("");
  const [nin, setNin] = useState("");
  const [operatingName, setOperatingName] = useState("");
  const [ninVerified, setNinVerified] = useState(false);

  // Shared fields
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setCacFileName(file.name);
      setError("");
    }
  }

  function handleVerifyNin() {
    if (nin.replace(/\D/g, "").length !== 11) {
      setError("Please enter a valid 11-digit NIN before verifying.");
      return;
    }
    setError("");
    setNinVerified(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!category || !phone.trim() || !address.trim()) {
      setError("Please complete category, phone number, and business address.");
      return;
    }
    if (regType === "cac" && (!regBusinessName.trim() || !cacNumber.trim())) {
      setError("Please enter your registered business name and CAC number.");
      return;
    }
    if (
      regType === "nin" &&
      (!fullLegalName.trim() ||
        nin.replace(/\D/g, "").length !== 11 ||
        !operatingName.trim())
    ) {
      setError(
        "Please enter your full legal name, 11-digit NIN, and operating business name.",
      );
      return;
    }
    if (!confirmed) {
      setError("Please confirm that the information provided is accurate and valid.");
      return;
    }
    setError("");
    router.push(`/verification/status?type=${regType.toUpperCase()}`);
  }

  return (
    <div className="w-full max-w-4xl">
      {/* 3-Step Progress Indicator */}
      <div className="mx-auto mb-6 flex max-w-lg items-center justify-between">
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink text-white">
            <Check className="h-4 w-4 stroke-[2.5]" />
          </div>
          <span className="text-xs font-medium text-gray-600">
            Registration Fee
          </span>
        </div>

        <div className="mx-2 mb-5 h-0.5 flex-1 bg-pink" />

        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink text-sm font-semibold text-white">
            2
          </div>
          <span className="text-xs font-medium text-pink">Business Details</span>
        </div>

        <div className="mx-2 mb-5 h-0.5 flex-1 bg-gray-300" />

        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-600">
            3
          </div>
          <span className="text-xs font-medium text-gray-500">Review</span>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#001D39]">
          Verify Your Business
        </h1>
        <p className="mt-1 text-sm text-[#001D39]/80">
          Complete your business registration to start publishing products and
          receiving orders on Cwyft
        </p>
      </div>

      {/* Main Card */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs"
      >
        {/* One-Time Registration Fee */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#001D39]">
              One-Time Registration Fee
            </h2>
            <p className="mt-0.5 text-xs text-gray-500">
              Pay the one-time registration fee to continue with your business
              verification
            </p>
            <p className="mt-2 text-2xl font-bold text-[#001D39]">₦5,000</p>
          </div>

          {feePaid ? (
            <span className="inline-flex items-center gap-1.5 self-start rounded-lg bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600 sm:self-center">
              <Check className="h-4 w-4" />
              Registration Fee Paid
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setFeePaid(true)}
              className="self-start rounded-lg bg-pink px-8 py-2.5 text-sm font-medium text-white transition hover:bg-pink-hover cursor-pointer sm:self-center"
            >
              Pay Now
            </button>
          )}
        </div>

        {/* Business Information */}
        <div className="pt-6 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-[#001D39]">
              Business Information
            </h2>
            <p className="mt-0.5 text-xs text-gray-500">
              Provide your business details to help us verify and categorize your
              business
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium text-gray-600">
              Is your business registered with CAC?
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-md">
              <button
                type="button"
                onClick={() => {
                  setRegType("cac");
                  setError("");
                }}
                className={`rounded-xl border p-3.5 text-left transition cursor-pointer ${
                  regType === "cac"
                    ? "border-pink bg-[#FFF0F4]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#001D39]">
                    Yes
                  </span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      regType === "cac"
                        ? "border-pink bg-pink"
                        : "border-gray-300"
                    }`}
                  >
                    {regType === "cac" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-gray-600">
                  My business is registered with CAC
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRegType("nin");
                  setError("");
                }}
                className={`rounded-xl border p-3.5 text-left transition cursor-pointer ${
                  regType === "nin"
                    ? "border-pink bg-[#FFF0F4]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#001D39]">
                    No
                  </span>
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      regType === "nin"
                        ? "border-pink bg-pink"
                        : "border-gray-300"
                    }`}
                  >
                    {regType === "nin" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-gray-600">
                  I operate as an individual/unregistered business
                </p>
              </button>
            </div>
          </div>

          {regType === "cac" ? (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Registered Business Name
                  </span>
                  <input
                    type="text"
                    value={regBusinessName}
                    onChange={(e) => setRegBusinessName(e.target.value)}
                    placeholder="Enter registered business name"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    CAC Registration Number
                  </span>
                  <input
                    type="text"
                    value={cacNumber}
                    onChange={(e) => setCacNumber(e.target.value)}
                    placeholder="Enter CAC registration number"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Business Category
                  </span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select Business category</option>
                    {businessCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Business Phone Number
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className={inputCls}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                  Business Address
                </span>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your business address"
                  className={inputCls}
                />
              </label>

              {/* Upload CAC Certificate */}
              <div className="rounded-xl bg-[#FFF0F4] p-6 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <CloudUpload className="mx-auto h-6 w-6 text-pink" />
                <p className="mt-2 text-xs font-semibold text-[#001D39]">
                  Upload your CAC Registration Certificate
                </p>
                <p className="mt-0.5 text-[11px] text-gray-500">
                  {cacFileName
                    ? `Selected: ${cacFileName}`
                    : "PDF, JPG or PNG"}
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3 rounded-md border border-pink bg-white px-4 py-1.5 text-xs font-medium text-pink transition hover:bg-pink/10 cursor-pointer"
                >
                  {cacFileName ? "Change File" : "Choose File"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Full Legal Name
                  </span>
                  <input
                    type="text"
                    value={fullLegalName}
                    onChange={(e) => setFullLegalName(e.target.value)}
                    placeholder="Enter your full legal name"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    National Identification Number (NIN)
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={11}
                    value={nin}
                    onChange={(e) => {
                      setNin(e.target.value);
                      setNinVerified(false);
                    }}
                    placeholder="Enter your 11-digit NIN"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Business Category
                  </span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select Business category</option>
                    {businessCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Business Phone Number
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Business Address
                  </span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your business address"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                    Operating Business Name
                  </span>
                  <input
                    type="text"
                    value={operatingName}
                    onChange={(e) => setOperatingName(e.target.value)}
                    placeholder="Enter the name customers know your business by"
                    className={inputCls}
                  />
                </label>
              </div>

              {/* Secure NIN Verification Box */}
              <div className="rounded-xl bg-[#FFF0F4] p-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-pink" />
                  <p className="text-xs font-semibold text-[#001D39]">
                    Secure NIN Verification
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-gray-600">
                  Your NIN will be securely verified to confirm your identity.
                  Your information will be handled confidentially
                </p>
                {ninVerified ? (
                  <span className="mt-3 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600">
                    <Check className="h-3.5 w-3.5" />
                    Identity Verified
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleVerifyNin}
                    className="mt-3 rounded-md border border-pink bg-white px-4 py-1.5 text-xs font-medium text-pink transition hover:bg-pink/10 cursor-pointer"
                  >
                    Verify Identity
                  </button>
                )}
              </div>
            </>
          )}

          {error && (
            <p className="text-xs text-red-500" role="alert">
              {error}
            </p>
          )}

          {/* Confirmation & Submit */}
          <div className="flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-pink"
              />
              I confirm that the information provided is accurate and valid
            </label>

            <button
              type="submit"
              className="rounded-lg bg-pink px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
            >
              Submit for Verification
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
