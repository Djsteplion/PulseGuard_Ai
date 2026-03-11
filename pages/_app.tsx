// pages/_app.tsx
import type { AppProps } from 'next/app';
// This reaches out of /pages and into /app to grab the CSS
import '../app/globals.css'; 

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}