function About() {
  return (
    <section 
     id="about" 
     className="py-20 px-6"
     data-aos="fade-up"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">

        <div className="md:w-1/2">
          <h2 className="mb-5 text-4xl font-bold text-gray-800">
            About Us
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            We create modern and responsive websites that help businesses
            grow online. Our goal is to build beautiful designs with
            excellent user experience.
          </p>

          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Learn More
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="About us"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default About;