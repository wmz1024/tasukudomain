import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateRegistrationTime(registrationDate: string): string {
  if (!registrationDate) return ""

  const regDate = new Date(registrationDate)
  const now = new Date()

  // Check if the date is valid
  if (isNaN(regDate.getTime())) return ""

  // Calculate the difference in milliseconds
  const diffTime = now.getTime() - regDate.getTime()

  // Convert to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  // If registered within the last 30 days, show as "new"
  if (diffDays < 30) {
    return "新注册"
  }

  // Calculate years
  const diffYears = Math.floor(diffDays / 365)

  return `${diffYears}年`
}
