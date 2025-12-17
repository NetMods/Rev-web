"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(
    process.env.NODE_ENV === "production",
  );
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const onLoadingComplete = () => setIsLoading(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        onLoadingComplete,
        isAnimationDone,
        setIsAnimationDone,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
