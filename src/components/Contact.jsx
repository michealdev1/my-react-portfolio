function Contact() {
  return (
    <section id="contact" className="px-6 py-20" data-aos="fade-up">

      <div className="mx-auto max-w-5xl">

        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Contact Me
        </h2>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Let's work together
            </h3>

            <p className="mb-6 text-gray-600">
              Have a project in mind? Send me a message and
              let's discuss how I can help you build a modern website.
            </p>

            <p className="mb-2 text-gray-700">
              📧 Email: michealweijie@gmail.com
            </p>

            <p className="text-gray-700">
              📱 Phone: +234 814 380 9750
            </p>
          </div>


          {/* Contact Form */}
          <form
              action="https://formspree.io/f/xzdnokrv"
                method="POST"
              className="rounded-xl bg-gray-100 p-6 shadow-md"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="mb-4 w-full rounded-lg border p-3 outline-none focus:border-blue-600"
           ></textarea>


            <button
              className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;