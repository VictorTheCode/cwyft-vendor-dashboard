// 40000 -> "₦40k", 1500000 -> "₦1.5M"
export const short = (n: number) =>
  n === 0 ? "₦0" : n >= 1_000_000 ? `₦${n / 1_000_000}M` : `₦${n / 1000}k`;

// Round the top of the y-axis up to a clean number: 38,000 -> 40,000
export function niceTop(max: number) {
  const pow = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / pow) * pow;
}
