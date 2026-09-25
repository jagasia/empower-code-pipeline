import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        What Our Clients Say
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <blockquote
            key={item.author}
            className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col"
          >
            <p className="text-gray-700 italic flex-1">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-medium text-purple-700">
              — {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
