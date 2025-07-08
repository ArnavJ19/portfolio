import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
