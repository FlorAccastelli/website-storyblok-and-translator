import Image from "next/image"

export default function Card({ title, description, image }) {
  return (
    <div className="text-black">
        <h2>{title}</h2>
        <p>{description}</p>
        <Image
        alt="services picture"
        >
            {image}
        </Image>
    </div>
  )
}
