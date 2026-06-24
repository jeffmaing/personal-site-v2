export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const categories = [
  '全部',
  '汽车行业',
  'AI 落地',
  '数字化',
  '培训体系',
  '经销商运营',
];

export const articles: Article[] = [
  {
    slug: 'why-digital-transformation-fails',
    title: '为什么很多企业的数字化转型会失败？',
    excerpt:
      '系统上线不等于业务变简单。多数项目败在跳过了流程梳理这一步——用一套新系统固化了一套没人真正执行的流程。',
    category: '数字化',
    date: '2025-05-12',
    readTime: '6 分钟',
    tags: ['数字化', '流程'],
  },
  {
    slug: 'what-ai-really-does-in-enterprise',
    title: 'AI 在企业中真正能做什么？',
    excerpt:
      '大模型读过所有报告，但没去过现场。AI 真正的价值在标准化、可复用的执行层，而非模糊判断与复杂决策。',
    category: 'AI 落地',
    date: '2025-04-02',
    readTime: '5 分钟',
    tags: ['AI 落地'],
  },
  {
    slug: 'process-over-tools',
    title: '流程比工具更重要',
    excerpt:
      '工具解决的是效率，流程解决的是正确。顺序错了，AI 也救不了——先理流程，再上系统，最后才是 AI。',
    category: '数字化',
    date: '2025-03-18',
    readTime: '4 分钟',
    tags: ['流程', 'AI 落地'],
  },
  {
    slug: 'dealer-operation-pain-points',
    title: '经销商运营的三个隐性瓶颈',
    excerpt:
      '售后、培训、客户体验之间存在大量隐性流程，它们不写在 KPI 里，却决定了门店真实效率。',
    category: '经销商运营',
    date: '2025-02-22',
    readTime: '7 分钟',
    tags: ['经销商运营', '汽车行业'],
  },
  {
    slug: 'training-system-redesign',
    title: '培训体系升级，先从指标开始',
    excerpt:
      '培训完成率不是目标，能力提升才是。把培训与岗位胜任力挂钩，才能让培训真正进入业务。',
    category: '培训体系',
    date: '2025-01-30',
    readTime: '5 分钟',
    tags: ['培训体系', '经销商运营'],
  },
  {
    slug: 'auto-industry-ai-judgment',
    title: '汽车行业为什么特别需要 AI？',
    excerpt:
      '链条长、角色多、数据散——汽车行业天然适合 AI 落地，但前提是先把流程拆清楚。',
    category: '汽车行业',
    date: '2025-01-10',
    readTime: '6 分钟',
    tags: ['汽车行业', 'AI 落地'],
  },
];
