import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import AppLayout from "../layouts/AppLayout";
import Auth from "../components/Auth";

import { Session } from "@supabase/gotrue-js/src/lib/types";

export default function SignIn() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  console.log(session)
  return (
    <AppLayout>
      <div>{!session ? <Auth /> : "Logged in"}</div>
    </AppLayout>
  );
}
