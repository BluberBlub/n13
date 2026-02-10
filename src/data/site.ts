export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage?: string;
    company: {
        legalName: string;
        address: string;
        zip: string;
        city: string;
        phone: string;
        mobile: string;
        email: string;
        website: string;
        management: string;
    };
    openingHours: {
        weekdays: string;
        saturday: string;
    };
    social: {
        instagram: string;
    };
    nav: { label: string; href: string }[];
    footerNav: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
    name: 'N13',
    description:
        'Wir, Natalie & Nicola Endres, freuen uns Dich zusammen mit unserem kleinen Team in unserer facettenreichen Mode & Lifestyle Welt begrüßen zu dürfen.',
    url: 'https://www.n13.store',
    company: {
        legalName: 'N13 GmbH & Co. KG',
        address: 'Marktplatz 10',
        zip: '88239',
        city: 'Wangen im Allgäu',
        phone: '+49 7522 7721081',
        mobile: '+49 176 38809889',
        email: 'office@n13.store',
        website: 'www.n13.store',
        management: 'Natalie Endres',
    },
    openingHours: {
        weekdays: 'Montag bis Freitag von 10:00 – 18:00 Uhr',
        saturday: 'Samstag von 10:00 – 15:00 Uhr',
    },
    social: {
        instagram: 'https://www.instagram.com/n13store/',
    },
    nav: [
        { label: 'Home', href: '/' },
        { label: 'Unsere Brands', href: '/modewelt' },
        { label: 'Das sind wir', href: '/das-sind-wir' },
        { label: 'Kontakt', href: '/kontakt' },
    ],
    footerNav: [
        { label: 'Kontakt', href: '/kontakt' },
        { label: 'Datenschutz', href: '/datenschutzerklaerung' },
        { label: 'Impressum', href: '/impressum' },
    ],
};
