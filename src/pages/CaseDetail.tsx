import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import CaseCover from '../components/CaseCover';
import { getCaseBySlug } from '../data/cases';

export default function CaseDetail() {
  const { slug } = useParams();
  const c = slug ? getCaseBySlug(slug) : undefined;

  if (!c) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h2" style={{ marginBottom: 16 }}>未找到该案例</h1>
          <Button to="/cases" variant="link">返回案例列表</Button>
        </div>
      </section>
    );
  }

  return (
    <article>
      {/* Cover image */}
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div
          className="detail-cover-wrap"
          style={{ marginTop: 24 }}
        >
          <CaseCover variant={c.cover} label={c.coverLabel} />
        </div>
        <style>{`
          .detail-cover-wrap {
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--line);
            box-shadow: var(--shadow-md);
          }
          .detail-cover-wrap .case-cover { aspect-ratio: 21 / 9; }
        `}</style>
      </div>

      {/* Header */}
      <section className="section" style={{ paddingTop: 'clamp(40px, 6vw, 64px)', paddingBottom: 'clamp(32px, 5vw, 48px)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Link
            to="/cases"
            className="link"
            style={{ color: 'var(--muted)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}
          >
            <span className="arrow" style={{ transform: 'rotate(180deg)' }}>→</span> 返回案例列表
          </Link>

          <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
            <span className="tag tag--blue">{c.category}</span>
            {c.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
            <span className="tag">{c.year}</span>
          </div>

          <h1 className="h1" style={{ marginBottom: 18, fontSize: 'clamp(30px, 4.4vw, 48px)' }}>
            {c.name}
          </h1>
          <p className="lead" style={{ fontSize: 17 }}>{c.summary}</p>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ paddingBottom: 'clamp(40px, 6vw, 64px)' }}>
        <div className="container">
          <div
            className="grid grid-3"
            style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '28px' }}
          >
            {c.metrics.map((m) => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div className="metric-num">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Block no="01" title="项目背景">{c.background}</Block>
          <Block no="02" title="客户问题">{c.problem}</Block>
          <Block no="03" title="解决方法">{c.approach}</Block>

          <div style={{ marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>04 · 落地过程</div>
            <h2 className="h3" style={{ marginBottom: 20 }}>分三步交付</h2>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {c.process.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 16,
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '18px 20px',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: 'var(--navy)',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="ink-2" style={{ lineHeight: 1.7 }}>{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <Block no="05" title="结果">{c.result}</Block>

          <div
            style={{
              background: 'rgba(15, 42, 68, 0.04)',
              border: '1px solid rgba(15, 42, 68, 0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 10 }}>06 · 我的判断 / 经验总结</div>
            <p className="ink-2" style={{ fontSize: 17, lineHeight: 1.8, fontStyle: 'italic' }}>
              「{c.takeaway}」
            </p>
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Button to="/cases" variant="ghost">返回案例列表</Button>
          </div>
        </div>
      </section>
    </article>
  );
}

function Block({ no, title, children }: { no: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>{no} · {title}</div>
      <h2 className="h3" style={{ marginBottom: 12 }}>{title}</h2>
      <p className="ink-2" style={{ fontSize: 16.5, lineHeight: 1.85 }}>{children}</p>
    </div>
  );
}
