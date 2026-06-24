import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

const BASE_URL = 'https://jeffmaing.github.io/personal-site-v2/';
const DEFAULT_IMG = `${BASE_URL}profile.png`;

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMG,
  type = 'website',
}: Props) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title.includes('麻明') ? title : `${title} · 麻明`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
