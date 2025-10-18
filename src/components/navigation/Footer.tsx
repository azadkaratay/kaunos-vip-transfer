import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-ink-700/50">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Kaunos VIP Transfer — {t('rights')}</p>
        <div className="md:ml-auto flex items-center gap-3 text-sm">
          <a href="mailto:azad.karatay@outlook.com" className="opacity-80 hover:opacity-100">Email</a>
          <a href="https://wa.me/905076312304" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}