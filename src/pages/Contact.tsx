import { useState, type FormEvent } from 'react';
import SectionHeader from '../components/SectionHeader';

const CONTACT = [
  { label: '电话', value: '185-1359-5306', href: 'tel:+8618513595306' },
  { label: '邮箱', value: 'jeffmaming@163.com', href: 'mailto:jeffmaming@163.com' },
  { label: '城市', value: '北京 · 朝阳区' },
  { label: '微信 / LinkedIn', value: '沟通时提供' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="CONTACT"
          title="让我们聊聊"
          lead="一次 30 分钟的对话，足够判断我能为你的业务带来什么。"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div>
            <div
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                padding: 28,
              }}
            >
              {CONTACT.map((c, i) => (
                <div
                  key={c.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    borderBottom: i === CONTACT.length - 1 ? 'none' : '1px solid var(--line)',
                  }}
                >
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 20,
                fontSize: 13,
                color: 'var(--muted)',
                lineHeight: 1.75,
              }}
            >
              我主要关注：AI 项目、数字化项目、培训体系升级、经销商运营优化。
            </p>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--accent)',
                    display: 'grid',
                    placeItems: 'center',
                    margin: '0 auto 16px',
                    fontSize: 22,
                  }}
                >
                  ✓
                </div>
                <h3 className="h3">已收到，感谢联系</h3>
                <p className="muted" style={{ marginTop: 8 }}>
                  我会在 1–2 个工作日内回复你。
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Field label="姓名" name="name" placeholder="你的称呼" required />
                <Field label="公司" name="company" placeholder="所在公司或组织" />
                <Field label="邮箱 / 电话" name="contact" placeholder="方便联系到你的方式" required />
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      color: 'var(--ink-2)',
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    你想聊什么
                  </label>
                  <textarea
                    name="message"
                    placeholder="简单描述你的需求或问题"
                    rows={4}
                    required
                    style={{
                      width: '100%',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius)',
                      padding: '12px 14px',
                      fontSize: 14,
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  style={{ alignSelf: 'flex-start', marginTop: 4 }}
                >
                  发送消息
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontSize: 13,
          color: 'var(--ink-2)',
          marginBottom: 8,
          fontWeight: 500,
        }}
      >
        {label}{required && <span style={{ color: 'var(--accent)', marginLeft: 4 }}>*</span>}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          padding: '12px 14px',
          fontSize: 14,
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
      />
    </div>
  );
}
