import Image from "next/image";

type HeroVideoProps = {
  title: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
  whatsappHref?: string;
  posterSrc?: string;
  videoSrc?: string;
  badge?: string;
  trustNote?: string;
};

export default function HeroVideo({
  title,
  subtitle,
  ctaHref = "#contact",
  ctaLabel = "Book Your VIP Transfer",
  whatsappHref = "https://wa.me/905076312304",
  posterSrc = "/images/hero-poster.jpg",
  videoSrc = "/videos/hero.mp4",
  badge = "Dalaman Airport",
  trustNote,
}: HeroVideoProps) {
  return (
    <section className="hero-wrap bg-ink-900">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 md:hidden">
        <Image src={posterSrc} alt="Dalaman VIP Transfer" fill priority className="object-cover" />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="uppercase tracking-widest text-sand-300/80 text-sm">{badge}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-sand-50 drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sand-200/90 text-lg">{subtitle}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href={ctaHref} className="btn-primary" target="_blank" rel="noreferrer">{ctaLabel}</a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-sand-500 px-5 py-3 text-sand-100 hover:bg-sand-500 hover:text-ink-900 transition"
          >
            WhatsApp
          </a>
        </div>
        {trustNote && trustNote.trim().length > 0 ? (
          <p className="mt-4 max-w-xl mx-auto text-sand-300/70 text-xs">{trustNote}</p>
        ) : null}
      </div>
    </section>
  );
}
