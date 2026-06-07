import siteConfig from "@/content/site-config";

export default function Hero() {
  const { profile } = siteConfig;

  return (
    <section data-testid="section-hero" className="flex flex-col items-center text-center py-12 sm:py-16">
      <div
        data-testid="img-avatar"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary border-2 border-border flex items-center justify-center mb-6 shrink-0"
        aria-label="Avatar placeholder"
      >
        <span className="text-4xl sm:text-5xl text-muted-foreground select-none">
          {profile.avatar.placeholderText}
        </span>
      </div>

      <h1
        data-testid="text-name"
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3"
      >
        {profile.name}
      </h1>

      <p
        data-testid="text-bio"
        className="max-w-md text-base text-muted-foreground leading-relaxed"
      >
        {profile.bio}
      </p>
    </section>
  );
}
