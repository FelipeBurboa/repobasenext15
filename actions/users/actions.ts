"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import createLogger from "@/lib/logger";

const logger = createLogger("auth-actions");

export async function login(email: string, password: string) {
  logger.info("Login attempt", { email, hasPassword: !!password });

  try {
    await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });

    logger.info("Login successful", { email });
    redirect("/");
  } catch (error) {
    logger.error("Login failed", {
      email,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export async function register(email: string, password: string, name: string) {
  logger.info("Registration attempt", { email, name, hasPassword: !!password });

  try {
    await auth.api.signUpEmail({
      body: { email, password, name },
    });

    logger.info("Registration successful", { email, name });
  } catch (error) {
    logger.error("Registration failed", {
      email,
      name,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}
