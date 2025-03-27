export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 text-center">
          Get In Touch
        </h2>

        <div className="cursor-pointer flex flex-col space-y-4 items-center">
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