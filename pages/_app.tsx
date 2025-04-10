import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import SignupPopup from "./components/SignupModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative">
        <SignupPopup />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
