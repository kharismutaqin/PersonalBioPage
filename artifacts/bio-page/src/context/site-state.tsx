import { createContext, useContext, useState, useCallback } from "react";
import siteConfig, { type LinkItem } from "@/content/site-config";

export type AvatarMode = "none" | "url" | "upload";

export interface AvatarState {
  mode: AvatarMode;
  url?: string;
  data?: string;
}

export interface ProfileState {
  name: string;
  bio: string;
  avatar: AvatarState;
}

interface SiteState {
  profile: ProfileState;
  links: LinkItem[];
}

interface SiteStateActions {
  setProfileName: (name: string) => void;
  setProfileBio: (bio: string) => void;
  setAvatarMode: (mode: AvatarMode) => void;
  setAvatarUrl: (url: string) => void;
  setAvatarData: (data: string) => void;

  updateLink: (index: number, patch: Partial<LinkItem>) => void;
  addLink: () => void;
  deleteLink: (index: number) => void;
  duplicateLink: (index: number) => void;
}

type SiteStateContext = SiteState & SiteStateActions;

const SiteStateContext = createContext<SiteStateContext | null>(null);

export function SiteStateProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileState>({
    name: siteConfig.profile.name,
    bio: siteConfig.profile.bio,
    avatar: {
      mode: "none",
      url: "",
      data: "",
    },
  });

  const [links, setLinks] = useState<LinkItem[]>(siteConfig.links.items);

  const setProfileName = useCallback((name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  }, []);

  const setProfileBio = useCallback((bio: string) => {
    setProfile((prev) => ({ ...prev, bio }));
  }, []);

  const setAvatarMode = useCallback((mode: AvatarMode) => {
    setProfile((prev) => ({
      ...prev,
      avatar: { ...prev.avatar, mode },
    }));
  }, []);

  const setAvatarUrl = useCallback((url: string) => {
    setProfile((prev) => ({
      ...prev,
      avatar: { ...prev.avatar, url, mode: "url" },
    }));
  }, []);

  const setAvatarData = useCallback((data: string) => {
    setProfile((prev) => ({
      ...prev,
      avatar: { ...prev.avatar, data, mode: "upload" },
    }));
  }, []);

  const updateLink = useCallback((index: number, patch: Partial<LinkItem>) => {
    setLinks((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...patch };
      return next;
    });
  }, []);

  const addLink = useCallback(() => {
    setLinks((prev) => [
      ...prev,
      {
        title: "New Link",
        description: "",
        url: "#",
        icon: { type: "auto" },
      },
    ]);
  }, []);

  const deleteLink = useCallback((index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const duplicateLink = useCallback((index: number) => {
    setLinks((prev) => {
      const copy = { ...prev[index] };
      const next = [...prev];
      next.splice(index + 1, 0, copy);
      return next;
    });
  }, []);

  return (
    <SiteStateContext.Provider
      value={{
        profile,
        links,
        setProfileName,
        setProfileBio,
        setAvatarMode,
        setAvatarUrl,
        setAvatarData,
        updateLink,
        addLink,
        deleteLink,
        duplicateLink,
      }}
    >
      {children}
    </SiteStateContext.Provider>
  );
}

export function useSiteState() {
  const context = useContext(SiteStateContext);
  if (!context) {
    throw new Error("useSiteState must be used within SiteStateProvider");
  }
  return context;
}
