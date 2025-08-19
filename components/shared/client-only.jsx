import { useEffect, useState } from "react";

export function ClientOnly({ children, fallback }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}
