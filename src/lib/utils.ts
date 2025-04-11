// This file contains utility functions that are used throughout the application.
// It includes a function to generate class names for Tailwind CSS using the
// `clsx` and `tailwind-merge` libraries. The `cn` function takes a variable
// number of class names as arguments and merges them into a single string,
// ensuring that conflicting classes are resolved correctly.
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
