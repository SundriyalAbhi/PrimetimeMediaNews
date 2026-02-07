"use client";
import React, { FC, useState } from "react";
import ForgotPass from "./forgotPassword";
import dynamic from "next/dynamic";

type Mode = "signin" | "signup" | "forgot";

interface AuthChildProps {
  setMode: (mode: Mode) => void;
}

const NoSSRSignIn = dynamic<AuthChildProps>(() => import("@/app/Components/Auth/login").then((mod) => mod.SignIn), { ssr: false });
const NoSSRSignUp = dynamic<AuthChildProps>(() => import("@/app/Components/Auth/signup").then((mod) => mod.SignUp), { ssr: false });

export const MainAuth: FC = () => {
  const [mode, setMode] = useState<Mode>("signin");

  return (
    <div className="" style={{ height: "100vh", backgroundColor: "#f7f7f7" }}>
      {mode === "signin" ? <NoSSRSignIn setMode={setMode} /> : mode === "signup" ? <NoSSRSignUp setMode={setMode} /> : <ForgotPass setMode={setMode} />}
    </div>
  );
};