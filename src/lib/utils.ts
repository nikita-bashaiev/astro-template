export function formatDate(input: Date | string) {
  const date = new Date(input);
  return date.toLocaleDateString('en-GB');
}

import clsx, { type ClassValue } from 'clsx';
import { twMerge, type ClassNameValue } from 'tailwind-merge';

export function cn(...inputs: ClassValue[] | ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}

export function combineArrays(...arrays: Array<any>[]) {
  return Array.from(new Set(arrays.flat()));
}
