
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AvatarDemo } from "@/components/AvatarDemo";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { StatsSection } from "@/components/StatsSection";
import heroImage from "@/assets/ai-avatar-hero.jpg";
import { useRef } from "react";
import { Bot, ShieldCheck, CalendarCheck2, Users, Zap, Globe, ArrowRight } from "lucide-react";

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
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Reviews</a>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="hover-scale">
                  Get a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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

        {/* Stats */}
        <section className="container py-12">
          <StatsSection />
        </section>

        {/* Features */}
        <section id="features" className="container py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need for seamless virtual collaboration</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><Users className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Team Integration</h3>
              <p className="text-muted-foreground">Seamlessly works with your existing team workflows and communication tools.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><Zap className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
              <p className="text-muted-foreground">Real-time processing and response generation for natural conversation flow.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.3)] transition-shadow">
              <div className="mb-4 inline-flex p-2 rounded-md bg-accent/10 text-accent"><Globe className="size-5" /></div>
              <h3 className="text-xl font-semibold mb-2">Global Availability</h3>
              <p className="text-muted-foreground">Available 24/7 across all time zones with multilingual support.</p>
            </article>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="container py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-muted-foreground">Watch how your AI avatar handles real meetings</p>
          </div>
          
          <AvatarDemo />
        </section>

        {/* How it works */}
        <section className="container py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Get started in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Clone Your Persona</h3>
              <p className="text-muted-foreground">Upload your voice sample, profile, and skills to shape your avatar.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Connect Your Tools</h3>
              <p className="text-muted-foreground">Calendar, docs, and task apps for hands-free coordination and delivery.</p>
            </article>
            <article className="p-6 rounded-xl border border-border bg-card/50 text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Hire & Perform</h3>
              <p className="text-muted-foreground">Companies schedule your avatar to attend, execute, and report back.</p>
            </article>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="container py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from professionals using AI avatars</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah Chen"
              role="Product Manager"
              company="TechCorp"
              rating={5}
              testimonial="My AI avatar has been a game-changer. It attends my morning standups while I focus on deep work. The team loves how consistent and prepared it is."
            />
            <TestimonialCard
              name="Marcus Rodriguez"
              role="Sales Director"
              company="SalesForce Pro"
              rating={5}
              testimonial="I can now be in multiple client meetings simultaneously. My avatar handles initial consultations perfectly, freeing me up for closing deals."
            />
            <TestimonialCard
              name="Emily Johnson"
              role="Consultant"
              company="Strategy Partners"
              rating={4}
              testimonial="The level of customization is incredible. Clients often don't realize they're talking to an AI version of me until I tell them!"
            />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="container py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">Flexible pricing for individuals and teams</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$99"
              period="month"
              features={[
                "5 hours of avatar time",
                "Basic voice cloning",
                "Calendar integration",
                "Email support",
                "Standard security"
              ]}
              ctaText="Start Free Trial"
            />
            <PricingCard
              title="Professional"
              price="$299"
              period="month"
              features={[
                "25 hours of avatar time",
                "Advanced voice & appearance",
                "All integrations",
                "Priority support",
                "Advanced security",
                "Custom training data",
                "Analytics dashboard"
              ]}
              isPopular={true}
              ctaText="Get Started"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="contact us"
              features={[
                "Unlimited avatar time",
                "Multiple avatars",
                "White-label solution",
                "Dedicated support",
                "Enterprise security",
                "Custom integrations",
                "SLA guarantees"
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="container py-12 md:py-20">
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Clone Yourself?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already extended their reach with AI avatars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="hover-scale">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="xl">
                Schedule a Demo
              </Button>
            </div>
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
