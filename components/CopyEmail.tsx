"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // The address stays visible next to the button, so it can still be selected by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="no-print rounded-[3px] bg-ink px-3 py-2 font-mono text-xs text-paper transition-opacity hover:opacity-85"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
