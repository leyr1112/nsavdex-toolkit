import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.nsavdex.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://nsavdex.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.nsavdex.io/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.nsavdex.io/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://nsavdex.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.nsavdex.io/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.nsavdex.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.nsavdex.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/nsavdex",
      },
      {
        label: "Documentation",
        href: "https://docs.nsavdex.io",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@nsavdex-1/s/nsavdex/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.nsavdex.io/help/faq#is-nsavdex-safe-has-nsavdex-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.nsavdex.io/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/nsavdex",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/nsavdex",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/nsavdexIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/nsavdex_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/nsavdexVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/nsavdex_ita",
      },
      {
        label: "русский",
        href: "https://t.me/nsavdex_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/nsavdexturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/nsavdexPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/nsavdexEs",
      },
      {
        label: "日本語",
        href: "https://t.me/nsavdexjp",
      },
      {
        label: "Français",
        href: "https://t.me/nsavdexfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/nsavdexAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/nsavdexWhales",
      },
    ],
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/nsavdex/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/nsavdex",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
