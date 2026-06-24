import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { cases } from '../data/cases';

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="CASES"
          title="代表案例"
          lead="一个案例不是展示经历，而是说明问题、方法和结果。"
        />
        <div className="grid grid-3">
          {cases.map((c, i) => (
            <Card key={c.slug} flat className={`fade-in fade-in--d${(i % 3) + 1}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span className="tag tag--blue">{c.category}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>{c.year}</span>
              </div>
              <h3 className="h3" style={{ marginBottom: 10 }}>{c.name}</h3>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>
                {c.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
                <Row label="Problem" text={c.problem} />
                <Row label="Approach" text={c.approach} />
                <Row label="Result" text={c.result} />
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                {c.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <Link
                to={`/cases/${c.slug}`}
                className="link"
                style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 14 }}
              >
                查看详情 <span className="arrow">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <span
        style={{
          flexShrink: 0,
          width: 70,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: 'var(--accent)',
          paddingTop: 3,
        }}
      >
        {label}
      </span>
      <span className="ink-2" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{text}</span>
    </div>
  );
}
