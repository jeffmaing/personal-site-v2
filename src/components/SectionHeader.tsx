import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  style,
}: Props) {
  const center = align === 'center';
  return (
    <div
      className={`shead${center ? ' shead--center' : ''}`}
      style={style}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead" style={center ? { margin: '8px auto 0' } : undefined}>{lead}</p>}
    </div>
  );
}
