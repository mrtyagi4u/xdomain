'use client';

import styles from '../icons.module.css';

interface LogoProps {
  size?: number;
}

export function Logo({ size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="XDomain"
      className={styles.logo}
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 13 L24 24 L9 35" />
        <path d="M39 13 L24 24 L39 35" />
        <path d="M30 7 L18 24 L30 41" />
        <path d="M18 7 L30 24 L18 41" />
      </g>
      <circle cx="24" cy="24" r="3.4" fill="currentColor" />
    </svg>
  );
}
