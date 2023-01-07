import { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function FormeApp({ Component, pageProps }: AppProps) {
  return (
    <div id="Forme-App">
      <NavBar />
      <Component {...pageProps} />
      <footer>&copy; forme next.js</footer>
      <style jsx global>{`
        a {
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default FormeApp;
