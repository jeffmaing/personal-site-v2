import { useState, type FormEvent } from 'react';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const CONTACT = [
  { label: '电话', value: '185-1359-5306', href: 'tel:+8618513595306' },
  { label: '邮箱', value: 'jeffmaming@163.com', href: 'mailto:jeffmaming@163.com' },
  { label: '城市', value: '北京 · 朝阳区' },
  { label: '微信 / LinkedIn', value: '沟通时提供' },
];

const EMAIL = 'jeffmaming@163.com';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', contact: '', message: '' });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 构造邮件内容，通过 mailto 唤起邮件客户端（无后端依赖）
    const subject = encodeURIComponent(`网站咨询 · ${form.name || '潜在客户'}${form.company ? ' · ' + form.company : ''}`);
    const body = encodeURIComponent(
      `姓名：${form.name}\n公司：${form.company}\n联系方式：${form.contact}\n\n想聊的内容：\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <SEO
        title="联系 · 麻明"
        description="AI 项目、数字化项目、培训体系升级、经销商运营优化——一次 30 分钟对话，判断我能为你带来什么。"
        path="contact"
      />
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
                <Field label="姓名" name="name" placeholder="你的称呼" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="公司" name="company" placeholder="所在公司或组织" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <Field label="邮箱 / 电话" name="contact" placeholder="方便联系到你的方式" required value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} />
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
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
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
                <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: -6 }}>
                  提交后会唤起邮件客户端预填内容，发送至 {EMAIL}。
                </p>
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
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
