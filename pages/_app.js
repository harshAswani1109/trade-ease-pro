// pages/_app.js
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideNavbarOnIndex = router.pathname === "/";

  return (
    <>
      {!hideNavbarOnIndex && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
