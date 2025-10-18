import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locales = ['en', 'tr', 'ru'] as const;
  type Locale = typeof locales[number];

  let locale = (await requestLocale) as Locale | undefined;
  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default
  };
});