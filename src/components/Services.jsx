export default function ServicesSection({ data }) {
  const { title, service_cards } = data;
  
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20 text-emerald-900">{title}</h2>
      <div className="py-4 px-4 mx-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 lg:space-y-0 place-items-center">
          {service_cards.map((c) => (
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
      <div className="flex h-full flex-col p-6 lg:mx-1 mx-auto max-w-lg text-center rounded-lg border shadow-md border-pink-300">
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