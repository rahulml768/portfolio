import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70svh] place-content-center gap-6 px-4 text-center">
      <p className="font-mono text-sm tracking-widest text-signal uppercase">Error 404</p>
      <h1 className="font-display text-6xl font-extrabold uppercase md:text-8xl">Not in service</h1>
      <Link href="/" className="font-mono text-sm underline underline-offset-4 hover:text-signal">
        Back to the board
      </Link>
    </main>
  );
}
