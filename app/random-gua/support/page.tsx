export default function SupportPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you need help with Random Gua or have any questions, please
          don&apos;t hesitate to contact us. We&apos;re here to help!
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-2">Email us at:</p>
          <a
            href="mailto:vdolita.help@outlook.com"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            vdolita.help@outlook.com
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Helpful Information</h2>
        <p className="mb-4">When contacting support, please include:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Your device model</li>
          <li>iOS version</li>
          <li>App version</li>
          <li>A clear description of the issue</li>
          <li>Steps to reproduce the problem (if applicable)</li>
          <li>Screenshots (if relevant)</li>
        </ul>
      </section>
    </main>
  );
}
