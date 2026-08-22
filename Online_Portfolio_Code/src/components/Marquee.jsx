const LINE =
  "I'm Phoebe, a second-year Computer Science student who builds interfaces as carefully as the systems underneath them";

export const Marquee = () => {
  return (
    <div className="group overflow-hidden border-y border-text-1/10 py-[1.1rem]" aria-hidden="true">
      <div className="flex w-max font-body text-sm sm:text-base text-text-2 animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((i) => (
          <span key={i} className="flex items-center shrink-0">
            {LINE}
            <i className="not-italic inline-block w-3 h-3 rounded-full bg-accent-text mx-3 shrink-0"></i>
          </span>
        ))}
      </div>
    </div>
  );
};
