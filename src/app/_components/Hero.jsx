import Container from "./Container";
import Image from "next/image";

export default function HeroSection({ data = {} }) {
  const { title, description, cta_button_text, picture } = data;

  return (
    <>
    <Container className="flex flex-col pt-28 pb-18 bg-pink-200 rounded-md w-[80%]">
      <div className="flex flex-col lg:flex-row items-center w-full lg:px-10">
        <div className="max-w-2xl mb-8 pr-3 lg:w-1/2">
          <h1 className="text-4xl font-bold text-emerald-800 leading-snug tracking-tight lg:text-4xl lg:leading-tight">
            {title}
          </h1>
          <p className="py-5 text-xl leading-normal text-emerald-900">
            {description}
          </p>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-emerald-900 underline">
            {cta_button_text}
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {/* <Image
            className="rounded-full object-cover" 
            src={picture.filename}
            width={480}
            height={270}
            alt="Ashtanga Yoga"
          /> */}
        </div>
      </div>
    </Container>
    </>
  )
}
