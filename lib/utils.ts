import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  '#0A18AC',
  '#d10e0e',
  '#069c1b',
  '#c10ccf',
  '#21e1de'
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string{
  return COLORS[connectionId % COLORS.length]
}