import { AskRahul } from "@/components/AskRahul";
import { Blockchain } from "@/components/Blockchain";
import { ErpModules } from "@/components/ErpModules";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <AskRahul />
      <Work />
      <ErpModules />
      <Principles />
      <Blockchain />
      <Experience />
    </main>
  );
}
