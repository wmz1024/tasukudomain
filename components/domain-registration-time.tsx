"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { calculateRegistrationTime } from "@/lib/utils"

interface DomainRegistrationTimeProps {
  registrationDate: string
}

export default function DomainRegistrationTime({ registrationDate }: DomainRegistrationTimeProps) {
  const [timeDisplay, setTimeDisplay] = useState<string>("")

  useEffect(() => {
    setTimeDisplay(calculateRegistrationTime(registrationDate))
  }, [registrationDate])

  if (!timeDisplay) return null

  return <Badge variant="outline">{timeDisplay === "新注册" ? timeDisplay : `注册时间: ${timeDisplay}`}</Badge>
}
