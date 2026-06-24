import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

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
      <SEO
        title="关于我 · 麻明"
        description="19 年汽车行业，从奔驰、英菲尼迪、安永、易车到港泓咨询。我不是 AI 从业者出身，我来自汽车行业。"
        path="about"
      />
      {/* Intro + portrait */}
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
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="麻明"
                width={480}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
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

      {/* Why me — storytelling */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeader eyebrow="WHY ME" title="为什么是我" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p style={{ fontSize: 20, lineHeight: 1.7, color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              我不是 AI 从业者出身。
              <br />
              我来自汽车行业。
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-2)' }}>
              经历过主机厂、咨询公司、数字化项目，所以我更关注的从来不是「这个模型有多强」，
              而是：
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
              {[
                { k: '业务如何运行', v: '一个流程从发起到闭环，中间经过多少环节、多少角色、多少数据断点。' },
                { k: '系统如何落地', v: '系统上线只是开始。团队能不能用起来，数据能不能流起来，才是真问题。' },
                { k: 'AI 如何真正进入流程', v: '不是套一个模型，而是把 AI 放在它真正能解决问题的位置上。' },
              ].map((item, i) => (
                <div
                  key={item.k}
                  className="why-row"
                  style={{
                    display: 'flex',
                    gap: 18,
                    alignItems: 'flex-start',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '20px 24px',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 30, height: 30, borderRadius: 8,
                      background: 'var(--navy)', color: '#fff',
                      display: 'grid', placeItems: 'center',
                      fontSize: 13, fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{item.k}</div>
                    <div className="muted" style={{ fontSize: 14.5, lineHeight: 1.7 }}>{item.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-2)', marginTop: 8 }}>
              这些判断，不是从 PPT 里学来的，是在 35 家奔驰经销商、200 多个雷克萨斯指标、
              1000 多次门店沟通里磨出来的。
            </p>
          </div>
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
