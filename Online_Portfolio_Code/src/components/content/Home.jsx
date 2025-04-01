import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen p-8">
      <RevealOnScroll>
        {/* Background */}
        <div className="absolute top-1/5 right-0 w-100 h-100 sm:w-125 sm:h-125 md:w-175 md:h-175 bg-accent-bg rounded-full blur-2xl -z-10"></div>

        <div className="max-w-6xl mx-auto text-left z-10">
          {/* Logo and name container */}
          <div className="left-0 mb-6 flex">
            {/* Logo */}
            <img
              src={"/PL-logo-l.svg"}
              alt="PL-Logo"
              className="h-60 md:h-80 mb-20 dark:invert"
            />

            {/* Name */}
            <div className="h-55 md:h-82 grid grid-cols-2">
              {/* Phoebe */}
              <div className="grid grid-rows-6">
                {["P", "H", "O", "E", "B", "E"].map((letter, index) => (
                  <div key={index} className="ml-4">
                    <p className="font-mono text-4xl md:text-5xl font-extrablack">
                      {letter}
                    </p>
                  </div>
                ))}
              </div>
              {/* Lee */}
              <div className="h-30 md:h-41 grid grid-rows-3">
                {["L", "E", "E"].map((letter, index) => (
                  <div key={index} className="ml-2">
                    <p className="font-mono text-4xl md:text-5xl font-extrablack">
                      {letter}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-3xl md:text-4xl mb-4">Hello!</h1>

          {/* Paragraph */}
          <p className="text-text-2 text-lg mb-8 max-w-2xl">
            I’m Phoebe, a first-year Computer Science student with a passion for
            art and design, dedicated to crafting intuitive and visually
            compelling digital experiences. As I delve into various disciplines
            within computer science, I discover that every challenge presents an
            opportunity to apply creativity, enabling the development of
            innovative and unconventional solutions to complex problems. When
            I’m not at my desk, you’ll find me tending to my ever-growing
            collection of houseplants or out on the trails, hiking and enjoying
            nature.
          </p>

          {/* Divider */}
          <hr className="w-full mb-10 -z-20 relative" />
        </div>
      </RevealOnScroll>
    </section>
  );
};