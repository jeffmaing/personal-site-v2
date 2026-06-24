import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  ...rest
}: ButtonProps) {
  const cls = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : size === 'lg' ? 'btn--lg' : '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {(variant === 'link') && <span className="arrow">→</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
