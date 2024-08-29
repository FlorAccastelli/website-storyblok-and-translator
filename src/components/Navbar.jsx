import Link from "next/link";
import { RiCalendarScheduleFill } from "react-icons/ri";

export default function Navbar({ data }) {
  const { title, cta_button_text } = data;
  return (
    <div className="w-[80%] mx-auto">
      <nav className="container flex items-center py-8 mx-auto">
        <div className="flex items-center lg:w-2/3 w-2/3 md:w-1/2">
          <Link href="/">
            <span className="flex items-center font-medium text-emerald-700">
              <span className="hidden sm:block">{title}</span>
              <span className="block sm:hidden bg-emerald-800 text-white rounded-md px-3 py-2">AYL</span>
            </span>
          </Link>
        </div>

        <div className="flex justify-end text-emerald-800 items-center lg:w-1/2 md:w-1/2 w-full sm:w-1/2">
          <Link href="/es" className="hover:underline mx-4">
            <span className="hidden md:block">Español</span>
            <span className="block md:hidden">ES</span>
          </Link>
          <Link href="/en" className="hover:underline">
            <span className="hidden md:block">English</span>
            <span className="block md:hidden">EN</span>
          </Link>
          <Link 
            href="#contact"
            className="px-3 py-2 text-white bg-emerald-800 rounded-md ml-4 text-center"
          >
            <span className="hidden sm:block">{cta_button_text}</span> 
            <RiCalendarScheduleFill className="block sm:hidden" /> 
          </Link>
        </div>
      </nav>
    </div>
  )
}
