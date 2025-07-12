import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import { DM_Sans } from 'next/font/google';
import '../styles/globals.css';

const dMSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={dMSans.variable} >
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
