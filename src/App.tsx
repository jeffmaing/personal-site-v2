import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// 非首页懒加载，减小首屏 bundle
const Cases = lazy(() => import('./pages/Cases'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const Thinking = lazy(() => import('./pages/Thinking'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="page-loader-spin"
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '2px solid var(--line, #E5E7EB)',
          borderTopColor: 'var(--accent, #2563EB)',
          animation: 'pl-spin 0.7s linear infinite',
        }}
      />
      <style>{`
        @keyframes pl-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .page-loader-spin { animation: none; border-top-color: transparent; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="cases"
            element={<Suspense fallback={<PageLoader />}><Cases /></Suspense>}
          />
          <Route
            path="cases/:slug"
            element={<Suspense fallback={<PageLoader />}><CaseDetail /></Suspense>}
          />
          <Route
            path="thinking"
            element={<Suspense fallback={<PageLoader />}><Thinking /></Suspense>}
          />
          <Route
            path="about"
            element={<Suspense fallback={<PageLoader />}><About /></Suspense>}
          />
          <Route
            path="contact"
            element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
