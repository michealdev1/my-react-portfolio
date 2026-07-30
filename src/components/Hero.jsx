function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Turn Your <span className="text-blue-600">Figma Design</span>
          <br />
          Into a Beautiful Website
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          I build fast, responsive and pixel-perfect React websites using
          React, Vite and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Hire Me
          </button>

          <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;