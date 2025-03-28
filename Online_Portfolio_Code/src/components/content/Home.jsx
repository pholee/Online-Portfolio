import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-8"
    >
      <RevealOnScroll>
        <div className="max-w-6xl text-left z-10">

          {/* Logo and name container */}
          <div className="left-0 mb-6 flex">
            
            {/* Logo*/}
            <img
              src={"/PL-logo.svg"}
              alt="PL-Logo"
              className="h-60 md:h-70 mb-20"
            />

            {/* Name */}
            <div className="h-60 md:h-70 grid grid-cols-2">
              {/* Phoebe */}
              <div className="grid grid-rows-6">
                {["P", "H", "O", "E", "B", "E"].map((letter, index) => (
                  <div key={index} className="ml-4">
                    <p className="text-black text-4xl font-raleway font-bold">
                      {letter}
                    </p>
                  </div>
                ))}
              </div>
              {/* Lee */}
              <div className="h-30 md:h-35 grid grid-rows-3">
                {["L", "E", "E"].map((letter, index) => (
                  <div key={index} className="ml-4">
                    <p className="text-black text-4xl font-raleway font-bold">
                      {letter}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heading */}
          <hi className="text-3xl md:text-5xl font-bold  bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 leading-right">
            Hi, I'm Phoebe
          </hi>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            I’m Phoebe, a Computer Science student currently studying at City St
            George’s, University of London. The quick brown fox jumps over the
            lazy hare. The quick brown fox jumps over hte lazy hare. The quick
            brown fox jumps over the lazy hare. The quick brown fox jumps over
            the lazy hare. The quick brown fox jumps over the lazy hare. The
            quick brown fox jumps over hte lazy hare. The quick brown fox jumps
            over the lazy hare. The quick brown fox jumps over the lazy hare.
          </p>

          <hr className="w-full border-black mb-2" />
        </div>
      </RevealOnScroll>
    </section>
  );
};
