import { contact } from '../data/siteData'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Have a question about our training programs? Reach out and our team will get back
        to you.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="font-medium text-gray-900">Address</h2>
            <p>{contact.address}</p>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">Phone</h2>
            <p>{contact.phone}</p>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">Mobile / WhatsApp</h2>
            <p>{contact.mobile}</p>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">Email</h2>
            <p>{contact.email}</p>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">Business Hours</h2>
            <p>{contact.hours}</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
