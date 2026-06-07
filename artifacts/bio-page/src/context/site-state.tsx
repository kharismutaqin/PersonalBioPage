import { createContext, useContext, useState, useCallback } from "react";
import siteConfig from "@/content/site-config";

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
}

interface SiteStateActions {
  setProfileName: (name: string) => void;
  setProfileBio: (bio: string) => void;
  setAvatarMode: (mode: AvatarMode) => void;
  setAvatarUrl: (url: string) => void;
  setAvatarData: (data: string) => void;
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

  return (
    <SiteStateContext.Provider
      value={{
        profile,
        setProfileName,
        setProfileBio,
        setAvatarMode,
        setAvatarUrl,
        setAvatarData,
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
