import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-ink-900 border-t border-sand-500/20">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-sand-200/80">© {new Date().getFullYear()} Kaunos VIP Transfer — {t('rights')}</p>
        <div className="md:ml-auto flex items-center gap-3 text-sm">
          <a href="mailto:azad.karatay@outlook.com" className="text-sand-300/90 hover:text-sand-50 transition-colors">Email</a>
          <a href="https://wa.me/905076312304" target="_blank" rel="noreferrer" className="text-sand-300/90 hover:text-sand-50 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}