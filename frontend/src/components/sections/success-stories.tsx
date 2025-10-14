export function SuccessStories() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-foreground mb-12">
          Success Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">Fintech Startup Scales Rapidly</h3>
            <p className="text-gray-600 mb-4">
              Helped a fintech startup hire 15 key roles in 3 weeks, including CTO and senior developers, enabling them to launch their product on time.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Client:</strong> PaySecure Inc.
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">E-commerce Platform Expands Team</h3>
            <p className="text-gray-600 mb-4">
              Recruited a full product team for an e-commerce platform, including product managers and UX designers, resulting in 40% increase in user engagement.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Client:</strong> ShopEase
            </div>
          </div>

          {/* Success Story 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">Healthcare Tech Innovates</h3>
            <p className="text-gray-600 mb-4">
              Placed AI specialists and data scientists for a healthcare technology company, accelerating their R&D and bringing innovative solutions to market.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Client:</strong> HealthAI Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
