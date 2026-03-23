/**
 * Warm paper texture + subtle geometry — distinct from the old mesh-blob look.
 */
export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#ebe8e3]" />
      {/* Diagonal stripe wash */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 40px,
            rgba(12, 12, 13, 0.02) 40px,
            rgba(12, 12, 13, 0.02) 41px
          )`,
        }}
        aria-hidden
      />
      {/* Soft amber spotlight */}
      <div
        className="absolute -right-[20%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-amber-400/12 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -left-[10%] bottom-0 h-[40vh] w-[40vh] rounded-full bg-zinc-900/5 blur-[100px]"
        aria-hidden
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle,rgba(12,12,13,0.06)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,black,transparent)]"
        aria-hidden
      />
      <div className="noise-overlay pointer-events-none absolute inset-0 mix-blend-overlay" aria-hidden />
    </div>
  );
}
