import siteConfig from "@/content/site-config";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer data-testid="section-footer" className="py-8 border-t border-border">
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}
