/**
 * Hero 右侧 — 数字化运营系统示意图
 * 垂直流程：流程 → 系统 → 数据 → AI → 执行
 * 风格：Apple/Linear 克制，深蓝节点 + 细线
 */
const NODES = [
  { label: '流程', en: 'Process', desc: '业务拆解' },
  { label: '系统', en: 'System', desc: 'SOP · 指标' },
  { label: '数据', en: 'Data', desc: '实时打通' },
  { label: 'AI', en: 'AI', desc: '自动执行', accent: true },
  { label: '执行', en: 'Action', desc: '进入管理动作' },
];

export default function HeroFlowDiagram() {
  return (
    <div className="hero-diagram" style={{ position: 'relative', width: '100%' }}>
      <style>{`
        .hd-wrap {
          position: relative;
          padding: 8px 0;
        }
        .hd-node {
          display: flex; align-items: center; gap: 16px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 1px 2px rgba(16,32,51,0.04);
          position: relative;
          z-index: 2;
          transition: border-color .2s ease;
        }
        .hd-node:hover { border-color: var(--accent); }
        .hd-node--accent {
          border-color: rgba(37,99,235,0.4);
          background: rgba(37,99,235,0.04);
        }
        .hd-idx {
          width: 32px; height: 32px; flex-shrink: 0;
          border-radius: 8px;
          background: var(--navy); color: #fff;
          display: grid; place-items: center;
          font-size: 12px; font-weight: 700;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.04em;
        }
        .hd-node--accent .hd-idx { background: var(--accent); }
        .hd-text { display: flex; flex-direction: column; gap: 1px; }
        .hd-label {
          font-size: 15px; font-weight: 600; color: var(--ink);
          letter-spacing: -0.01em;
        }
        .hd-desc {
          font-size: 12px; color: var(--muted);
          letter-spacing: 0.02em;
        }
        .hd-connector {
          margin-left: 31px;
          width: 2px; height: 18px;
          background: linear-gradient(180deg, var(--line), var(--line-strong));
        }
      `}</style>
      <div className="hd-wrap">
        {NODES.map((n, i) => (
          <div key={n.label}>
            <div className={`hd-node${n.accent ? ' hd-node--accent' : ''}`}>
              <span className="hd-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="hd-text">
                <span className="hd-label">{n.label} · {n.en}</span>
                <span className="hd-desc">{n.desc}</span>
              </span>
            </div>
            {i < NODES.length - 1 && <div className="hd-connector" />}
          </div>
        ))}
      </div>
    </div>
  );
}
