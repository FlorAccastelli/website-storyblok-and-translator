import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 font-medium text-emerald-700">
              <span>Ashtanga Yoga Santa Fe</span>
            </span>
          </Link>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item text-emerald-800">
          <Link href="/" locale="es" className="hover:underline">
            Español
          </Link>
          <Link href="/" locale="en" className="hover:underline">
            English
          </Link>
          <Link 
            href="#contact"
            className="px-6 py-2 text-white bg-emerald-800 rounded-md md:ml-5"
          >
            Book Me!
          </Link>
        </div>
      </nav>
    </div>
  )
}
