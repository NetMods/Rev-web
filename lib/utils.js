import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes) => {
  return clsx(twMerge(classes));
};

export const getBaseURL = () => {
  return metaData.baseUrl.endsWith("/")
    ? metaData.baseUrl
    : `${metaData.baseUrl}/`;
};

export const formatDate = (input) => {
  const date = new Date(input);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
