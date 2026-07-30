function Services() {
  const services = [
    {
      title: "Figma to React",
      description:
        "Convert Figma designs into clean, pixel-perfect React websites.",
    },
    {
      title: "Responsive Design",
      description:
        "Websites that look amazing on desktop, tablet, and mobile devices.",
    },
    {
      title: "React + Tailwind CSS",
      description:
        "Modern, fast, and maintainable websites built with the latest tools.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          My Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;