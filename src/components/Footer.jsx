import { GrYoga } from "react-icons/gr";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer({ data }) {
  const { title_locations, subtitle_locations1, subtitle_locations2, title_contact, subtitle_contact_phone_number, subtitle_contact_email } = data;
  return (
    <div className="bg-emerald-900 w-full flex flex-row justify-around items-center p-8">
      <div>
        <GrYoga className="text-6xl"/>
      </div>
      <div>
        <h2 className="font-medium text-xl">{title_locations}</h2>
        <p className="font-light">{subtitle_locations1}</p>
        <p className="font-light">{subtitle_locations2}</p>
      </div>
      <div>
        <h2 className="font-medium text-xl">{title_contact}</h2>
        <p className="font-light">{subtitle_contact_phone_number}</p>
        <p className="font-light">{subtitle_contact_email}</p>
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
