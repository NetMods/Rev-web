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
          console.info("succesfull loaded image", url);
          resolve(url);
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`);
          cleanup();
          resolve(url);
        };
        img.src = url;
      });

    const loadVideo = (url) =>
      new Promise((resolve) => {
        const video = document.createElement("video");
        const cleanup = () => {
          video.onloadeddata = null;
          video.onerror = null;
          try {
            video.src = "";
            video.load && video.load();
          } catch (e) {}
        };
        video.onloadeddata = () => {
          cleanup();
          console.info("succesfull loaded video", url);
          resolve(url);
        };
        video.onerror = () => {
          console.warn(`Failed to load video: ${url}`);
          cleanup();
          resolve(url);
        };
        video.preload = "auto";
        video.src = url;
        try {
          video.load();
        } catch (e) {}
      });

    const promises = (ASSET_URL || []).map((asset) => {
      const url = typeof asset === "string" ? asset : asset?.src || "";
      if (!url) return Promise.resolve();

      const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
      const isVideo = /\.(mp4|webm|ogg)$/i.test(url);

      const loader = isImage
        ? loadImage(url)
        : isVideo
          ? loadVideo(url)
          : Promise.resolve(url);

      return loader.then(() => {
        if (!mountedRef.current) return;
        setLoadedCount((c) => c + 1);
      });
    });

    Promise.all(promises).then(() => {
      if (!mountedRef.current) return;
      setTimeout(() => setIsLoading(false), 500);
    });

    return () => {
      mountedRef.current = false;
    };
  }, [ASSET_URL]);

  const progress = total === 0 ? 1 : Math.min(1, loadedCount / total);

  return { isLoading, loadedCount, total, progress };
};

export default usePreloadMedia;
