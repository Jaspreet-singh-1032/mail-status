import { useEffect } from "react";
import type { AppProps } from "next/app";

import { supabase } from "../utils/supabaseClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session);
    });
  }, []);
  async function handleAuthChange(event: any, session: any) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }
  return <Component {...pageProps} />;
}

export default MyApp;
