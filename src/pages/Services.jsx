import { services } from '../data/siteData'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Training programs designed around your team's goals, delivered by expert trainers.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="font-medium text-gray-900 mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
