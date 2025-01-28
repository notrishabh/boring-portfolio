"use client";

import { Copy } from "lucide-react";
import { Button } from "./ui/button";

const CopyEmailButton = () => {
  const email = "rishabh107107@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="p-2 text-xs font-semibold text-white rounded-md border border-mainborder"
      onClick={handleCopy}
    >
      <Copy />
      Copy Email
    </Button>
  );
};

export default CopyEmailButton;
