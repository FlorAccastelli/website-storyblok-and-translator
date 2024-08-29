import { GrYoga } from "react-icons/gr";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer({ data }) {
  const { title_locations, subtitle_locations1, subtitle_locations2, title_contact, subtitle_contact_phone_number, subtitle_contact_email } = data;
  return (
    <div className="bg-emerald-900 w-full flex flex-col sm:flex-row m-x-2 justify-around items-center p-8 overflow-hidden">
     { <div>
        <GrYoga className="text-6xl"/>
      </div>}
      <div className="sm:py-0 py-2">
        <h2 className="font-medium text-lg sm:pt-0 sm:text-xl">{title_locations}</h2>
        <p className="font-light sm:text-base text-sm">{subtitle_locations1}</p>
        <p className="font-light sm:text-base text-sm">{subtitle_locations2}</p>
      </div>
      <div className="sm:pb-0 pb-8">
        <h2 className="font-medium text-lg sm:text-xl">{title_contact}</h2>
        <p className="font-light sm:text-base text-sm">{subtitle_contact_phone_number}</p>
        <p className="font-light sm:text-base text-sm">{subtitle_contact_email}</p>
      </div>
      <div className="flex flex-col sm:self-start items-center">
        <div className="flex flex-row sm:space-x-3 space-x-8">
          <FaInstagramSquare className="text-2xl"/>
          <FaYoutube className="text-2xl"/>
          <FaLinkedin className="text-2xl"/>
        </div>
      </div>
    </div>
  )
} 
