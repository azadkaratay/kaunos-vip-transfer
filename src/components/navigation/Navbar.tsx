'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentLocale }: { currentLocale?: string }) {
  const tNav = useTranslations('nav');
  const tHero = useTranslations('hero');
  const tMenu = useTranslations('menu');
  const localeFromHook = useLocale();
  const locale = currentLocale ?? localeFromHook;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = scrolled
    ? 'fixed top-0 inset-x-0 z-40 border-b border-sand-500/20 bg-ink-900/70 backdrop-blur-md shadow-lg transition-colors'
    : 'fixed top-0 inset-x-0 z-40 border-b border-transparent bg-transparent backdrop-blur-0 transition-colors';

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-lg md:text-xl font-semibold text-sand-50 tracking-wide">
          Kaunos VIP Transfer
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="text-sand-300/80 hover:text-sand-50 transition-colors">
            {tNav('about')}
          </Link>
          <Link href="#services" className="text-sand-300/80 hover:text-sand-50 transition-colors">
            {tNav('services')}
          </Link>
          <Link href="#contact" className="text-sand-300/80 hover:text-sand-50 transition-colors">
            {tNav('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <a href="https://forms.gle/aeHYKkVkxU8m6bdEA" className="btn-primary hidden md:inline-flex" target="_blank" rel="noreferrer">
            {tHero('cta')}
          </a>
          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="md:hidden rounded-2xl border border-white/10 p-2 text-sand-50/90 hover:text-sand-50 hover:bg-white/5"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-72 bg-ink-900/90 backdrop-blur-md border-l border-sand-500/20 shadow-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sand-50 font-semibold">{tMenu('title')}</span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-2xl p-2 hover:bg-white/5">
                <X className="h-5 w-5 text-sand-50" />
              </button>
            </div>
            <Link href={`/${locale}`} className="text-sand-200 hover:text-sand-50" onClick={() => setMobileOpen(false)}>
              {tNav('home')}
            </Link>
            <Link href="#about" className="text-sand-200 hover:text-sand-50" onClick={() => setMobileOpen(false)}>
              {tNav('about')}
            </Link>
            <Link href="#services" className="text-sand-200 hover:text-sand-50" onClick={() => setMobileOpen(false)}>
              {tNav('services')}
            </Link>
            <a href="https://forms.gle/aeHYKkVkxU8m6bdEA" target="_blank" rel="noreferrer" className="text-sand-200 hover:text-sand-50" onClick={() => setMobileOpen(false)}>
              {tNav('contact')}
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}