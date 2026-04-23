import type { ReactNode } from 'react';

type TextBlockProps = {
  as?: 'p' | 'span' | 'div';
  children: ReactNode;
  className?: string;
};

export default function TextBlock({ as: Tag = 'p', children, className = '' }: TextBlockProps) {
  return <Tag className={className.trim()}>{children}</Tag>;
}
