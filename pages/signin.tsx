import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
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
  console.log(supabase.auth.user());

  return (
    <div style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Auth /> : "Logged in"}
    </div>
  );
}
