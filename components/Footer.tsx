import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-8">
            <h2 className="text-4xl font-bold mb-2">Quik</h2>
            <p className="text-lg font-medium text-gray-600">Accelerating your digital journey, one click at a time.</p>
          </div>
          <div className="flex flex-wrap justify-between md:w-2/3">
            <div className="w-1/2 md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl mb-2">Explore</h3>
              <ul className="space-y-2 text-md">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/features" className="hover:underline">Features</Link></li>
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
              <ul className="space-y-2 text-md">
                <li>(555) 123-4567</li>
                <li>info@quik.com</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl mb-2">Follow</h3>
              <ul className="space-y-2 text-md">
                <li><Link href="#" className="hover:underline">Instagram</Link></li>
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
                <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-semibold text-xl mb-2">Legal</h3>
              <ul className="space-y-2 text-md">
                <li><Link href="/terms" className="hover:underline">Terms</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 pb-8 border-t border-gray-300 text-md text-center">
          © {new Date().getFullYear()} Quik. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}