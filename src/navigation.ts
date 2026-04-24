import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Use cases',
      href: getPermalink('/#use-cases'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Get the app',
      href: 'https://app.knowledgemonkey.com',
      target: '_blank',
      icon: 'tabler:arrow-up-right',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Use cases', href: getPermalink('/#use-cases') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Roadmap', href: '#' },
        { text: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Platforms',
      links: [
        { text: 'Web app', href: 'https://app.knowledgemonkey.com' },
        { text: 'iOS', href: '#' },
        { text: 'Android', href: '#' },
        { text: 'ChatGPT integration', href: '#' },
        { text: 'Bring your own LLM', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help center', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'Status', href: '#' },
        { text: 'Export your data', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-amber-500 rounded-md mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right inline-flex items-center justify-center text-white text-xs">KM</span>
    Made with curiosity by the <a class="text-amber-600 underline dark:text-amber-400" href="/">KnowledgeMonkey</a> team · Free forever core.
  `,
};
