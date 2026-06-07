export default function Footer() {
  return (
    <footer data-testid="section-footer" className="py-8 border-t border-border">
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
