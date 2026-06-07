import Hero from "@/components/hero";
import BentoLinks from "@/components/bento-links";
import NowSection from "@/components/now-section";
import Footer from "@/components/footer";
import EditButton from "@/components/edit-button";
import EditorDrawer from "@/components/editor-drawer";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--theme-bg)" }}>
      <EditButton />
      <EditorDrawer />
      <main className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <Hero />
        <BentoLinks />
        <NowSection />
      </main>
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  );
}
