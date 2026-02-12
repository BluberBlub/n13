export interface Brand {
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    categories: string[];
    image?: ImageMetadata;
    featured?: boolean;
}

import happySocksImage from "../assets/images/brands/brand-happy-socks.jpg";
import meyerHosenImage from "../assets/images/brands/brand-meyer.jpg";
import objectImage from "../assets/images/brands/brand-object.jpg";
import bYoungImage from "../assets/images/brands/brand-b-young.jpg";
import blendImage from "../assets/images/brands/brand-blend.jpg";
import desotoImage from "../assets/images/brands/brand-desoto.jpg";
import lindenmannImage from "../assets/images/brands/brand-lindenmann.jpg";
import casualFridayImage from "../assets/images/brands/brand-casual-friday.jpg";
import ppdImage from "../assets/images/brands/brand-ppd.jpg";
import herzmeisterImage from "../assets/images/brands/brand-herzmeister.jpg";
import waeschepflegeImage from "../assets/images/brands/brand-waeschepflege.jpg";
import taschenImage from "../assets/images/brands/brand-taschen.jpg";

import magsImage from "../assets/images/brands/brand-mags.jpg";
import aBeautifulStoryImage from "../assets/images/brands/brand-a-beautiful-story.jpg";
import cereriaMollaImage from "../assets/images/brands/brand-cereria-molla.jpg";
import kknekkiImage from "../assets/images/brands/brand-kknekki-update.webp";
import ammannImage from "../assets/images/brands/brand-ammann.jpg";
import kruutImage from "../assets/images/brands/brand-kruut.jpg";
import hoperyImage from "../assets/images/brands/brand-hopery-update.jpg";
import kunstwerkstattImage from "../assets/images/brands/brand-kunstwerkstatt.jpg";
import rohstoffImage from "../assets/images/brands/brand-rohstoff.jpg";

