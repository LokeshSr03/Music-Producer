import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function projectcn(...inputs) {
  return twMerge(clsx(inputs));
}

export default projectcn;
