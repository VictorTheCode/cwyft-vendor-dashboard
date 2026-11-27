"use client";

import { useState, type FormEvent } from "react";
import { Star, UserCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { primaryBtn, secondaryBtn } from "@/components/ui/button";
import { Field, inputClass } from "@/components/ui/form-input";

export default function RiderProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "David Elue",
    phone: "0801 234 5678",
    email: "elue@example.com",
    dob: "12 May 2006",
    vehicleType: "Motorcycle",
    brand: "Volkswagen",
    model: "CG 125",
    plate: "ABC-123-YZ",
  });
  const [draft, setDraft] = useState(profile);
  const [editOpen, setEditOpen] = useState(false);

  function saveProfile(e: FormEvent) {
    e.preventDefault();
    setProfile(draft);
    setEditOpen(false);
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">My Profile</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Manage your personal information and rider details
        </p>
      </div>

      {/* Summary Banner */}
      <section className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-5">
          <UserCircle2 className="h-24 w-24 stroke-[1.2] text-[#001D39]" />
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#001D39]">
              {profile.fullName}
            </h2>
            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>Delivery Rider</span>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>4.8</span>
            </p>
            <p className="text-xs font-medium text-emerald-500">Active Rider</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setDraft(profile);
            setEditOpen(true);
          }}
          className="self-start rounded-lg bg-[#FF5B88] px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-hover sm:self-center cursor-pointer"
        >
          Edit Profile
        </button>
      </section>

      {/* Personal & Vehicle Information */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-base font-semibold text-[#001D39]">
            Personal Information
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <p className="text-[11px] text-gray-500">Full Name</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.fullName}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Phone Number</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.phone}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Email Address</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.email}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Date of Birth</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.dob}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-base font-semibold text-[#001D39]">
            Vehicle Information
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div>
              <p className="text-[11px] text-gray-500">Vehicle Type</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.vehicleType}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Brand</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.brand}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Model</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.model}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Registration Number</p>
              <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
                {profile.plate}
              </p>
            </div>
          </div>

          <div className="mt-4 text-right">
            <button
              type="button"
              onClick={() => {
                setDraft(profile);
                setEditOpen(true);
              }}
              className="text-[11px] font-medium text-pink hover:underline cursor-pointer"
            >
              View vehicle details
            </button>
          </div>
        </section>
      </div>

      {/* Account Information */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="text-base font-semibold text-[#001D39]">
          Account Information
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <p className="text-[11px] text-gray-500">Rider ID</p>
            <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
              RD-00128
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Date Joined</p>
            <p className="mt-0.5 text-xs font-semibold text-[#001D39]">
              12 May 2026
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Status</p>
            <p className="mt-0.5 text-xs font-semibold text-emerald-500">
              Active
            </p>
          </div>
        </div>
      </section>

      <Modal
        open={editOpen}
        title="Edit Rider Profile"
        onClose={() => setEditOpen(false)}
      >
        <form onSubmit={saveProfile} className="space-y-3">
          <Field label="Full Name">
            <input
              value={draft.fullName}
              onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Phone Number">
            <input
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              className={inputClass}
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Vehicle Brand">
              <input
                value={draft.brand}
                onChange={(e) => setDraft({ ...draft, brand: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="Registration Number">
              <input
                value={draft.plate}
                onChange={(e) => setDraft({ ...draft, plate: e.target.value })}
                className={inputClass}
              />
            </Field>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setEditOpen(false)}
              className={secondaryBtn}
            >
              Cancel
            </button>
            <button type="submit" className={primaryBtn}>
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
