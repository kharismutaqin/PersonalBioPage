import { useSiteState } from "@/context/site-state";

function Avatar() {
  const { profile } = useSiteState();
  const { avatar } = profile;

  const commonClasses =
    "w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary border-2 border-border flex items-center justify-center mb-6 shrink-0";

  if (avatar.mode === "url" && avatar.url) {
    return (
      <img
        src={avatar.url}
        alt=""
        className={commonClasses + " object-cover"}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  if (avatar.mode === "upload" && avatar.data) {
    return (
      <img
        src={avatar.data}
        alt=""
        className={commonClasses + " object-cover"}
      />
    );
  }

  return (
    <div className={commonClasses} aria-label="Avatar placeholder">
      <span
        className="text-4xl sm:text-5xl select-none"
        style={{ color: "var(--theme-primary)" }}
      >
        ?
      </span>
    </div>
  );
}

export default function Hero() {
  const { profile } = useSiteState();

  return (
    <section data-testid="section-hero" className="flex flex-col items-center text-center py-12 sm:py-16">
      <Avatar />
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
