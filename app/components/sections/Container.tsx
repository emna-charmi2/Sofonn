import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  /** Max-width only (no horizontal padding) — use when the parent section supplies padding */
  flush?: boolean;
};

export default function Container({ children, className = '', tight, flush }: ContainerProps) {
  if (flush) {
    const max = tight ? 'max-w-4xl' : 'max-w-7xl';
    return <div className={`${max} mx-auto ${className}`.trim()}>{children}</div>;
  }
  const base = tight ? 'ds-container-tight' : 'ds-container';
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}
