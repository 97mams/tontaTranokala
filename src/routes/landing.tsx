import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductPreview } from "@/components/landing/product-preview";
import { Benefits } from "@/components/landing/benefits";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/landing")({
  component: LandingComponent,
});

function LandingComponent() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <ProductPreview />
        <Features />
        <HowItWorks />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}