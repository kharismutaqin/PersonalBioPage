import Hero from "@/components/hero";
import LinksSection from "@/components/links-section";
import NowSection from "@/components/now-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <Hero />
        <LinksSection />
        <NowSection />
      </main>
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  );
}
