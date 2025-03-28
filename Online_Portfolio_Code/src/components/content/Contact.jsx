export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen p-8">

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 ">
          Get In Touch
        </h2>

        {/* Menu */}
        <div className="cursor-pointer flex flex-col space-y-4">
          <a
            href="https://www.linkedin.com/in/pholee"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-black transition-colors"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/pholee"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-black transition-colors"
          >
            Github
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-2xl text-gray-600 hover:text-black transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};