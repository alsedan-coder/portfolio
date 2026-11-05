import '../tema.css';
import '../globals.css';
import { Html, siteMetadata } from '@/components/Shell';

export const metadata = siteMetadata('pt');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Html lang="pt">{children}</Html>;
}
