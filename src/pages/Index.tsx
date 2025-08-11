import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-avatar-hero.jpg";
import { useRef } from "react";
import { Bot, ShieldCheck, CalendarCheck2 } from "lucide-react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const title = "Hire Your AI Avatar — Futuristic Virtual Professional";
  const description = "Book your personal AI avatar to attend meetings, execute tasks, and deliver results in your voice and style.";

  return (
    <div ref={containerRef} onMouseMove={onMouseMove} className="min-h-screen relative overflow-hidden bg-background">
      <SEO
        title={title}
        description={description}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Hire Your AI Avatar",
          description,
          provider: { "@type": "Person", name: "Your AI Persona" }
        }}
      />

      {/* Pointer-reactive glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(600px circle at var(--x,50%) var(--y,30%), hsl(var(--accent) / 0.25), transparent 60%)",
        }}
      />

      <header className="container py-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">AI Avatar</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Hire</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-enter">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Your Skills. Your Voice. <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Always On</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Create a hireable AI avatar that looks, talks, and executes like you. It attends meetings, takes notes, and gets the work done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" id="cta">
                <Button variant="hero" size="xl" className="hover-scale">Get a Demo</Button>
                <Button variant="outline" size="xl">Learn More</Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" />Secure by design</div>
                <div className="flex items-center gap-2"><CalendarCheck2 className="size-4 text-accent" />Calendar-ready</div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Futuristic holographic AI avatar with neon cyan and violet glow"
                className="w-full rounded-xl border border-border shadow-[var(--shadow-elegant)]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_80px_hsl(var(--primary)/0.15)]" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><Bot className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Meeting-ready Persona</h3>
              <p className="text-muted-foreground">Auto-briefed, context-aware, and aligned to your tone. Presents, answers, and follows through.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><ShieldCheck className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Trust & Controls</h3>
              <p className="text-muted-foreground">Granular permissions, redaction, and audit trails so your data stays protected.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><CalendarCheck2 className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Execution Engine</h3>
              <p className="text-muted-foreground">Assign tasks and deadlines—your avatar ships updates, summaries, and deliverables.</p>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="container py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-border bg-card/50">
              <h4 className="text-sm text-muted-foreground mb-1">Step 1</h4>
              <h3 className="text-lg font-semibold mb-2">Clone Your Persona</h3>
              <p className="text-muted-foreground">Upload your voice sample, profile, and skills to shape your avatar.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50">
              <h4 className="text-sm text-muted-foreground mb-1">Step 2</h4>
              <h3 className="text-lg font-semibold mb-2">Connect Your Tools</h3>
              <p className="text-muted-foreground">Calendar, docs, and task apps for hands-free coordination and delivery.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50">
              <h4 className="text-sm text-muted-foreground mb-1">Step 3</h4>
              <h3 className="text-lg font-semibold mb-2">Hire & Perform</h3>
              <p className="text-muted-foreground">Companies schedule your avatar to attend, execute, and report back.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="container py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} AI Avatar · Built for the future of work</p>
      </footer>
    </div>
  );
};

export default Index;
