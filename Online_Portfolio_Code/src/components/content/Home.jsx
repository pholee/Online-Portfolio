import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen p-8">
      <RevealOnScroll>
        {/* Background */}
        <div className="absolute top-1/3 right-1/16 w-150 h-150 bg-blue-200 rounded-full blur-2xl opacity-700 -z-10"></div>

        <div className="max-w-6xl mx-auto text-left z-10">
          {/* Logo and name container */}
          <div className="left-0 mb-6 flex">
            {/* Logo*/}
            <img
              src={"/PL-logo.svg"}
              alt="PL-Logo"
              className="h-60 md:h-80 mb-20"
            />

            {/* Name */}
            <div className="h-60 md:h-85 grid grid-cols-2">
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
              <div className="h-30 md:h-42.5 grid grid-rows-3">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm Phoebe
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">
            I’m Phoebe, a Computer Science student currently studying at City St
            George’s, University of London. The quick brown fox jumps over the
            lazy hare. The quick brown fox jumps over hte lazy hare. The quick
            brown fox jumps over the lazy hare. The quick brown fox jumps over
            the lazy hare. The quick brown fox jumps over the lazy hare. The
            quick brown fox jumps over hte lazy hare. The quick brown fox jumps
            over the lazy hare. The quick brown fox jumps over the lazy hare.
          </p>

          {/* Divider */}
          <hr className="w-full border-black mb-2" />
        </div>
      </RevealOnScroll>
    </section>
  );
};
