import { Link } from 'react-router-dom'
import { services, stats, technologies } from '../data/siteData'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <img src="/logo.png" alt="UpSkilliT logo" className="h-20 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to Empower Code Pipeline demo -  We changed this and caused a rollback
          </h1>
          <p className="mt-4 text-lg text-purple-700 font-medium">Transform Your IT Skills</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Leading corporate IT training provider since 2018, delivering customized
            professional development programs with AI-enhanced training methods.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md border border-purple-700 text-purple-700 font-medium hover:bg-purple-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-3xl font-bold text-purple-700">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Technologies We Train
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
