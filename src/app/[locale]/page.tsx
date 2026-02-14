'use client'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/motion';
import HeroVideo from '@/components/sections/HeroVideo';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
// import ContactForm from '@/components/shared/ContactForm';

export default function HomePage() {
  const tHero = useTranslations('hero');
  const tContact = useTranslations('contact');
  return (
    <main className="flex flex-col">
      <HeroVideo
        title={tHero('title')}
        subtitle={tHero('subtitle')}
        ctaLabel={tHero('cta')}
        ctaHref="https://forms.gle/aeHYKkVkxU8m6bdEA"
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/hero-poster.jpg"
        badge={tHero('badge')}
        trustNote={tHero('trust_note')}
      />

      <About />
      <Services />

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-ink-900 to-ink-800 py-20">
        <div className="container-soft">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleIn}
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Google Form Wrapper */}
            <div className="bg-gradient-to-b from-ink-900 to-ink-800 border border-sand-500/30 backdrop-blur-md shadow-xl rounded-2xl p-4 md:p-6">
              {/* Outer scroller keeps embed size on mobile */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl font-semibold mb-2 md:mb-4 text-sand-50">{tContact('title')}</h2>
                <p className="text-sand-200/80 text-sm">{tContact('desc')}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://forms.gle/aeHYKkVkxU8m6bdEA"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    {tContact('actions.booking')}
                  </a>
                  <a
                    href="https://wa.me/905076312304"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 px-4 py-2 text-sand-50/90 hover:text-sand-50 hover:bg-white/5"
                  >
                    {tContact('actions.whatsapp')}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="card p-0 bg-ink-900/40 border border-sand-500/20 overflow-hidden">
              <iframe
                title="Google Maps - Dalaman Airport"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.689343505582!2d28.78724551538379!3d36.71800177996171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf6efc7f64d7e3%3A0x84e5b66b74fd9da7!2sDalaman%20Airport!5e0!3m2!1sen!2str!4v1616774800000!5m2!1sen!2str"
                width="100%"
                height="360"
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
