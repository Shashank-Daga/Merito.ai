"use client"

export function CTA() {
  const handleBookCall = () => {
    const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/merito"
    window.open(url, "_blank")
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Hiring?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Let&apos;s discuss how we can help you find the perfect talent for your organization.
        </p>
        <button
          onClick={handleBookCall}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          Book a Call
        </button>
      </div>
    </section>
  )
}
