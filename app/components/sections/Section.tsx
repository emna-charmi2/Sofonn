import type { ElementType, ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'page';
  as?: ElementType;
};

export default function Section({
  children,
  className = '',
  variant = 'default',
  as: Tag = 'section',
}: SectionProps) {
  const bg =
    variant === 'alt' ? 'ds-section-alt' : variant === 'page' ? 'ds-page' : 'section';
  return <Tag className={`${bg} ${className}`.trim()}>{children}</Tag>;
}
