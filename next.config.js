/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'en'],
    localeDetection: false,
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com"
    domains: [
      {
        domain: 'usa.mic.com',
        defaultLocale: 'en-US',
        http: true,
      },
      {
        domain: 'canada.mic.com',
        defaultLocale: 'en',
        locales: ['fr'],
        http: true,
      },
    ],
  },
}
