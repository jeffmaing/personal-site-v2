import SectionHeader from '../components/SectionHeader';

const TIMELINE = [
  {
    company: '港泓咨询',
    period: '2023 — 至今',
    role: '数字化与 AI 落地负责人',
    note: '主导雷克萨斯、保时捷等豪华品牌的数字化产品与 AI 应用落地，覆盖培训、客户体验、运营诊断等场景。',
  },
  {
    company: '易车',
    period: '2019 — 2023',
    role: '数字化产品负责人',
    note: '负责汽车行业数据产品与运营平台，搭建经销商运营与用户洞察的数据体系。',
  },
  {
    company: '安永 EY',
    period: '2012 — 2019（约 7 年）',
    role: '咨询顾问',
    note: '参与多个行业的运营咨询、流程梳理与数字化转型项目，沉淀了系统化的方法论。',
  },
  {
    company: '英菲尼迪',
    period: '2009 — 2012',
    role: '经销商运营 / 培训',
    note: '负责经销商培训体系搭建与客户体验管理，从一线理解门店真实运营节奏。',
  },
  {
    company: '奔驰 Mercedes-Benz',
    period: '2006 — 2009',
    role: '经销商运营',
    note: '从一线销售与运营起步，对豪华品牌经销商网络的运作有最直接的体感。',
  },
];

const FOCUS = [
  '经销商运营', '培训体系', '客户体验', '数字化项目', 'AI 落地', '流程标准化',
];

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="ABOUT" title="关于我" />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'start',
            }}
            className="about-grid"
          >
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.85, color: 'var(--ink-2)', marginBottom: 20 }}>
                我在汽车行业做了 19 年，经历过主机厂、咨询公司、数字化产品与 AI 落地项目。
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--ink-2)', marginBottom: 20 }}>
                长期关注经销商运营、培训体系、客户体验和数字化管理。
                我相信流程比工具更重要——先用咨询方法把业务拆清楚，再上系统，最后才是 AI。
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--ink-2)' }}>
                现在主要在做企业运营体系的数字化与 AI 落地，
                帮车企和经销商网络把复杂流程变得更清楚、更可执行。
              </p>

              <div style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {FOCUS.map((f) => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #EEF2F7, #DDE4ED)',
                aspectRatio: '4 / 5',
                border: '1px solid var(--line)',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="麻明"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          <style>{`
            @media (max-width: 880px) {
              .about-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 880 }}>
          <SectionHeader eyebrow="CAREER" title="经历时间线" />

          <div style={{ position: 'relative', paddingLeft: 28 }}>
            <div
              style={{
                position: 'absolute',
                left: 6,
                top: 8,
                bottom: 8,
                width: 2,
                background: 'var(--line)',
              }}
            />
            {TIMELINE.map((t, i) => (
              <div
                key={t.company}
                style={{
                  position: 'relative',
                  paddingBottom: i === TIMELINE.length - 1 ? 0 : 36,
                }}
                className="fade-in"
              >
                <span
                  style={{
                    position: 'absolute',
                    left: -28,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#fff',
                    border: '3px solid var(--accent)',
                  }}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'baseline', marginBottom: 6 }}>
                  <h3 className="h3" style={{ fontSize: 19 }}>{t.company}</h3>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.period}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--accent)', marginBottom: 8 }}>
                  {t.role}
                </div>
                <p className="muted" style={{ lineHeight: 1.75, maxWidth: '60ch' }}>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
