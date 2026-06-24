import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import CaseCover from '../components/CaseCover';
import HeroFlowDiagram from '../components/HeroFlowDiagram';
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

const BRANDS = ['奔驰', '雷克萨斯', '英菲尼迪', 'EY', '易车'];

export default function Home() {
  return (
    <>
      {/* ===== Section 1: Hero ===== */}
      <section
        className="section hero-section"
        style={{
          paddingTop: 'clamp(48px, 7vw, 96px)',
          paddingBottom: 'clamp(56px, 8vw, 104px)',
          background: 'linear-gradient(180deg, #F7F8FA 0%, #F3F5F7 100%)',
        }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Left — 文字主体 */}
            <div className="hero-left fade-in">
              <span className="eyebrow">运营数字化 × AI 落地 · 汽车行业 19 年</span>
              <h1 className="h-display" style={{ margin: '22px 0 24px' }}>
                我在做企业运营体系的
                <br />
                <span style={{ color: 'var(--navy)' }}>数字化与 AI 落地</span>
              </h1>

              <p className="brand-line" style={{ marginBottom: 18, maxWidth: '40ch' }}>
                先把业务流程理清，
                <br />
                再谈 AI。
              </p>

              <p className="lead" style={{ fontSize: 16, maxWidth: '48ch', marginBottom: 34 }}>
                19 年汽车行业经验，从经销商运营、培训体系、客户体验、数字化项目，到今天的 AI 落地实践。
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                <Button to="/about" variant="primary" size="lg">
                  了解我的方法
                </Button>
                <Button to="/cases" variant="ghost" size="lg">
                  查看案例
                </Button>
              </div>
            </div>

            {/* Right — 系统示意图 + 右下角小人物 */}
            <div className="hero-right fade-in fade-in--d1">
              <div className="hero-visual">
                <div className="hero-diagram-head">
                  <span className="hd-tag">运营数字化系统</span>
                  <span className="hd-sub">Process → AI → Action</span>
                </div>
                <HeroFlowDiagram />

                {/* 创始人小头像 — 身份背书 */}
                <div className="hero-founder">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt="麻明"
                    style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', border: '1px solid var(--line)' }}
                    loading="lazy"
                  />
                  <div className="hero-founder__text">
                    <strong>麻明</strong>
                    <span>创始人 · 19 年汽车行业</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="hero-trust">
            {TRUST.map((t) => (
              <div key={t.label} className="hero-trust__item">
                <div className="metric-num">
                  {t.value}
                  <span style={{ fontSize: 18, marginLeft: 2 }}>{t.suffix}</span>
                </div>
                <div className="metric-label">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1.08fr 0.92fr;
            gap: clamp(40px, 6vw, 88px);
            align-items: center;
          }
          .hero-visual {
            position: relative;
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            border: 1px solid var(--line);
            border-radius: 20px;
            padding: 28px 28px 24px;
            box-shadow: var(--shadow-md);
          }
          .hero-diagram-head {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 22px;
          }
          .hd-tag {
            font-size: 12px; font-weight: 600; letter-spacing: 0.12em;
            color: var(--navy); text-transform: uppercase;
          }
          .hd-sub {
            font-size: 11px; color: var(--muted); letter-spacing: 0.06em;
            font-family: 'Inter', sans-serif;
          }
          .hero-founder {
            display: flex; align-items: center; gap: 12px;
            margin-top: 22px; padding-top: 18px;
            border-top: 1px solid var(--line);
          }
          .hero-founder__text { display: flex; flex-direction: column; line-height: 1.35; }
          .hero-founder__text strong { font-size: 14px; color: var(--ink); font-weight: 600; }
          .hero-founder__text span { font-size: 12px; color: var(--muted); }
          .hero-trust {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
            margin-top: clamp(48px, 6vw, 72px);
          }
          .hero-trust__item {
            background: #fff;
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 22px 24px;
            box-shadow: var(--shadow-sm);
            transition: border-color .2s ease;
          }
          .hero-trust__item:hover { border-color: var(--accent); }
          @media (max-width: 880px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .hero-trust { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ===== Brand Wall ===== */}
      <section className="section section--tier2" style={{ padding: 'clamp(40px, 5vw, 64px) 0' }}>
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              marginBottom: 32,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            服务过的品牌
          </div>
          <div className="brand-wall" style={{ justifyContent: 'center' }}>
            {BRANDS.map((b) => (
              <span key={b} className={`brand-item${/^[A-Za-z]/.test(b) ? ' brand-item--en' : ''}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 2: 我解决的问题 ===== */}
      <section className="section">
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
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)',
                    display: 'grid', placeItems: 'center', fontWeight: 700, marginBottom: 18, fontSize: 14,
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
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="METHOD"
            title="我的方法"
            lead="不是工具介绍，而是一套咨询方法论：先理流程，再建系统，最后才是 AI。"
          />
          <div className="method-grid">
            {METHOD.map((m) => (
              <div key={m.no} className="method-cell">
                <div className="method-no">{m.no}</div>
                <h3 className="h3" style={{ marginBottom: 10 }}>{m.title}</h3>
                <p className="muted" style={{ lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            .method-grid {
              display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;
              border-top: 1px solid var(--line);
            }
            .method-cell {
              padding: 36px 28px;
              border-right: 1px solid var(--line);
              border-bottom: 1px solid var(--line);
            }
            .method-no {
              font-size: 13px; font-weight: 600; letter-spacing: 0.18em;
              color: var(--accent); margin-bottom: 18px;
            }
            @media (max-width: 880px) {
              .method-grid { grid-template-columns: 1fr !important; }
              .method-cell { border-right: none !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ===== Section 4: 代表案例 ===== */}
      <section className="section section--tier2">
        <div className="container">
          <SectionHeader
            eyebrow="CASES"
            title="代表案例"
            lead="每一个案例不是经历罗列，而是说清楚：问题是什么、怎么做的、结果如何。"
          />
          <div className="grid grid-3">
            {cases.map((c, i) => (
              <Card key={c.slug} flat className={`card--cover fade-in fade-in--d${i + 1}`}>
                <CaseCover variant={c.cover} label={c.coverLabel} />
                <div className="card-body">
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                    {c.tags.slice(0, 2).map((t) => (
                      <span key={t} className="tag tag--blue">{t}</span>
                    ))}
                  </div>
                  <h3 className="h3" style={{ marginBottom: 8, fontSize: 19 }}>{c.name}</h3>
                  <p className="muted" style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                    {c.summary}
                  </p>
                  <div className="card-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)' }}>{m.value}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/cases/${c.slug}`}
                    className="link"
                    style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 14, marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    查看详情 <span className="arrow">→</span>
                  </Link>
                </div>
                <style>{`
                  .card-metrics {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 8;
                    border-top: 1px solid var(--line); padding-top: 16px;
                  }
                `}</style>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Button to="/cases" variant="link">查看全部案例</Button>
          </div>
        </div>
      </section>

      {/* ===== Section 5: 思考与洞察 ===== */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="THINKING"
            title="思考与洞察"
            lead="关于汽车行业、数字化、AI 落地与运营系统的一些判断。"
          />
          <div className="grid grid-3">
            {articles.slice(0, 3).map((a, i) => (
              <Card key={a.slug} flat className={`fade-in fade-in--d${i + 1}`}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                  <span className="tag">{a.category}</span>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                  {a.title}
                </h3>
                <p className="muted" style={{ lineHeight: 1.7, marginBottom: 22, fontSize: 14 }}>
                  {a.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{a.date} · {a.readTime}</span>
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
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2 className="h2" style={{ color: '#fff', marginBottom: 18, maxWidth: '22ch', margin: '0 auto 18px' }}>
              如果你正在做数字化项目、AI 项目、培训体系升级或经销商运营优化，欢迎聊聊。
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 28, maxWidth: '52ch', margin: '0 auto 28px' }}>
              一次 30 分钟的对话，足够判断我能为你的业务带来什么。
            </p>
            <Button to="/contact" variant="accent" size="lg">联系我</Button>
          </div>
          <style>{`
            .cta-block {
              background: linear-gradient(135deg, var(--navy) 0%, var(--navy-deep) 100%);
              border-radius: var(--radius-lg);
              padding: clamp(40px, 6vw, 72px);
              color: #fff; text-align: center;
              box-shadow: var(--shadow-lg);
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
