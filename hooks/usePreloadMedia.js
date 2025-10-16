import { useEffect, useRef, useState } from "react";
import { ASSET_URL } from "@/constants";

export const usePreloadMedia = () => {
  const total = Array.isArray(ASSET_URL) ? ASSET_URL.length : 0;
  const [isLoading, setIsLoading] = useState(total > 0);
  const [loadedCount, setLoadedCount] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    if (total === 0) {
      setIsLoading(false);
      setLoadedCount(0);
      return () => {
        mountedRef.current = false;
      };
    }

    const loadImage = (url) =>
      new Promise((resolve) => {
        const img = new Image();
        const cleanup = () => {
          img.onload = null;
          img.onerror = null;
        };
        img.onload = () => {
          cleanup();
          console.info("Successfully loaded image", url);
          resolve({ url, success: true });
        };
        img.onerror = () => {
          cleanup();
          console.warn(`Failed to load image: ${url}`);
          resolve({ url, success: false });
        };
        img.src = url;
      });

    const loadVideo = (url) =>
      new Promise((resolve) => {
        const video = document.createElement("video");
        const cleanup = () => {
          video.oncanplaythrough = null;
          video.onerror = null;
          try {
            video.src = "";
            video.load && video.load();
          } catch (e) {}
        };
        video.oncanplaythrough = () => {
          cleanup();
          console.info("Successfully loaded video", url);
          resolve({ url, success: true });
        };
        video.onerror = () => {
          cleanup();
          console.warn(`Failed to load video: ${url}`);
          resolve({ url, success: false });
        };
        video.preload = "auto";
        video.src = url;
        try {
          video.load();
        } catch (e) {}
      });

    const promises = (ASSET_URL || []).map((asset) => {
      const url = typeof asset === "string" ? asset : asset?.src || "";
      if (!url) return Promise.resolve({ url: "", success: true });

      const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
      const isVideo = /\.(mp4|webm|ogg)$/i.test(url);

      return isImage
        ? loadImage(url)
        : isVideo
          ? loadVideo(url)
          : Promise.resolve({ url, success: true });
    });

    Promise.allSettled(promises).then(() => {
      if (!mountedRef.current) return;
      setTimeout(() => setIsLoading(false), 1000);
    });

    return () => {
      mountedRef.current = false;
    };
  }, [total]);

  const progress = total === 0 ? 1 : Math.min(1, loadedCount / total);

  return { isLoading, loadedCount, total, progress };
};
