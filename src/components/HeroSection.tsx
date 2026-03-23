export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502175353174-a7a70e73b4c3?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Justin&apos;s Guide to Seattle
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
          I&apos;ve lived in Seattle for over a decade and these are the spots I
          send every visitor to. Just the restaurants I actually eat at, the
          views that never get old, and the things I&apos;d do if I had a free
          Saturday. I hope you find it helpful.
        </p>
        <div className="mt-8 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
