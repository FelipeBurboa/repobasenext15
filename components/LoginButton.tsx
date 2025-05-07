"use client";

import { login } from "@/actions/users/actions";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  return (
    <Button
      onClick={() => login("test@gmail.com", "test@gmail.com")}
      variant="outline"
    >
      Login
    </Button>
  );
}
