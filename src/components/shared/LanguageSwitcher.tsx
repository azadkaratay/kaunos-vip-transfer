'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

type LocaleOpt = { code: string; label: string };
const LOCALES: LocaleOpt[] = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' }
];

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (locale: string) => {
    const rest = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${locale}${rest}`);
    setOpen(false);
  };

  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-2xl border border-white/10 px-3 py-2 text-sand-50/90 hover:text-sand-50 hover:bg-white/5 text-sm"
      >
        {current.label}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-40 rounded-2xl border border-sand-500/20 bg-ink-900/95 backdrop-blur-md shadow-xl p-2 text-sm"
        >
          {LOCALES.map((loc) => (
            <li key={loc.code}>
              <button
                role="option"
                aria-selected={loc.code === currentLocale}
                onClick={() => switchLocale(loc.code)}
                className={
                  loc.code === currentLocale
                    ? 'w-full text-left px-3 py-2 rounded-lg bg-white/10 text-sand-50'
                    : 'w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-sand-200'
                }
              >
                {loc.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}