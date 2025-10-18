import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr', 'ru', 'de', 'es'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(tr|ru|en|de|es)/:path*']
};