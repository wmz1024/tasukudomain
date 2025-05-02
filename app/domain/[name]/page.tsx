import Link from "next/link"
import { notFound } from "next/navigation"
import { domains } from "@/data/domains"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DomainRegistrationTime from "@/components/domain-registration-time"

export default function DomainPage({ params }: { params: { name: string } }) {
  const domainName = decodeURIComponent(params.name)
  const domain = domains.find((d) => d.name === domainName)

  if (!domain) {
    notFound()
  }

  const whoisUrl = `https://who.cx/${domain.name}`

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          返回域名列表
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl">{domain.name}</CardTitle>
              {domain.shortMeaning && <CardDescription className="text-lg mt-2">{domain.shortMeaning}</CardDescription>}
            </div>
            <div className="flex flex-col gap-2">
              <DomainRegistrationTime registrationDate={domain.registrationDate} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {domain.longMeaning && (
              <div>
                <h3 className="text-lg font-medium mb-2">域名寓意</h3>
                <p className="text-gray-700">{domain.longMeaning}</p>
              </div>
            )}

            <Separator />

            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a href={whoisUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
                    className="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  查询 WHOIS 信息
                </a>
              </Button>
            </div>

            {domain.price !== "not-for-sale" && (
              <>
                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">购买此域名</h3>

                  {/* Display price information in the purchase block */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">域名价格: </p>
                    <p className="text-xl font-bold mt-1">
                      {domain.price === "negotiable" ? "价格议定" : `¥${domain.price}`}
                    </p>
                  </div>

                  <p className="mb-4">如果您对此域名感兴趣，请通过以下方式联系我：<br></br>即使域名是议价域名，我们也愿意将域名低价出售之类的<br></br>邮件将在休息日全天/工作日的7点后查看</p>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:t@sk.ci" className="text-primary hover:underline">
                      t@sk.ci
                    </a>
                  </div>

                  <div className="mt-6">
                    <Button asChild>
                      <a href={`mailto:t@sk.ci?subject=域名购买咨询: ${domain.name}`}>联系购买</a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
