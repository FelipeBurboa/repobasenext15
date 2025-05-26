"use client";

import { register } from "@/actions/users/actions";
import { Button } from "@/components/ui/button";

export default function RegisterButton() {
  return (
    <Button
      onClick={() => register("test1@gmail.com", "test1@gmail.com", "test1")}
      variant="outline"
    >
      Register
    </Button>
  );
}
