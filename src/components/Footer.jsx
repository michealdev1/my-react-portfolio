function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-white" data-aos="fade-up">

      <div className="mx-auto max-w-7xl text-center">

        <h2 className="mb-4 text-2xl font-bold">
          Micheal Dev
        </h2>

        <p className="mb-6 text-gray-400">
          Building modern and responsive websites with React.
        </p>

        <div className="mb-6 flex justify-center gap-6">

          <a
            href="#"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="hover:text-blue-400"
          >
            Twitter
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 Micheal Dev. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;