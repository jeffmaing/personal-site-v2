import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { cases } from '../data/cases';
import { articles } from '../data/articles';

const PROBLEMS = [
  {
    title: '业务流程复杂，无法标准化',
    desc: '经销商运营、培训、售后、客户体验之间存在大量隐性流程，没人能说清谁在什么节点做什么。',
  },
  {
    title: '有系统，但执行效率很低',
    desc: '系统上线不等于业务真正变简单。流程没理顺，系统只是把低效固化下来。',
  },
  {
    title: '数据很多，但无法指导决策',
    desc: '指标、报表、BI 如果不能进入管理动作，就只是展示，不是决策。',
  },
];

const METHOD = [
  { no: '01', title: '梳理业务流程', desc: '先把模糊的“效率低”拆成具体的环节、数据与瓶颈，找到 AI 真正能发挥作用的切入点。' },
  { no: '02', title: '建立可执行系统', desc: '在 AI 接管之前，先把 SOP、数据结构、指标体系理顺。系统不对，AI 也救不了。' },
  { no: '03', title: '用 AI 提升执行效率', desc: '把该交给 AI 的交出去：自动化执行、实时决策支持、Agent 自主完成任务。' },
];

const TRUST = [
  { value: '19', suffix: '年', label: '汽车行业经验' },
  { value: '1000', suffix: '+', label: '门店经验' },
  { value: '5', suffix: '家', label: '豪华品牌合作' },
  { value: '7', suffix: '年', label: '安永咨询经验' },
];

export default function Home() {
  return (
    <>
      {/* ===== Section 1: Hero ===== */}
      <section className="section" style={{ paddingTop: 'clamp(48px, 7vw, 88px)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 'clamp(32px, 5vw, 72px)',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            <div className="fade-in">
              <span className="eyebrow">运营数字化 × AI 落地 · 汽车行业 19 年</span>
              <h1 className="h1" style={{ margin: '18px 0 22px' }}>
                我在做企业运营体系的
                <br />
                <span style={{ color: 'var(--navy)' }}>数字化与 AI 落地</span>
              </h1>
              <p className="lead" style={{ fontSize: 17, maxWidth: '52ch' }}>
                19 年汽车行业经验，从经销商运营、培训体系、客户体验、数字化项目，到今天的 AI 落地实践。
                主要在汽车行业，把复杂流程变得更清楚、更可执行。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
                <Button to="/about" variant="primary" size="lg">
                  了解我的方法
                </Button>
                <Button to="/cases" variant="ghost" size="lg">
                  查看案例
                </Button>
              </div>
            </div>

            <div className="fade-in fade-in--d1">
              <div
                style={{
                  position: 'relative',
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
                  loading="eager"
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 12,
                  marginTop: 18,
                }}
              >
                {TRUST.map((t) => (
                  <div
                    key={t.label}
                    style={{
                      background: '#fff',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius)',
                      padding: '16px 18px',
                    }}
                  >
                    <div className="metric-num">
                      {t.value}
                      <span style={{ fontSize: 18, marginLeft: 2 }}>{t.suffix}</span>
                    </div>
                    <div className="metric-label">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 880px) {
              .hero-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ===== Section 2: 我解决的问题 ===== */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="PROBLEMS"
            title="我解决的问题"
            lead="不是“做什么”，而是先回答“卡在哪里”。下面三类问题，是我在项目中最常遇到的。"
          />
          <div className="grid grid-3">
            {PROBLEMS.map((p, i) => (
              <Card key={p.title} className={`fade-in fade-in--d${i + 1}`}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(37, 99, 235, 0.08)',
                    color: 'var(--accent)',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 700,
                    marginBottom: 18,
                    fontSize: 14,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="h3" style={{ marginBottom: 10 }}>{p.title}</h3>
                <p className="muted" style={{ lineHeight: 1.7 }}>{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 3: 我的方法 ===== */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="METHOD"
            title="我的方法"
            lead="不是工具介绍，而是一套咨询方法论：先理流程，再建系统，最后才是 AI。"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--line)',
            }}
            className="method-grid"
          >
            {METHOD.map((m) => (
              <div
                key={m.no}
                style={{
                  padding: '36px 28px',
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                }}
                className="method-cell"
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: 'var(--accent)',
                    marginBottom: 18,
                  }}
                >
                  {m.no}
                </div>
                <h3 className="h3" style={{ marginBottom: 10 }}>{m.title}</h3>
                <p className="muted" style={{ lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .method-grid { grid-template-columns: 1fr !important; }
              .method-cell { border-right: none !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ===== Section 4: 代表案例 ===== */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="CASES"
            title="代表案例"
            lead="每一个案例不是经历罗列，而是说清楚：问题是什么、怎么做的、结果如何。"
          />
          <div className="grid grid-3">
            {cases.map((c, i) => (
              <Card key={c.slug} className={`fade-in fade-in--d${i + 1}`} flat>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                  {c.tags.slice(0, 2).map((t) => (
                    <span key={t} className="tag tag--blue">{t}</span>
                  ))}
                </div>
                <h3 className="h3" style={{ marginBottom: 10, minHeight: '2.4em' }}>{c.name}</h3>
                <p className="muted" style={{ minHeight: '4.2em', lineHeight: 1.7, marginBottom: 22 }}>
                  {c.summary}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8,
                    borderTop: '1px solid var(--line)',
                    paddingTop: 18,
                    marginBottom: 22,
                  }}
                >
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link to={`/cases/${c.slug}`} className="btn--link link" style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 14 }}>
                  查看详情 <span className="arrow">→</span>
                </Link>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Button to="/cases" variant="link">查看全部案例</Button>
          </div>
        </div>
      </section>

      {/* ===== Section 5: 思考与洞察 ===== */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="THINKING"
            title="思考与洞察"
            lead="关于汽车行业、数字化、AI 落地与运营系统的一些判断。"
          />
          <div className="grid grid-3">
            {articles.slice(0, 3).map((a, i) => (
              <Card key={a.slug} className={`fade-in fade-in--d${i + 1}`} flat>
                <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                  <span className="tag">{a.category}</span>
                </div>
                <h3 className="h3" style={{ marginBottom: 10, minHeight: '2.4em', fontSize: 20 }}>
                  {a.title}
                </h3>
                <p className="muted" style={{ minHeight: '4.2em', lineHeight: 1.7, marginBottom: 22 }}>
                  {a.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--line)',
                    paddingTop: 16,
                  }}
                >
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                    {a.date} · {a.readTime}
                  </span>
                  <Link to="/thinking" className="link" style={{ color: 'var(--accent)', fontSize: 14 }}>
                    阅读 <span className="arrow">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Button to="/thinking" variant="link">查看更多观点</Button>
          </div>
        </div>
      </section>

      {/* ===== Section 6: CTA ===== */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              background: 'var(--navy)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(36px, 5vw, 64px)',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <h2 className="h2" style={{ color: '#fff', marginBottom: 18, maxWidth: '20ch', margin: '0 auto 18px' }}>
              如果你正在做数字化项目、AI 项目、培训体系升级或经销商运营优化，欢迎聊聊。
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 28, maxWidth: '56ch', margin: '0 auto 28px' }}>
              一次 30 分钟的对话，足够判断我能为你的业务带来什么。
            </p>
            <Button to="/contact" variant="accent" size="lg">
              联系我
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
