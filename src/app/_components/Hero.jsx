import Container from "./Container";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
    <Container className="flex flex-col pt-28 pb-18 bg-pink-200 rounded-md w-[80%]">
      <div className="flex flex-col lg:flex-row items-center w-full lg:px-10">
        <div className="max-w-2xl mb-8 pr-3 lg:w-1/2">
          <h1 className="text-4xl font-bold text-emerald-800 leading-snug tracking-tight lg:text-4xl lg:leading-tight">
            Ashtanga Yoga
          </h1>
          <p className="py-5 text-xl leading-normal text-emerald-900">
            Ashtanga Vinyasa Yoga es un método que tiene sus raíces en el Hatha Yoga y como propósito busca gradualmente llevar al practicante a redescubrir su máximo potencial en todos los niveles de conciencia humana: física, psicológica y espiritual.
            Durante las clases se enseña de forma personalizada, y de acuerdo a la posibilidad personal de cada practicante.
          </p>
          <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-emerald-900 underline">
            ¡Estoy aquí para ser tu instructora!
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            className="rounded-full object-cover" 
            src="/laruga_photo.jpg"
            width={480}
            height={270}
            alt="Ashtanga Yoga"
          />
        </div>
      </div>
    </Container>
    </>
  )
}
