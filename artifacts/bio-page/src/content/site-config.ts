import rawConfig from "./site-config.json";

export interface LinkItem {
  title: string;
  description: string;
  url: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  radius?: string;
  icon?: string;
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
