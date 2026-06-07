const ICON_SIZE = 16;

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <IconWrapper>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a8.27 8.27 0 0 0-2-5.5 7.8 7.8 0 0 0-2-2 8.27 8.27 0 0 0-5 0 7.8 7.8 0 0 0-2 2 8.27 8.27 0 0 0-2 5.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </IconWrapper>
  );
}

export function XIcon() {
  return (
    <IconWrapper>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </IconWrapper>
  );
}

export function LinkedInIcon() {
  return (
    <IconWrapper>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconWrapper>
  );
}

export function SpotifyIcon() {
  return (
    <IconWrapper>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5c2.5 1 5 1 7 0" />
      <path d="M7 9.5c4 1.5 6 1.5 9 0" />
      <path d="M9 15.5c2.5 1 4 1 5 0" />
    </IconWrapper>
  );
}

export function EmailIcon() {
  return (
    <IconWrapper>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </IconWrapper>
  );
}

export function WebsiteIcon() {
  return (
    <IconWrapper>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </IconWrapper>
  );
}

export function LinkIcon() {
  return (
    <IconWrapper>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </IconWrapper>
  );
}

const ICON_MAP: Record<string, () => React.JSX.Element> = {
  github: GitHubIcon,
  x: XIcon,
  twitter: XIcon,
  linkedin: LinkedInIcon,
  spotify: SpotifyIcon,
  email: EmailIcon,
  website: WebsiteIcon,
  link: LinkIcon,
};

export function getIcon(name?: string) {
  if (!name) return null;
  const key = name.toLowerCase().trim();
  const Icon = ICON_MAP[key] ?? LinkIcon;
  return <Icon />;
}