export const brands: Brand[] = [
    {
        slug: 'happy-socks',
        name: 'Happy Socks',
        shortDescription: 'Bunte Socken für deinen einzigartigen Stil',
        description:
            'Happy Socks – die perfekte Wahl für alle, die Farbe und Freude in ihren Alltag bringen möchten! Happy Socks steht für bunte und fröhliche Socken, die jedem Outfit eine Extraportion Persönlichkeit verleihen. Von lebendigen Mustern und verspielten Motiven bis hin zu klassischen Designs mit einem modernen Twist bieten wir eine vielfältige Auswahl an Socken, die jeden Geschmack und Stil widerspiegeln.',
        categories: ['Socken', 'Strumpfwaren', 'Fashion', 'Lifestyle'],
        image: happySocksImage,
    },
    {
        slug: 'meyer-hosen',
        name: 'Meyer Hosen',
        shortDescription: 'DIE Hose für den Mann. – Absolut FAIR und nachhaltig.',
        description:
            'Bei Meyer Hosen stehen seit Generationen erstklassige Herrenbekleidung im Fokus, die höchsten Ansprüchen gerecht wird. Jedes Kleidungsstück wird mit größter Sorgfalt und Präzision hergestellt, um einen unvergleichlichen Tragekomfort und eine erstklassige Passform zu gewährleisten. Die Verwendung hochwertiger Materialien und die Liebe zum Detail machen Meyer Hosen zur ersten Wahl für Männer, die Qualität und Stil schätzen.',
        categories: ['Hosen/Jeans', 'Fashion', 'Lifestyle', 'Nachhaltigkeit'],
        image: meyerHosenImage,
    },
    {
        slug: 'object',
        name: 'Object',
        shortDescription: 'Cool, edel & skandinavisch.',
        description:
            'Das dänische Modelabel versorgt seit 2003 Trendsetterinnen mit stylischen, aber dennoch zeitlosen Kleidungsstücken. – Cool, verspielt und modebewusst – keine Kompromisse bei der Mode! Object steht für einzigartige Designs, die die Vielseitigkeit und Individualität moderner Frauen unterstreichen.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires', 'Beauty', 'Nachhaltigkeit'],
        image: objectImage,
    },
    {
        name: "B.Young",
        slug: "b-young",
        shortDescription: "Entdecke die Zeitlose Eleganz von B.Young",
        description: "Willkommen in der Welt von B.Young, wo Stil, Qualität",
        categories: ["Accessoires", "Allgemein", "Beauty", "Blusen", "Fashion", "Hosen/Jeans", "Lifestyle"],
        image: bYoungImage,
    },
    {
        name: "Blend",
        slug: "blend",
        shortDescription: "Dänischer Style, der zu dir passt!",
        description: "Du liebst einen lässigen, urbanen Look, der sich perfekt",
        categories: ["Accessoires", "Allgemein", "Fashion", "Hemd", "Hemden", "Hosen/Jeans", "Lifestyle"],
        image: blendImage,
    },
    {
        name: "Desoto",
        slug: "desoto",
        shortDescription: "– Perfektion in Stil, Komfort & Qualität!",
        description: "Desoto wurde 2015 mit einer klaren Vision gegründet:",
        categories: ["Allgemein", "Beauty", "Events", "Fashion", "Hemden", "Lifestyle", "Nachhaltigkeit"],
        image: desotoImage,
    },
    {
        name: "Lindenmann",
        slug: "lindenmann",
        shortDescription: "Hochwertige Accessoires für deinen perfekten Look!",
        description: "Du suchst einen stilvollen, langlebigen Gürtel, der perfekt sitzt",
        categories: ["Accessoires", "Allgemein", "Fashion", "Gürtel", "Lifestyle"],
        image: lindenmannImage,
    },
    {
        name: "Vila",
        slug: "vila",
        shortDescription: "Entdecke die unvergleichliche Eleganz von VILA",
        description: "Deine erste Wahl für zeitlose Mode und zeitgenössischen Stil",
        categories: ["Accessoires", "Allgemein", "Beauty", "Blusen", "Fashion", "Hosen/Jeans", "Lifestyle"],
        image: objectImage, // Placeholder until image is fixed
    },
    {
        name: "Casual Friday",
        slug: "casual-friday",
        shortDescription: "Der perfekte Look, nicht nur für Freitage…",
        description: "Du suchst nach lässiger, stylischer Mode, die perfekt",
        categories: ["Accessoires", "Allgemein", "Beauty", "Fashion", "Hemd", "Hemden", "Hosen/Jeans", "Lifestyle", "Nachhaltigkeit", "Socken"],
        image: casualFridayImage,
    },
    {
        name: "KKNEKKI",
        slug: "kknekki",
        shortDescription: "Der Original Haargummi – eines der besten der Welt",
        description: "Der Original Haargummi – eines der besten der Welt",
        categories: ["Accessoires", "Allgemein", "Fashion"],
        image: kknekkiImage,
    },
    {
        name: "Hopery",
        slug: "hopery",
        shortDescription: "Es geht auch ohne Palmöl!",
        description: "Es geht auch ohne Palmöl!",
        categories: ["Allgemein", "Beauty", "Kosmetik"],
        image: hoperyImage,
    },
    {
        name: "Taschen, Geldbeutel & Mehr",
        slug: "taschen",
        shortDescription: "Vielfalt für deinen Stil Qualität, Stil",
        description: "Willkommen in der aufregenden Welt der Taschen und Accessoires! Vielfalt für deinen Stil Qualität, Stil",
        categories: ["Accessoires", "Allgemein", "Fashion", "Lifestyle", "Taschen", "Taschengurt"],
        image: taschenImage,
    },
    {
        name: "Kunstwerkstatt",
        slug: "kunstwerkstatt",
        shortDescription: "Handgefertigte Schmuckstücke von Walli Rainer",
        description: "…handgefertigte Schmuckstücke von Walli Rainer. Walli Rainer glaubt fest daran, dass wahre Schönheit in der Individualität liegt und dass Schmuck mehr als nur ein Accessoire ist, sondern ein Ausdruck der Einzigartigkeit einer Person. In ihrer liebevoll gestalteten Kunstwerkstatt entstehen handgefertigte Schmuckstücke, bei denen jedes Paar Ohrringe ein Unikat ist. Ihre grenzenlose Liebe zum Kunsthandwerk und ihre Hingabe an jedes Detail spiegeln sich in ihren einzigartigen Kreationen wider, die von der Schönheit der Natur und kreativen Mustern inspiriert sind. Wir laden dich herzlich ein, die Welt",
        categories: ["Accessoires", "Allgemein", "Beauty", "Handgemacht", "Schmuck"],
        image: kunstwerkstattImage,
    },
    {
        name: "Cereria Molla",
        slug: "cereria-molla",
        shortDescription: "Zeitlose Eleganz von Duftkerzen – Tradition seit 1899",
        description: "Entdecke die zeitlose Eleganz von Cereria Molla Duftkerzen: Eine Tradition seit 1899 Seit dem Jahr",
        categories: ["Geschenke", "Kerzen", "Lifestyle", "Nachhaltigkeit", "Pflege"],
        image: cereriaMollaImage,
    },
    {
        name: "Servietten",
        slug: "servietten",
        shortDescription: "Stilvoll, Nachhaltig und Vielseitig",
        description: "PPD Servietten: Stilvoll, Nachhaltig und Vielseitig Willkommen in unserer Servietten-Welt: – Deine Experten für stilvolle",
        categories: ["Allgemein", "Essen", "Geschenke", "Küche", "Lifestyle"],
        image: ppdImage,
    },
    {
        name: "Losboxen",
        slug: "losboxen",
        shortDescription: "Entdecke die Magie der Losboxen",
        description: "Entdecke die Magie der Losboxen von Herzmeister! Liebe Freunde der Spannung und des Glücks, wir",
        categories: ["Allgemein", "Geschenke", "Lifestyle"],
        image: herzmeisterImage,
    },
    {
        name: "Ammann",
        slug: "ammann",
        shortDescription: "Hochwertige Unterwäsche für höchsten Tragekomfort",
        description: "Entdecke Ammann: Hochwertige Unterwäsche für höchsten Tragekomfort Wäsche ist Vertrauenssache. Kaum ein anderes Kleidungsstück muss",
        categories: ["Allgemein", "Fashion", "Lifestyle", "Nachhaltigkeit", "Unterwäsche"],
        image: ammannImage,
    },
    {
        name: "Kruut",
        slug: "kruut",
        shortDescription: "Hol dir die Natur nach Hause.",
        description: "Hol dir die Natur nach Hause. Kruut steht für einen Schritt zurück zur nährstoffreichen Natur und",
        categories: ["Allgemein", "Gesundheit", "Lifestyle", "Nachhaltigkeit"],
        image: kruutImage,
    },
    {
        name: "Wäschepflege",
        slug: "waeschepflege",
        shortDescription: "Deine Bekleidung hat Anspruch auf die beste Pflege!",
        description: "Deine Bekleidung hat Anspruch auf die beste Pflege! 100 % VEGAN Gute Pflege trägt dazu",
        categories: ["Allgemein", "Fashion", "Hund", "Lifestyle", "Nachhaltigkeit", "Pflege", "Vegan"],
        image: waeschepflegeImage,
    },
    {
        name: "MAGS",
        slug: "mags",
        shortDescription: "Die coolsten Lifestyle-Produkte, die dein Leben bunter machen!",
        description: "Lust auf ausgefallene, witzige und geniale Lifestyle-Artikel, die deinen Alltag aufpeppen? Dann bist du bei uns genau richtig! Wir haben für dich die besten Produkte von MAGS im Sortiment – die Marke, die für kreative Geschenkideen, lustige Gadgets und jede Menge Spaß steht!",
        categories: ["Lifestyle", "Geschenke", "Witziges", "Accessoires"],
        image: magsImage,
    },
    {
        name: "A Beautiful Story",
        slug: "a-beautiful-story",
        shortDescription: "Handgemachter Schmuck mit einer Botschaft",
        description: "A Beautiful Story – eine Marke, die nicht nur schöne Accessoires herstellt, sondern auch eine inspirierende Botschaft vermittelt. Jedes Stück ist ein Unikat und erzählt seine eigene Geschichte. Die Philosophie von A Beautiful Story ist einfach und doch tiefgründig: Sie glauben daran, dass jeder Mensch eine einzigartige Geschichte zu erzählen hat.",
        categories: ["Schmuck", "Accessoires", "Geschenke", "Gesundheit", "Lifestyle", "Nachhaltigkeit", "Fashion", "Beauty"],
        image: aBeautifulStoryImage,
    },
    {
        name: "Rohstoff",
        slug: "rohstoff",
        shortDescription: "Bio-Säfte – GANZE FRÜCHTE",
        description: "Wenig ist wertvoller, als Früchte frisch vom Baum und Wurzeln unmittelbar aus dem Boden. Rohstoff verarbeitet darum ausschließlich ganze und biologisch angebaute Rohstoffe. Äpfel, Zitronen, Orangen, Ingwer und Kurkuma werden im Ganzen verarbeitet, kalt gepresst, vermengt und direkt abgefüllt.",
        categories: ["Gesundheit", "Vegan", "Nachhaltigkeit", "Lifestyle", "Beauty"],
        image: rohstoffImage,
    },
];
