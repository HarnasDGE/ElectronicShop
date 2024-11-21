"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button color="second" onClick={() => router.back()}>
      Continue Shopping
    </Button>
  );
};
