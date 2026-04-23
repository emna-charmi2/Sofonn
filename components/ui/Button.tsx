// components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self';
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  backgroundImage,
  backgroundColor = '#3b82f6',
  textColor = 'white',
  showArrow = false,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  target = '_self',
}) => {
  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {text}
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </span>
  );

  const styles = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor: backgroundImage ? undefined : backgroundColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: textColor,
  };

  const baseClasses = `
    relative px-8 py-4 rounded-2xl font-semibold text-lg 
    transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg
    flex items-center justify-center gap-3
    cursor-pointer group                  /* ← group + cursor-pointer ici */
    ${className}
  `;

  // Version avec Link
  if (href) {
    return (
      <Link href={href} target={target} className={baseClasses} style={styles}>
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
        )}
        {content}
      </Link>
    );
  }

  // Version bouton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={styles}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      )}
      {content}
    </button>
  );
};

export default Button;