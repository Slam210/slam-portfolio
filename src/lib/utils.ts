import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string, resolving Tailwind CSS class conflicts.
 *
 * Accepts any number of class values, conditionally joins them, and merges Tailwind CSS classes to ensure only the final variant of conflicting classes is included.
 *
 * @returns The merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
