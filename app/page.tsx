import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WorkExperience } from "@/components/work-experience";
import { Services } from "@/components/services";
import { WorkingProcess } from "@/components/working-process";
import { Skills } from "@/components/skills";
import { BentoGrid } from "@/components/bento-grid";
// import { BlogSection } from "@/components/blog-section";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import AiChatInput from "@/components/ai-chat-prompt";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <div className=" hidden lg:block">
        <AiChatInput />
      </div>
      <About />
      <WorkExperience />
      <Services />
      <WorkingProcess />
      <Skills />
      <BentoGrid />
      {/* <BlogSection /> */}
      <CTA />
      <Footer />
    </main>
  );
}
