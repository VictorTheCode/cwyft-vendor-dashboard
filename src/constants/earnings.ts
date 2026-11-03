import { Payout } from "@/types";

const payouts: Payout[] = [
  {
    id: "PAY-001",
    date: "28 Oct 2026",
    amount: 85000,
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: "PAY-002",
    date: "24 Oct 2026",
    amount: 62500,
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: "PAY-003",
    date: "21 Oct 2026",
    amount: 48750,
    method: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "PAY-004",
    date: "17 Oct 2026",
    amount: 74000,
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: "PAY-005",
    date: "12 Oct 2026",
    amount: 53100,
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: "PAY-006",
    date: "7 Oct 2026",
    amount: 41750,
    method: "Bank Transfer",
    status: "Completed",
  },
];

const TOTAL_EARNINGS = 342680;

export { payouts, TOTAL_EARNINGS };
