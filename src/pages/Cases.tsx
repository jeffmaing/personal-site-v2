import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import CaseCover from '../components/CaseCover';
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
            <Card key={c.slug} flat className={`card--cover fade-in fade-in--d${(i % 3) + 1}`}>
              <CaseCover variant={c.cover} label={c.coverLabel} />
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span className="tag tag--blue">{c.category}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{c.year}</span>
                </div>
                <h3 className="h3" style={{ marginBottom: 10, fontSize: 19 }}>{c.name}</h3>
                <p className="muted" style={{ lineHeight: 1.65, marginBottom: 18, fontSize: 14 }}>
                  {c.summary}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  <Row label="Problem" text={c.problem} />
                  <Row label="Approach" text={c.approach} />
                  <Row label="Result" text={c.result} />
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
                  {c.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <Link
                  to={`/cases/${c.slug}`}
                  className="link"
                  style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  查看详情 <span className="arrow">→</span>
                </Link>
              </div>
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
          flexShrink: 0, width: 70, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
          color: 'var(--accent)', paddingTop: 3,
        }}
      >
        {label}
      </span>
      <span className="ink-2" style={{ fontSize: 13, lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}
