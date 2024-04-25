import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// From shadcn setup
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
