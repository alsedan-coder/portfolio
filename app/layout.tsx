import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alan Gustavo · Product Designer, UX/UI e Design de Serviço',
  description:
    '17 anos do lado de quem usa a tecnologia. Portfólio de Alan Gustavo Souza Santos: product design, UX/UI e design de serviço.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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
