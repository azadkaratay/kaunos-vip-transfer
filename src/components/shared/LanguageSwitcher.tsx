'use client';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    const rest = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${locale}${rest}`);
  };

  return (
    <div className="flex gap-2 text-sm">
      {['en', 'tr', 'ru'].map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={
            loc === currentLocale
              ? 'text-sand-500'
              : 'text-sand-300/70 hover:text-sand-50 transition'
          }
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}