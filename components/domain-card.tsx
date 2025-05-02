"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { DomainType } from "@/types/domain"
import { calculateRegistrationTime } from "@/lib/utils"

interface DomainCardProps {
  domain: DomainType
}

export default function DomainCard({ domain }: DomainCardProps) {
  // Calculate registration time based on registration date
  const registrationTimeDisplay = calculateRegistrationTime(domain.registrationDate)

  return (
    <Link href={`/domain/${encodeURIComponent(domain.name)}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          {registrationTimeDisplay && (
            <Badge variant="outline" className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm">
              {registrationTimeDisplay}
            </Badge>
          )}

          {domain.price && (
            <Badge variant="secondary" className="absolute top-10 right-2">
              {domain.price === "negotiable" ? "议价" : domain.price === "not-for-sale" ? "不卖" : `¥${domain.price}`}
            </Badge>
          )}
        </div>

        <CardContent className="p-6">
          <div className=" mb-6">
            <h3 className="text-3xl font-medium text-gray-600">{domain.name}</h3>
          </div>

          {domain.shortMeaning && (
            <div className="mt-4">
              <p className="text-lg font-medium">{domain.shortMeaning}</p>
            </div>
          )}

          {domain.longMeaning && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 line-clamp-2">{domain.longMeaning}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
