import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-left relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto text-left z-10 px-4">
          {/* Logo */}
          <img src="/PL-logo.svg" alt="PL-Logo" className="w-60 h-60 mb-4"></img>

          <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 leading-right">
            Hi, I'm Phoebe
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m Phoebe, a Computer Science student currently studying at City St
            George’s, University of London. The quick brown fox jumps over the
            lazy hare. The quick brown fox jumps over hte lazy hare. The quick
            brown fox jumps over the lazy hare. The quick brown fox jumps over
            the lazy hare. The quick brown fox jumps over the lazy hare. The
            quick brown fox jumps over hte lazy hare. The quick brown fox jumps
            over the lazy hare. The quick brown fox jumps over the lazy hare.
          </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
