"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Error",
  description: "Don't know what happened",
};

export default function Error({ error }) {
  useEffect(() => console.error(error), [error]);

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <p>Oops! Something went wrong... maybe try refreshing?</p>
      <div className="bg-foreground/10 m-3 p-3">
        <pre>{JSON.stringify(error.message, null, 2)}</pre>
      </div>
    </section>
  );
}
