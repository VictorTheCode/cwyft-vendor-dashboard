const iconProps = {
  width: 16,
  height: 16,
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
};

const base = {
  width: 18,
  height: 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
} as const;

export function MailIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />
  </svg>
);

export const WhatsappIcon = () => (
  <svg {...iconProps}>
    <path d="M21 12a9 9 0 01-13.3 7.9L3 21l1.2-4.6A9 9 0 1121 12z" />
    <g transform="translate(6.6 6.6) scale(0.45)" strokeWidth="3.6">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.2-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.9 2.1z" />
    </g>
  </svg>
);

export const ChevronDownIcon = () => (
  <svg {...iconProps} width={16} height={16}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

export const PencilIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />
  </svg>
);

export const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const BagIcon = () => (
  <svg {...base}>
    <path d="M6 7h12l1 13H5L6 7zM9 7a3 3 0 016 0" />
  </svg>
);
export const CoinIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9.5c.5-1 1.6-1.5 3-1.5 1.7 0 3 .8 3 2s-1.3 1.6-3 2-3 .8-3 2 1.3 2 3 2c1.4 0 2.5-.5 3-1.5M12 6v2M12 16v2" />
  </svg>
);
export const ClockIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const ArrowRightIcon = () => (
  <svg {...base} width={14} height={14}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
