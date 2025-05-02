"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Copyright © {currentYear} Tasuku Hachisuka.
        </p>
      </div>
    </footer>
  )
}
