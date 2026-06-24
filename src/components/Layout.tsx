import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';

const NAV = [
  { to: '/', label: '首页' },
  { to: '/cases', label: '案例' },
  { to: '/thinking', label: '洞察' },
  { to: '/about', label: '关于' },
  { to: '/contact', label: '联系' },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [loc.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(247, 248, 250, 0.88)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: 'var(--navy)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '0.02em',
            }}
          >
            麻
          </span>
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
            麻明 · 运营数字化 × AI 落地
          </span>
        </Link>

        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              style={({ isActive }) => ({
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? 'var(--navy)' : 'var(--ink-2)',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: 4,
                transition: 'color 0.15s',
              })}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--accent btn--sm">
            联系我
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
        >
          <span style={{ width: 22, height: 2, background: 'var(--ink)' }} />
          <span style={{ width: 22, height: 2, background: 'var(--ink)' }} />
          <span style={{ width: 22, height: 2, background: 'var(--ink)' }} />
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile"
          style={{
            borderTop: '1px solid var(--line)',
            background: '#fff',
            padding: '12px var(--gutter) 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              style={({ isActive }) => ({
                padding: '10px 6px',
                fontSize: 15,
                fontWeight: 500,
                color: isActive ? 'var(--navy)' : 'var(--ink-2)',
                borderBottom: '1px solid var(--line)',
              })}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--accent" style={{ marginTop: 8 }}>
            联系我
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        background: '#fff',
        padding: '40px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'var(--muted)',
          fontSize: 13,
        }}
      >
        <div>
          <div style={{ color: 'var(--ink)', fontWeight: 600, marginBottom: 4 }}>
            麻明 · 运营数字化 × AI 落地
          </div>
          <div>专注汽车行业 · 经销商运营 · 培训体系 · 数字化 · AI 落地</div>
        </div>
        <div>© {new Date().getFullYear()} 麻明 · All rights reserved</div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </>
  );
}
