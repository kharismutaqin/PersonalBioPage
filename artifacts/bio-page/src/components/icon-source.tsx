import { useState, useEffect, useCallback } from "react";
import { LinkIcon } from "@/components/icons";

export type IconType = "auto" | "url" | "file";

export interface IconSourceConfig {
  type: IconType;
  value?: string;
}

interface IconSourceProps {
  icon?: IconSourceConfig;
  url?: string;
  color?: string;
}

function getFaviconUrl(linkUrl: string): string | null {
  try {
    const u = new URL(linkUrl);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return null;
    }
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
  } catch {
    return null;
  }
}

function useIconSource(icon: IconSourceConfig | undefined, url?: string) {
  const [state, setState] = useState<{
    src: string | null;
    phase: "initial" | "fallback" | "failed";
  }>({ src: null, phase: "initial" });

  useEffect(() => {
    if (!icon) {
      setState({ src: null, phase: "failed" });
      return;
    }

    const { type, value } = icon;
    if (type === "file" && value) {
      setState({ src: value, phase: "initial" });
    } else if (type === "url" && value) {
      setState({ src: value, phase: "initial" });
    } else if (type === "auto") {
      const favicon = url ? getFaviconUrl(url) : null;
      setState({ src: favicon, phase: favicon ? "initial" : "failed" });
    } else {
      setState({ src: null, phase: "failed" });
    }
  }, [icon, url]);

  const handleError = useCallback(() => {
    setState((prev) => {
      if (prev.phase === "initial") {
        const favicon = url ? getFaviconUrl(url) : null;
        if (favicon) {
          return { src: favicon, phase: "fallback" };
        }
        return { src: null, phase: "failed" };
      }
      return { src: null, phase: "failed" };
    });
  }, [url]);

  return {
    src: state.src,
    failed: state.phase === "failed",
    handleError,
  };
}

export function IconSource({ icon, url, color }: IconSourceProps) {
  const { src, failed, handleError } = useIconSource(icon, url);

  if (failed || !src) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded"
        style={{ color }}
      >
        <LinkIcon />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded overflow-hidden">
      <img
        src={src}
        alt=""
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
        onError={handleError}
        loading="lazy"
      />
    </span>
  );
}
