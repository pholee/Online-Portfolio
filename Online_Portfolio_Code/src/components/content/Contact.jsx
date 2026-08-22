import { useScrollNav } from "../../hooks/useScrollNav";

export const Contact = () => {
    const scrollTo = useScrollNav();
    return (
      <section id="contact" className="border-t border-text-1/10">
        <div
          className="relative h-[500px] md:h-[700px]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >

          <div className="fixed bottom-0 w-full h-[500px] md:h-[700px] overflow-hidden">

            {/* Background */}
            <div className="absolute top-[-10%] left-[8%] w-[min(50vw,520px)] h-[min(50vw,520px)] bg-accent-bg rounded-full blur-[90px] opacity-55 -z-10"></div>

            <div className="relative z-[1] h-full max-w-[var(--container)] mx-auto px-[var(--pad)] py-[var(--contact-pad)] flex flex-col">

              {/* Menu */}
              <div className="inline-flex flex-col w-fit gap-[.8rem]">
                <a
                  href="https://www.linkedin.com/in/pholee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xl md:text-2xl text-text-1 hover:text-accent-text transition-colors"
                >
                  LinkedIn{" "}
                  <span className="inline-block text-accent-text transition-transform group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
                    &#8599;
                  </span>
                </a>
                <a
                  href="https://github.com/pholee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xl md:text-2xl text-text-1 hover:text-accent-text transition-colors"
                >
                  GitHub{" "}
                  <span className="inline-block text-accent-text transition-transform group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
                    &#8599;
                  </span>
                </a>
                <a
                  href="mailto:pholee18@gmail.com"
                  className="group text-xl md:text-2xl text-text-1 hover:text-accent-text transition-colors"
                >
                  Email{" "}
                  <span className="inline-block text-accent-text transition-transform group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
                    &#8599;
                  </span>
                </a>
              </div>

              {/* Footer */}
              <footer className="mt-auto">
              {/* Catchphrase */}
              <h1 className="bottom-0 text-right font-display font-black uppercase leading-[0.94] text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-5">
                Get in
                <br />
                touch
              </h1>

                {/* Divider */}
                <hr className="w-full mb-5" />

                {/* Footer info */}
                <div className="flex justify-between">

                  {/* Location */}
                  <p className="mt-2.5 sm:mt-1.5 text-xs sm:text-sm md:text-lg">London, UK</p>

                  {/* Last update and logo container*/}
                  <div className="flex items-center gap-4 md:gap-8">

                    {/* Last Update */}
                    <div className="grid grid-rows-2 gap-2">
                      <p className="text-xs sm:text-sm md:text-lg">
                        Last updated in February 2026
                      </p>
                      <p className="text-xs sm:text-xs md:text-sm text-right">
                        by Phoebe Lee
                      </p>
                    </div>

                    {/* Logo */}
                    <a onClick={() => scrollTo("#home")} className="cursor-pointer" aria-label="Back to top">
                      <img
                        src={"/Online-Portfolio/PL-logo-l.svg"}
                        alt="PL-Logo"
                        className="h-15 md:h-20 flex-shrink-0 logo-invert"
                      />
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  };
