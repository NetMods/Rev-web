"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Error",
  description: "Don't know what happened",
};

export default function Error({ error }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
      <pre>{JSON.stringify(error.message, null, 2)}</pre>
    </div>
  );
}
