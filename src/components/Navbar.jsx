import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Micheal Dev
        </h1>

        <ul className="hidden gap-8 font-medium text-gray-700 md:flex">
          <li>
            <a href="#" className="hover:text-blue-600">Home</a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-600">Services</a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
         </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">

  <button className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 md:block">
    Hire Me
  </button>

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-3xl text-blue-600 md:hidden"
  >
    ☰
  </button>

</div>
      </div>
      {isOpen && (
  <div className="bg-white shadow-md md:hidden">
    <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-700">

      <li>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-600"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-600"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#services"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-600"
        >
          Services
        </a>
      </li>

      <li>
        <a
          href="#portfolio"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-600"
        >
          Portfolio
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-600"
        >
          Contact
        </a>
      </li>

      <li>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Hire Me
        </button>
      </li>

    </ul>
  </div>
)}
    </nav>
  );
}

export default Navbar;