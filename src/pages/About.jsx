import { stats } from '../data/siteData'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About UpSkilliT</h1>
      <p className="text-gray-600 max-w-3xl leading-relaxed">
        UpSkilliT is a corporate IT training provider offering customized professional
        development programs using AI-enhanced delivery methods. Founded in 2018 by
        Jagadeeswaran, we partner with enterprise clients to close skill gaps through
        onsite, remote, and interactive virtual classroom training.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-700">{stat.value}</div>
            <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
