import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-left z-10 px-4">
          {/* Logo */}
          <div className="max-w-5xl mb-6 bg-blue-300">
            <img src={"/PL-logo.svg"} alt="PL-Logo" className="w-60 h-60" />
          </div>

          {/* Heading */}
          <hi className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 leading-right">
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
