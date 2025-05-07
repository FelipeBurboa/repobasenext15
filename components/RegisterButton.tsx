"use client";

import { register } from "@/actions/users/actions";
import { Button } from "@/components/ui/button";

export default function RegisterButton() {
  return (
    <Button
      onClick={() => register("test@gmail.com", "test@gmail.com", "test")}
      variant="outline"
    >
      Register
    </Button>
  );
}
