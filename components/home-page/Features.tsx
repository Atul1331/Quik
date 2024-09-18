import { MessageSquare, BarChart, Zap, Lock } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: "Easy Integration",
    description: "Add our widget to your site with just a few lines of code. Customize it to fit seamlessly with your design and start gathering feedback effortlessly.",
    color: "bg-blue-100",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-purple-500" />,
    title: "Real-time Feedback",
    description: "Collect and view user feedback instantly as it comes in. Act on insights in real-time to improve user experience on the go.",
    color: "bg-purple-100",
  },
  {
    icon: <BarChart className="h-6 w-6 text-red-500" />,
    title: "Powerful Analytics",
    description: "Gain insights with our comprehensive analytics dashboard. Track patterns, measure engagement, and make data-driven decisions easily.",
    color: "bg-red-100",
  },
  {
    icon: <Lock className="h-6 w-6 text-green-500" />,
    title: "Secure & Private",
    description: "Your data is encrypted and stored securely on our servers. We ensure full privacy compliance to safeguard your users' information.",
    color: "bg-green-100",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full mx-auto py-12">
        <div className="w-[90%] mx-auto">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">More than just a tool</h2>
                <p className="mt-2 text-xl text-gray-600">Explore what else we can do for you</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`rounded-full p-3 ${feature.color}`}>
                        {feature.icon}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-3 text-md font-medium text-gray-500">{feature.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      
    </section>
  )
}