import Link from "next/link"
import { domains } from "@/data/domains"
import DomainCard from "@/components/domain-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Group domains by category
  const groupedDomains = domains.reduce(
    (acc, domain) => {
      if (!acc[domain.group]) {
        acc[domain.group] = []
      }
      acc[domain.group].push(domain)
      return acc
    },
    {} as Record<string, typeof domains>,
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Tasuku's Domains</h1>
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link href="https://sk.ci/">
            返回Tasuku的主页
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </div>

      {Object.entries(groupedDomains).map(([group, domains]) => (
        <div key={group} className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-gray-100 rounded-full p-2">
              {/* Use the icon from the group's icon property, default to users icon */}
              <span dangerouslySetInnerHTML={{ __html: getGroupIcon(group) }} />
            </div>
            <h2 className="text-xl font-semibold">{group}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <DomainCard key={domain.name} domain={domain} />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

// Helper function to get FontAwesome icon for a group
function getGroupIcon(group: string): string {
  const iconMap: Record<string, string> = {
    分区1: '<i class="fa-solid fa-users"></i>',
    分区2: '<i class="fa-solid fa-globe"></i>',
    // Add more mappings as needed
  }

  return iconMap[group] || '<i class="fa-solid fa-folder"></i>' // Default icon
}
