function Portfolio() {
  const projects = [
    {
      title: "Business Website",
      description:
        "A modern responsive website built for a business brand.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "E-commerce Website",
      description:
        "An online store with a clean and user-friendly design.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
    {
      title: "Dashboard Design",
      description:
        "A professional dashboard interface for managing data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-100 px-6 py-20" data-aos="fade-up">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-600">
                  {project.description}
                </p>

                <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                  View Project
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;