import { technologies } from '../data/siteData'

export default function Technologies() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Technologies We Train</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        From foundations to advanced practices, our trainers cover the technologies that
        matter most to modern engineering teams.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-lg border border-purple-100 bg-purple-50 p-5 text-center font-medium text-purple-800"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
