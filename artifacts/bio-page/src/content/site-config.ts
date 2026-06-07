import rawConfig from "./site-config.json";

export interface LinkItemSize {
  colSpan: number;
  rowSpan: number;
}

export interface LinkItem {
  title: string;
  description: string;
  url: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  radius?: string;
  icon?: {
    type: "auto" | "url" | "file";
    value?: string;
  };
  size?: LinkItemSize;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: {
    type: "placeholder";
    placeholderText: string;
  };
}

export interface Links {
  sectionTitle: string;
  gridColumns: number;
  items: LinkItem[];
}

export interface Now {
  sectionTitle: string;
  currentlyBuilding: string;
  currentlyLearning: string;
  currentlyListening: string;
}

export interface Theme {
  primaryColor: string;
  backgroundColor: string;
  cardRadius: string;
}

export interface Footer {
  copyrightName: string;
}

export interface SiteConfig {
  profile: Profile;
  links: Links;
  now: Now;
  theme: Theme;
  footer: Footer;
}

const siteConfig = rawConfig as SiteConfig;

export default siteConfig;
