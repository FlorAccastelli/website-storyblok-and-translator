import { GrYoga } from "react-icons/gr";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-emerald-900 w-full flex flex-row justify-around items-center p-8">
      <div>
        <GrYoga className="text-6xl"/>
      </div>
      <div>
        <h2 className="font-medium text-xl">Locations</h2>
        <p className="font-light">Calle Falsa 123 - Santa Fe</p>
        <p className="font-light">Calle Falsa 123 - Paraná</p>
      </div>
      <div>
        <h2 className="font-medium text-xl">Contacto</h2>
        <p className="font-light">0342 111 222</p>
        <p className="font-light">ashtangayoga@mail.com</p>
      </div>
      <div className="flex flex-col self-start">
        <div className="flex flex-row space-x-3">
          <FaInstagramSquare className="text-2xl"/>
          <FaYoutube className="text-2xl"/>
          <FaLinkedin className="text-2xl"/>
        </div>
      </div>
    </div>
  )
} 
