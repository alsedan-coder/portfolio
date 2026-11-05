import '../tema.css';
import '../globals.css';
import { Html, siteMetadata } from '@/components/Shell';

export const metadata = siteMetadata('en');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Html lang="en">{children}</Html>;
}
