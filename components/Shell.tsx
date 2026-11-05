import type { Metadata } from 'next';
import { htmlLang, type Lang } from '@/lib/i18n';

/** Endereço público do site. O build do GitHub Pages troca por https://alsedan-coder.github.io/portfolio */
export const SITE = process.env.NEXT_PUBLIC_SITE || 'https://alangustavoportfolio.al-gustavo-br.workers.dev';

const meta: Record<Lang, { title: string; description: string; locale: string }> = {
  pt: {
    title: 'Alan Gustavo · Product Designer, UX/UI e Design de Serviço',
    description: '17 anos do lado de quem usa a tecnologia. Portfólio de Alan Gustavo Souza Santos: product design, UX/UI e design de serviço.',
    locale: 'pt_BR',
  },
  en: {
    title: 'Alan Gustavo · Product Designer, UX/UI and Service Design',
    description: '17 years on the side of the people who use technology. Portfolio of Alan Gustavo Souza Santos: product design, UX/UI and service design.',
    locale: 'en_GB',
  },
  es: {
    title: 'Alan Gustavo · Product Designer, UX/UI y Diseño de Servicios',
    description: '17 años del lado de quienes usan la tecnología. Portafolio de Alan Gustavo Souza Santos: product design, UX/UI y diseño de servicios.',
    locale: 'es_ES',
  },
};

export function siteMetadata(lang: Lang): Metadata {
  const m = meta[lang];
  return {
    metadataBase: new URL(SITE),
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: 'website', locale: m.locale, url: lang === 'pt' ? `${SITE}/` : `${SITE}/${lang}`, images: [{ url: `${SITE}/og.png`, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [`${SITE}/og.png`] },
  };
}

/** Estrutura HTML de cada idioma (cada idioma tem o seu próprio <html lang>). */
export function Html({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={htmlLang[lang]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Nunito:wght@400;500;600;700;800&family=Poppins:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
