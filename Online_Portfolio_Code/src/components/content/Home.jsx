import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-dvh p-8">
      <RevealOnScroll>
        {/* Background */}
        <div className="absolute top-1/5 right-0 w-100 h-100 sm:w-125 sm:h-125 md:w-175 md:h-175 bg-accent-bg rounded-full blur-2xl -z-10"></div>

        <div className="max-w-6xl mx-auto text-left flex flex-col z-10 min-h-dvh">
          {/* Logo and name container */}
          <div className="relative left-0 mb-20 flex">
            {/* Logo */}
            <img
              src={"/Online-Portfolio/PL-logo-l.svg"}
              alt="PL-Logo"
              className="h-60 md:h-80 dark:invert"
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

          <div className="mt-auto">
            {/* Heading */}
            <h1 className="font-semibold text-3xl md:text-4xl mb-4">Hello!</h1>

            {/* Paragraph */}
            <p className="text-text-2 text-sm sm:text-md sm:text-lg mb-8 max-w-2xl">
              I’m Phoebe, a first-year Computer Science student dedicated to crafting intuitive and visually
              compelling computing systems. As I delve into various disciplines
              within computer science, I discover that every challenge presents an
              opportunity to apply creativity. When I’m not at my desk, you’ll find me tending to my ever-growing
              collection of houseplants or out on the trails, hiking and enjoying
              nature.
            </p>
            
            {/* Divider */}
            <hr className="w-full md:mb-16 -z-20 relative"/>
          </div>  
        </div>
      </RevealOnScroll>
    </section>
  );
};