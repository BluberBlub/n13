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
import vilaImage from "../assets/images/brands/brand-vila.jpg";
import casualFridayImage from "../assets/images/brands/brand-casual-friday.jpg";
import magsImage from "../assets/images/brands/brand-mags.jpg";
import aBeautifulStoryImage from "../assets/images/brands/brand-a-beautiful-story.jpg";
import cereriaMollaImage from "../assets/images/brands/brand-cereria-molla.jpg";
import kknekkiImage from "../assets/images/brands/brand-kknekki.jpg";
import ammannImage from "../assets/images/brands/brand-ammann.jpg";
import kruutImage from "../assets/images/brands/brand-kruut.jpg";
import hoperyImage from "../assets/images/brands/brand-hopery.webp";
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
        slug: 'b-young',
        name: 'B.Young',
        shortDescription: 'Entdecke die Zeitlose Eleganz von B.Young',
        description:
            'Willkommen in der Welt von B.Young, wo Stil, Qualität und Komfort sich vereinen, um ein unvergessliches Modeerlebnis zu schaffen. Die Kollektionen bieten frische, feminine Styles, die Qualität und Preisbewusstsein perfekt vereinen. Von Business bis Casual – B.Young hat den passenden Look.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires', 'Beauty'],
        image: bYoungImage,
    },
    {
        slug: 'blend',
        name: 'Blend',
        shortDescription: 'Dänischer Style, der zu dir passt!',
        description:
            'Du liebst einen lässigen, urbanen Look, der sich perfekt anfühlt und in jeder Situation überzeugt? Dann schnapp dir die neuesten Styles von Blend – der dänischen Marke für moderne Männermode mit Charakter! Cool, maskulin und unkompliziert – genau wie du. Blend setzt nicht nur auf Style, sondern auch auf nachhaltige Materialien und faire Produktion.',
        categories: ['Fashion', 'Lifestyle', 'Hemden', 'Hosen/Jeans', 'Accessoires'],
        image: blendImage,
    },
    {
        slug: 'desoto',
        name: 'Desoto',
        shortDescription: 'Perfektion in Stil, Komfort & Qualität!',
        description:
            'Desoto wurde 2015 mit einer klaren Vision gegründet: Moderne, bügelfreie Hemden mit perfektem Sitz und maximaler Bewegungsfreiheit. Das Unternehmen setzt auf feinste 100 % Baumwolle, verarbeitet in einem innovativen Jersey-Stoff, der sich deinem Körper anpasst und dir ein unvergleichlich angenehmes Tragegefühl bietet.',
        categories: ['Hemden', 'Fashion', 'Lifestyle', 'Nachhaltigkeit', 'Beauty', 'Events'],
        image: desotoImage,
    },
    {
        name: "Lindenmann",
        slug: "lindenmann",
        shortDescription: "Hochwertige Accessoires für deinen perfekten Look!",
        description:
            "Du suchst einen stilvollen, langlebigen Gürtel, der perfekt sitzt und dein Outfit abrundet? Dann bist du bei uns genau richtig! In unserem Store findest du die hochwertigen LINDENMANN-Gürtel – gefertigt aus feinstem Leder, mit präziser Verarbeitung und zeitlosem Design.",
        categories: ["Accessoires", "Gürtel", "Fashion", "Lifestyle"],
        image: lindenmannImage,
    },
    {
        slug: 'vila',
        name: 'Vila',
        shortDescription: 'Entdecke die unvergleichliche Eleganz von VILA',
        description:
            'Entdecke die Fashionwelt von VILA und erlebe angesagte, feminine Kleidung, die deinen individuellen Look unterstreicht und dich in jedem Moment strahlen lässt. Tauche ein in die Welt der unvergleichlichen Eleganz, wo zeitlose Stilrichtungen auf moderne Trends treffen. Die Mode von VILA steht nicht nur für Stil und Eleganz, sondern auch für Verantwortung und Nachhaltigkeit.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires', 'Nachhaltigkeit', 'Beauty'],
        image: vilaImage,
    },
    {
        slug: 'casual-friday',
        name: 'Casual Friday',
        shortDescription: 'Der perfekte Look, nicht nur für Freitage…',
        description:
            'Du suchst nach lässiger, stylischer Mode, die perfekt für deinen Casual Friday im Büro ist? Dann bist du bei Casual Friday genau richtig! Das Label der DK Company bietet dir moderne, komfortable Kleidung, die sowohl im Büro als auch in der Freizeit eine gute Figur macht.',
        categories: ['Fashion', 'Lifestyle', 'Herrenmode', 'Hemden', 'Hosen/Jeans', 'Accessoires', 'Nachhaltigkeit', 'Socken', 'Beauty'],
        image: casualFridayImage,
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
        name: "Cereria Molla",
        slug: "cereria-molla",
        shortDescription: "Zeitlose Eleganz von Duftkerzen – Tradition seit 1899",
        description: "Seit dem Jahr 1899 erzählt Cereria Molla die Geschichte von Luxus und Raffinesse durch ihre handgegossenen Duftkerzen. Diese exquisiten Kerzen, hergestellt in einer kleinen Kerzenfabrik in Valencia, Spanien, haben eine lange Tradition und sind bekannt für ihre Qualität und ihren unwiderstehlichen Duft.",
        categories: ["Kerzen", "Geschenke", "Lifestyle", "Nachhaltigkeit", "Pflege"],
        image: cereriaMollaImage,
    },
    {
        name: "KKNEKKI",
        slug: "kknekki",
        shortDescription: "Der Original Haargummi – eines der besten der Welt",
        description: "Der Original Haargummi von „Kknekki“ gilt als eines der besten Haargummis der Welt. Durch die einzigartige Webtechnik sind sie für jeden Haartyp äußerst weich und verblassen, fransen oder erschlaffen nicht, selbst wenn sie in Salzwasser getragen werden.",
        categories: ["Accessoires", "Haare", "Fashion", "Lifestyle", "Nachhaltigkeit"],
        image: kknekkiImage,
    },
    {
        name: "Ammann",
        slug: "ammann",
        shortDescription: "Hochwertige Unterwäsche für höchsten Tragekomfort",
        description: "Wäsche ist Vertrauenssache. Kaum ein anderes Kleidungsstück muss so hohen Ansprüchen genügen wie Wäsche. Die Qualität der Produkte ist deshalb eine besondere Verpflichtung für die Firma Ammann. Ammann steht seit Jahrzehnten für Tradition und Handwerkskunst.",
        categories: ["Unterwäsche", "Fashion", "Lifestyle", "Nachhaltigkeit"],
        image: ammannImage,
    },
    {
        name: "Kruut",
        slug: "kruut",
        shortDescription: "Hol dir die Natur nach Hause.",
        description: "Kruut steht für einen Schritt zurück zur nährstoffreichen Natur und dem Wissen, wie man diese nutzt. Hergestellt mit Werten, die heute oft zu kurz kommen: Zeit & Hingabe. Alle Produkte von „KRUUT“ bestehen aus 100% heimischen Bio-Zutaten. Kruut möchte Wildkräuter zurück in unseren Alltag bringen.",
        categories: ["Gesundheit", "Lifestyle", "Nachhaltigkeit", "Beauty", "Kosmetik"],
        image: kruutImage,
    },
    {
        name: "Hopery",
        slug: "hopery",
        shortDescription: "Es geht auch ohne Palmöl!",
        description: "Hopery fertigt palmölfreie Naturkosmetik aus Überzeugung. Alle HOPERY Produkte werden traditionell und liebevoll in Deutschland gefertigt. Die natürlichen, 100 % veganen Rezepturen, stammen aus der über 30-jährigen Familientradition von Hopery.",
        categories: ["Pflege", "Vegan", "Nachhaltigkeit", "Lifestyle", "Fashion", "Hund"],
        image: hoperyImage,
    },
    {
        name: "Kunstwerkstatt",
        slug: "kunstwerkstatt",
        shortDescription: "Handgefertigte Schmuckstücke von Walli Rainer",
        description: "Walli Rainer glaubt fest daran, dass wahre Schönheit in der Individualität liegt und dass Schmuck mehr als nur ein Accessoire ist, sondern ein Ausdruck der Einzigartigkeit einer Person. In ihrer liebevoll gestalteten Kunstwerkstatt entstehen handgefertigte Schmuckstücke, bei denen jedes Paar Ohrringe ein Unikat ist.",
        categories: ["Schmuck", "Handgemacht", "Accessoires", "Beauty"],
        image: kunstwerkstattImage,
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
