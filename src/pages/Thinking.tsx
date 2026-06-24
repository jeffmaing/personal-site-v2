import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { articles, categories } from '../data/articles';

export default function Thinking() {
  const [active, setActive] = useState('全部');

  const filtered = active === '全部'
    ? articles
    : articles.filter((a) => a.category === active || a.tags.includes(active));

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="THINKING"
          title="思考与洞察"
          lead="关于汽车行业、数字化、AI 落地和运营系统的一些判断。"
        />

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="btn btn--sm"
              style={{
                background: active === cat ? 'var(--navy)' : '#fff',
                color: active === cat ? '#fff' : 'var(--ink-2)',
                border: '1px solid',
                borderColor: active === cat ? 'var(--navy)' : 'var(--line)',
                fontWeight: 500,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <div
          style={{
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {filtered.map((a, i) => (
            <Link
              key={a.slug}
              to="/thinking"
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: 24,
                alignItems: 'center',
                padding: '24px 28px',
                borderBottom: i === filtered.length - 1 ? 'none' : '1px solid var(--line)',
                transition: 'background 0.15s',
              }}
              className="thought-row"
              onMouseEnter={(e) => (e.currentTarget.style.background = '#FAFBFC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{a.date}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{a.readTime}</div>
              </div>
              <div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span className="tag tag--blue">{a.category}</span>
                  {a.tags.filter((t) => t !== a.category).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{a.excerpt}</p>
              </div>
              <span className="arrow" style={{ color: 'var(--accent)', fontSize: 18 }}>→</span>
            </Link>
          ))}
        </div>

        <style>{`
          @media (max-width: 720px) {
            .thought-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
