import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import { DM_Sans } from 'next/font/google';
import '../styles/globals.css';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useNavigationStore } from "../stores/useNavigationStore";

const dMSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const setRoute = useNavigationStore((s) => s.setRoute);

  useEffect(() => {
    // Initial load
    setRoute(router.pathname);

    const handleRouteChange = (url: string) => {
      setRoute(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={dMSans.variable}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
