export const Contact = () => {
    return (
      <section id="contact" className="">
        <div
          className="relative h-[500px] md:h-[700px]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >

          <div className="fixed bottom-0 w-full h-[500px] md:h-[700px] p-8 overflow-hidden">

            {/* Background */}
            <div className="absolute top-1/8 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 sm:w-200 sm:h-200 md:w-250 md:h-250 bg-accent-bg rounded-full blur-2xl -z-10"></div>

            <div className="h-full max-w-6xl mx-auto flex flex-col z-10">

              {/* Menu */}
              <div className="cursor-pointer inline-flex flex-col w-fit space-y-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/pholee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-text-2 hover:text-text-1 transition-colors"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/pholee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl text-text-2 hover:text-text-1 transition-colors"
                >
                  Github
                </a>
                <a
                  href="mailto:pholee18@gmail.com"
                  className="text-xl md:text-2xl text-text-2 hover:text-text-1 transition-colors"
                >
                  Email
                </a>
              </div>

              {/* Footer */}
              <footer className="mt-auto">
              {/* Catchphrase */}
              <h1 className="bottom-0 text-right text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semi-bold mb-6">
                Get in touch
              </h1>

                {/* Divider */}
                <hr className="w-full mb-8" />

                {/* Footer info */}
                <div className="flex justify-between items-center">

                  {/* Location */}
                  <p className="text-sm md:text-lg">London, UK</p>

                  {/* Last update and logo container*/}
                  <div className="flex items-center gap-4 md:gap-8">

                    {/* Last Update */}
                    <div className="grid grid-rows-2 gap-2">
                      <p className="text-sm md:text-lg">
                        Last updated in April 2025
                      </p>
                      <p className="text-xs md:text-sm text-right">
                        by Phoebe Lee
                      </p>
                    </div>

                    {/* Logo */}
                    <img
                      src={"./Online-Portfolio/PL-logo-l.svg"}
                      alt="PL-Logo"
                      className="h-15 md:h-20 flex-shrink-0 dark:invert"
                    />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  };
  