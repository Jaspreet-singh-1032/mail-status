import { useEffect } from "react";
import type { NextPage } from "next";
import AppLayout from "../layouts/AppLayout";
import { supabase } from "../utils/supabaseClient";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user, login } = useAuth();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session);
    });
    checkUser();
  }, []);
  async function handleAuthChange(event: any, session: any) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }
  function checkUser(): void {
    const user = supabase.auth.user();
    if (user) {
      login(user);
    }
  }
  return <AppLayout></AppLayout>;
};

export default Home;
