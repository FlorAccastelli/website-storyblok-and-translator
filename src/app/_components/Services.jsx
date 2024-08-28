export default function ServicesSection() {
  const yogaCourses = [
    {
      title: "Anatomía para Yoga",
      subtitle: "Comprendiendo el Cuerpo Humano en la Práctica de Yoga",
      description: "Este curso explora la anatomía básica y avanzada, centrándose en cómo los músculos, huesos y articulaciones interactúan durante las posturas de yoga. Ideal para practicantes que desean profundizar en la comprensión de su cuerpo.",
      duration: "8 semanas"
    },
    {
      title: "Técnicas de Respiración",
      subtitle: "Dominando el Pranayama",
      description: "Aprende técnicas de respiración tradicionales y modernas que te ayudarán a mejorar tu práctica de yoga, incrementar la energía vital y calmar la mente. Este curso es adecuado tanto para principiantes como para practicantes avanzados.",
      duration: "6 semanas"
    },
    {
      title: "Yoga para la Flexibilidad",
      subtitle: "Aumenta tu Flexibilidad con Yoga",
      description: "Este curso está diseñado para ayudar a mejorar la flexibilidad mediante una serie de posturas y secuencias de yoga. Ideal para aquellos que buscan incrementar su rango de movimiento y prevenir lesiones.",
      duration: "5 semanas"
    },
    {
      title: "Meditación y Mindfulness",
      subtitle: "Integrando Meditación en tu Práctica de Yoga",
      description: "Este curso enseña técnicas de meditación y mindfulness que se pueden integrar en la práctica de yoga para aumentar la concentración, reducir el estrés y mejorar el bienestar general.",
      duration: "4 semanas"
    }
  ];
  
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20 text-emerald-900">Cursos de Yoga</h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center">
          {yogaCourses.map((c) => (
            <ServiceCard data={c} key={c.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ data }) => {
  const { title, subtitle, description, duration } = data;
  return (
    <>
      <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow-md border-pink-300">
        <h3 className="mb-4 text-2xl font-semibold text-emerald-800">{title}</h3>
        <p className="font-light text-gray-500">{subtitle}</p>
        <p className="mt-4  text-emerald-700">{description}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-3xl font-bold text-emerald-800">{duration}</span>
        </div>
      </div>
    </>
  )
}