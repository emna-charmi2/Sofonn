import type { ReactNode } from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
};

export default function Heading({ as: Tag = 'h2', children, className = '' }: HeadingProps) {
  return <Tag className={className.trim()}>{children}</Tag>;
}
