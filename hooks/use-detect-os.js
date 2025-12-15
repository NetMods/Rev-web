"use client";

import { useEffect, useState } from "react";

export const useDetectOS = () => {
  const [userOS, setUserOS] = useState("");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes("win")) return "Windows";
      if (userAgent.includes("mac")) return "MacOS";
      if (userAgent.includes("linux")) return "Linux";
      return "Unknown";
    };
    setUserOS(detectOS());
  }, []);

  return userOS;
};
