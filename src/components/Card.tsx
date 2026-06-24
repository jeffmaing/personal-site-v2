import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  flat?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Card({ children, flat, className = '', style }: Props) {
  return (
    <div
      className={`card${flat ? ' card--flat' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
