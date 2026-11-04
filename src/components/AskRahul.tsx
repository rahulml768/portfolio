"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { gmailCompose, profile } from "@/data/portfolio";

type Action =
  | { type: "email"; subject: string; body: string }
  | { type: "project"; id: string; name: string };

type Message = { role: "user" | "assistant"; content: string; actions?: Action[] };

const MAX_MESSAGES = 12;

const suggestions = [
  "Write an email to Rahul",
  "Show me his AI work",
  "What did he build on Agent 69?",
];

function ActionCard({ action }: { action: Action }) {
  if (action.type === "project") {
    return (
      <Link
        href={`/work/${action.id}`}
        className="mt-3 inline-block rounded-[3px] border border-line px-4 py-2 font-mono text-sm transition-colors hover:border-paper"
      >
        Open {action.name} →
      </Link>
    );
  }
  return (
    <div className="mt-3 rounded-[3px] border border-line bg-ink p-4">
      <p className="font-mono text-xs tracking-wide text-muted uppercase">Draft email</p>
      <p className="mt-2 font-medium">{action.subject}</p>
      <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-muted">{action.body}</p>
      <a
        href={gmailCompose(action.subject, action.body)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-[3px] bg-signal px-4 py-2 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-85"
      >
        Open in Gmail ↗
      </a>
    </div>
  );
}

export function AskRahul() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
  }, [messages, loading]);

  async function send(text: string) {
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    let reply: Message = {
      role: "assistant",
      content: `The agent isn't available right now. You can email ${profile.email}.`,
    };
    try {
      const response = await fetch("/api/ask/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next
            .slice(-MAX_MESSAGES)
            .map(({ role, content }) => ({ role, content: content.slice(0, 1000) })),
        }),
      });
      if (response.ok) {
        const data: { answer: string; actions?: Action[] } = await response.json();
        reply = { role: "assistant", content: data.answer, actions: data.actions };
      }
    } catch {
      // The default reply above already tells the visitor how to reach Rahul.
    }
    setMessages([...next, reply]);
    setLoading(false);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (input.trim() && !loading) send(input.trim());
  }

  return (
    <section
      id="ask"
      aria-labelledby="ask-title"
      className="no-print mx-auto max-w-[1440px] px-4 pt-20 md:px-8 md:pt-32"
    >
      <div className="rounded-[3px] bg-panel p-5 md:p-8">
          <p className="font-mono text-xs tracking-wide text-signal uppercase">
            AI agent · Answers come from this site
          </p>
          <h2
            id="ask-title"
            className="mt-2 font-display text-5xl leading-none font-extrabold uppercase md:text-6xl"
          >
            Ask my agent
          </h2>
          <p className="mt-3 max-w-[60ch] text-muted">
            It can answer questions about my work, open a project and write an email to me that you
            send from your own Gmail.
          </p>

          {messages.length > 0 && (
            <div
              ref={chatRef}
              aria-live="polite"
              className="thin-scroll mt-6 h-96 space-y-4 overflow-y-auto pr-3"
            >
              {messages.map((message, i) => (
                <div key={i} className={message.role === "user" ? "text-right" : undefined}>
                  <p
                    className={`inline-block max-w-full rounded-[3px] px-3 py-2 text-left leading-relaxed ${
                      message.role === "user" ? "bg-tile" : ""
                    }`}
                  >
                    {message.content}
                  </p>
                  {message.actions?.map((action, j) => (
                    <div key={j}>
                      <ActionCard action={action} />
                    </div>
                  ))}
                </div>
              ))}
              {loading && <p className="px-3 font-mono text-sm text-muted">Thinking…</p>}
            </div>
          )}

          <form onSubmit={submit} className="mt-6 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="ask-input" className="sr-only">
              Your message
            </label>
            <input
              id="ask-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={500}
              placeholder="Ask a question or say what you need"
              className="min-w-0 flex-1 rounded-[3px] border border-line bg-ink px-4 py-3 placeholder:text-muted"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-[3px] bg-signal px-5 py-3 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-85 disabled:opacity-50"
            >
              Send
            </button>
          </form>

          {messages.length === 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  className="rounded-[3px] bg-tile px-2.5 py-1.5 text-left font-mono text-xs transition-colors hover:text-signal"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
      </div>
    </section>
  );
}
