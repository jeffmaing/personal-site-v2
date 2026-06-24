export type CaseMetric = { label: string; value: string };

export type CaseItem = {
  slug: string;
  name: string;
  summary: string;        // one-line description
  background: string;     // project background
  problem: string;        // customer problem
  approach: string;       // solution approach
  process: string[];      // landing process steps
  result: string;         // overall result narrative
  takeaway: string;       // my judgment / lesson learned
  tags: string[];
  metrics: CaseMetric[];  // 3 key result data
  category: string;
  year: string;
};

export const cases: CaseItem[] = [
  {
    slug: 'ai-course-recommend',
    name: 'AI 智能课程推荐系统',
    summary: '为雷克萨斯培训平台搭建基于学员画像与学习行为的智能课程推荐引擎。',
    background:
      '雷克萨斯全国经销商培训平台每年承载上万名学员的学习行为，原有推荐逻辑基于运营手工配置，覆盖率低，完成率长期不达标，学员看不到对自己真正有用的课程。',
    problem:
      '培训完成率长期不达标；学员无法快速找到与自己岗位、能力短板匹配的课程；运营团队手工维护推荐规则，成本高且无法个性化。',
    approach:
      '以学员岗位、历史学习、测评结果构建能力画像，结合课程知识图谱，用推荐算法 + 大模型做语义匹配，让课程主动找人，而非人找课程。',
    process: [
      '梳理岗位胜任力模型与课程标签体系，打通平台数据源',
      '设计能力画像与推荐召回—排序逻辑，输出 MVP 原型并小范围灰度',
      '全量上线，嵌入学习首页与培训提醒触达，持续迭代推荐策略',
    ],
    result:
      '课程推荐点击率显著提升，培训完成率提升约 45%，运营无需再手工配置推荐规则。',
    takeaway:
      '推荐系统的关键不是算法有多复杂，而是课程标签与岗位能力模型的颗粒度。业务结构化先行，AI 才能真正发挥价值。',
    tags: ['AI 落地', '培训体系', '雷克萨斯'],
    metrics: [
      { label: '培训完成率', value: '+45%' },
      { label: '推荐规则维护', value: '0 人工' },
      { label: '上线周期', value: '8 周' },
    ],
    category: 'AI 落地',
    year: '2025',
  },
  {
    slug: 'operation-diagnosis',
    name: '智能运营诊断系统',
    summary: '为奔驰 35 家经销商搭建基于 KPI 数据的 AI 自动诊断与改进建议系统。',
    background:
      '奔驰经销商运营诊断原由教练进店、看数据、手动算指标、写报告完成。一家店平均 2 天，35 家就是 70 天，效率低且结论难统一。',
    problem:
      '35 家经销商的诊断靠教练人工完成，一家店 2 天、35 家 70 天；指标靠手算、结论依赖个人经验，难以横向对标。',
    approach:
      '将 35 家店的 KPI 数据集中入库，对接行业基准与历史诊断案例，用大模型自动对比、评分并生成改进建议，让 AI 基于真实数据说话。',
    process: [
      '统一 35 家店 KPI 指标口径与数据采集流程，搭建数据底座',
      '沉淀诊断规则与优秀教练经验，构建 AI 评分与建议生成逻辑',
      '交付一键式诊断报告，教练从写报告转为审核与现场辅导',
    ],
    result:
      '单店诊断从 2 天压缩到 10 分钟，100+ 份报告零差错，教练精力转向高价值辅导。',
    takeaway:
      'AI 不会取代经验，但能把经验从重复劳动中解放出来。先把诊断逻辑沉淀成规则，AI 才能稳定输出。',
    tags: ['AI 落地', '经销商运营', '奔驰'],
    metrics: [
      { label: '诊断效率', value: '2 天 → 10 分钟' },
      { label: '覆盖店数', value: '35 家' },
      { label: '报告准确率', value: '100%' },
    ],
    category: 'AI 落地',
    year: '2024',
  },
  {
    slug: 'lexus-dashboard',
    name: '经销商数字化运营看板',
    summary: '为雷克萨斯整合 4 个数据源、200+ 指标的实时运营看板，替代每日人工汇总。',
    background:
      '雷克萨斯总部对全国经销商培训与运营执行缺乏全景视角，200+ 指标散落在 4 个数据源的 Excel 里，运营每天人工汇总 2 小时。',
    problem:
      '总部对经销商运营没有统一视图；200+ 指标分散在 4 个 Excel 数据源；运营每天花 2 小时手工汇总，决策滞后。',
    approach:
      '搭建自动化数据管道，4 个数据源实时同步，200+ 指标整合到一个看板，按岗位角色配置视图，打开即看。',
    process: [
      '梳理业务指标体系与口径，完成 4 个数据源接入与清洗',
      '搭建实时数据管道与 BI 看板原型，按总部/区域/门店分层',
      '上线运营并嵌入周例会节奏，持续根据使用反馈优化指标',
    ],
    result:
      '人工汇总时间从每天 2 小时降到 0，决策即时化，数据真正进入管理动作。',
    takeaway:
      'BI 不只是展示，关键是让指标进入管理动作。看板之上，是周例会的节奏与责任划分。',
    tags: ['数字化', '经销商运营', '雷克萨斯'],
    metrics: [
      { label: '数据源', value: '4 个' },
      { label: '实时指标', value: '200+' },
      { label: '人工汇总', value: '0' },
    ],
    category: '数字化',
    year: '2024',
  },
];

export const getCaseBySlug = (slug: string) =>
  cases.find((c) => c.slug === slug);
