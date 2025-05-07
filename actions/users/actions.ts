"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
export async function login(email: string, password: string) {
  await auth.api.signInEmail({
    body: {
      email: email,
      password: password,
    },
  });
  redirect("/");
}

export async function register(email: string, password: string, name: string) {
  await auth.api.signUpEmail({
    body: { email, password, name },
  });
}
