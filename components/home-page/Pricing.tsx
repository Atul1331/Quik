import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Free",
    price: "Free",
    features: [
      "Global Debit/credit cards",
      "Business account and bill pay",
      "Integrated expense management",
      "Real-time spend reporting",
      "AI expense tracker",
      "24/7 chat support",
    ],
    cta: "Get started for free",
  },
  {
    name: "Team",
    price: "$18",
    period: "/month",
    features: [
      "Everything in Free plan",
      "Custom expense policies and approvals",
      "Custom procurement workflows",
      "Custom, automated HRIS and advanced accounting integrations",
      "Dedicated support for admins",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Team plan",
      "Local cards and billing in 50+ countries",
      "Custom compliance and audit reports",
      "Advanced roles and permissions",
      "Top-tier onboarding and support",
    ],
    cta: "Contact sales",
  },
]

export default function Pricing() {
  return (
    <section className="w-[90%] mx-auto py-12 md:py-24 lg:py-32">
      {/* <div className="container px-4 md:px-6"> */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Get to know about our pricing
          </h2>
          <p className="mt-2 md:text-xl sm:text-lg text-sm text-gray-600">Choose the plan that's right for you</p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center lg:justify-center">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`flex flex-col p-6 rounded-2xl max-w-[310px] lg:min-w-[300px] ${
                  tier.highlighted
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
                } transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mb-8`}
              >
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{tier.price}</span>
                    {tier.period && <span className="ml-1 text-xl font-semibold">{tier.period}</span>}
                  </div>
                </div>
                <ul className="mt-6 space-y-2 lg:space-y-4 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <Check className={`h-5 w-5 ${tier.highlighted ? "text-green-400" : "text-green-500"} shrink-0`} />
                      <span className="ml-3 text-md lg:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 text-sm md:text-md ${
                    tier.highlighted
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}