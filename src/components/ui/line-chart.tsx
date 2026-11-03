import { niceTop, short } from "@/lib/chart";

export function LineChart({
  labels,
  values,
}: {
  labels: string[];
  values: number[];
}) {
  // Everything is drawn in viewBox units; the SVG then scales to its container
  const W = 560,
    H = 230,
    left = 48,
    right = 12,
    top = 12,
    bottom = 26;
  const plotW = W - left - right;
  const plotH = H - top - bottom;
  const max = niceTop(Math.max(...values));

  const x = (i: number) => left + (i / (values.length - 1)) * plotW;
  const y = (v: number) => top + plotH - (v / max) * plotH;

  const line = values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const area = `${left},${y(0)} ${line} ${x(values.length - 1)},${y(0)}`;
  const ticks = [0, 1, 2, 3, 4].map((i) => (max / 4) * i);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Revenue chart"
    >
      {ticks.map((t) => (
        <g key={t}>
          <line x1={left} x2={W - right} y1={y(t)} y2={y(t)} stroke="#e5e7eb" />
          <text
            x={left - 8}
            y={y(t) + 3}
            textAnchor="end"
            fontSize="10"
            fill="#6b7280"
          >
            {short(t)}
          </text>
        </g>
      ))}
      <polygon points={area} fill="#0a1929" fillOpacity="0.05" />
      <polyline
        points={line}
        fill="none"
        stroke="#0a1929"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {values.map((v, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(v)}
          r="3.5"
          fill="#0a1929"
          stroke="white"
          strokeWidth="2"
        />
      ))}
      {labels.map((l, i) => (
        <text
          key={l}
          x={x(i)}
          y={H - 8}
          textAnchor="middle"
          fontSize="10"
          fill="#6b7280"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}
