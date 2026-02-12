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
        description: "Willkommen in der Welt von B.Young, wo Stil, Qualität und Komfort sich vereinen, um ein unvergessliches Modeerlebnis zu schaffen. Als stolzer Verkäufer der renommierten Modemarke B.Young freuen wir uns, dir eine Kollektion vorstellen zu dürfen, die sich durch zeitlose Eleganz und moderne Raffinesse auszeichnet.\n\nUnsere Auswahl an B.Young-Kleidung umfasst eine vielfältige Palette von Stücken, die für jeden Anlass geeignet sind. Von lässigen T-Shirts und Jeans bis hin zu eleganten Kleidern und formellen Blusen – B.Young bietet etwas für jeden Geschmack und jede Gelegenheit.\n\nWas B.Young auszeichnet, ist die unverkennbare Kombination aus hochwertigen Materialien, erstklassiger Verarbeitung und trendbewusstem Design. Jedes Stück ist sorgfältig gestaltet, um sowohl Komfort als auch Stil zu bieten, damit du dich in deiner Kleidung selbstbewusst und wunderschön fühlst.\n\nOb du nach einem perfekten Outfit für die Arbeit, ein entspanntes Wochenende oder einen besonderen Anlass suchst, B.Young hat die Antwort. Unsere Kollektionen spiegeln die neuesten Trends wider und bieten dennoch zeitlose Schönheit, die über die Saison hinaus Bestand hat.",
        categories: ["Accessoires", "Allgemein", "Beauty", "Blusen", "Fashion", "Hosen/Jeans", "Lifestyle"],
        image: bYoungImage,
    },
    {
        name: "Blend",
        slug: "blend",
        shortDescription: "Dänischer Style, der zu dir passt!",
        description: "Du liebst einen lässigen, urbanen Look, der sich perfekt anfühlt und in jeder Situation überzeugt? Dann schnapp dir die neuesten Styles von Blend – der dänischen Marke für moderne Männermode mit Charakter! Cool, maskulin und unkompliziert – genau wie du.\n\nWarum Blend?\n🔥 Skandinavischer Style – Zeitlos, lässig und immer im Trend\n👖 Perfekte Denim-Kollektionen – Hochwertige Jeans mit top Passform\n💯 Angenehmer Tragekomfort – Hochwertige Materialien für ein super Gefühl auf der Haut\n💰 Top Preis-Leistungs-Verhältnis – Starker Look ohne Kompromisse\n\nBlend setzt nicht nur auf Style, sondern auch auf nachhaltige Materialien und faire Produktion. Das Label engagiert sich in sozialen Projekten und sorgt dafür, dass du nicht nur gut aussiehst, sondern dich auch gut fühlst!",
        categories: ["Accessoires", "Allgemein", "Fashion", "Hemd", "Hemden", "Hosen/Jeans", "Lifestyle"],
        image: blendImage,
    },
    {
        name: "Desoto",
        slug: "desoto",
        shortDescription: "Perfektion in Stil, Komfort & Qualität!",
        description: "Desoto wurde 2015 mit einer klaren Vision gegründet: Moderne, bügelfreie Hemden mit perfektem Sitz und maximaler Bewegungsfreiheit. Das Unternehmen setzt auf feinste 100 % Baumwolle, verarbeitet in einem innovativen Jersey-Stoff, der sich deinem Körper anpasst und dir ein unvergleichlich angenehmes Tragegefühl bietet.\n\nNachhaltige & faire Produktion in Europa:\n✔ Stoffherstellung in Deutschland – Hochwertige Jersey-Webung für Elastizität & Komfort\n✔ Veredelung in Österreich – Verfeinerung der Stoffe für Langlebigkeit & Farbbrillanz\n✔ Konfektionierung in Nordmazedonien – Faire Produktion unter strengen Qualitätsstandards\n✔ Öko-Tex zertifiziert – Nachhaltig, hautfreundlich & frei von Schadstoffen\n\nBügelfrei & pflegeleicht, elastischer Stoff für maximale Bewegungsfreiheit, angenehm weich & atmungsaktiv – perfekt für lange Tage. Zeitlose Designs für Business & Freizeit.",
        categories: ["Allgemein", "Beauty", "Events", "Fashion", "Hemden", "Lifestyle", "Nachhaltigkeit"],
        image: desotoImage,
    },
    {
        name: "Lindenmann",
        slug: "lindenmann",
        shortDescription: "Hochwertige Accessoires für deinen perfekten Look!",
        description: "Du suchst einen stilvollen, langlebigen Gürtel, der perfekt sitzt und dein Outfit abrundet? Dann bist du bei uns genau richtig! In unserem Store findest du die hochwertigen LINDENMANN-Gürtel – gefertigt aus feinstem Leder, mit präziser Verarbeitung und zeitlosem Design. Aber das ist noch nicht alles! LINDENMANN steht für stilvolle Accessoires, die deinen Look auf das nächste Level heben – von Hosenträgern bis hin zu edlen Stofftaschentüchern.\n\nWarum Accessoires von LINDENMANN?\n✔ Echtes Leder & höchste Qualität – Rinds- oder Büffelleder für edle, langlebige Gürtel\n✔ Perfekter Sitz für jeden! – Wir passen die Gürtellänge individuell für dich an\n✔ Hosenträger – Der Klassiker neu entdeckt! Stylisch, praktisch und perfekt für jeden Anlass\n✔ Edle Stofftaschentücher – Zeitlos elegant, nachhaltig und immer ein Zeichen von Stil\n✔ Made for You! – Klassische und moderne Designs, die dein Outfit aufwerten\n\nEin guter Gürtel ist mehr als nur ein Accessoire – er sollte perfekt sitzen. Deshalb passen wir deinen LINDENMANN-Gürtel direkt im Store individuell an deine Größe an.",
        categories: ["Accessoires", "Allgemein", "Fashion", "Gürtel", "Lifestyle"],
        image: lindenmannImage,
    },
    {
        name: "Vila",
        slug: "vila",
        shortDescription: "Entdecke die unvergleichliche Eleganz von VILA",
        description: "Deine erste Wahl für zeitlose Mode und zeitgenössischen Stil. Entdecke die Fashionwelt von VILA und erlebe angesagte, feminine Kleidung, die deinen individuellen Look unterstreicht und dich in jedem Moment strahlen lässt.\n\nTauche ein in die Welt der unvergleichlichen Eleganz mit VILA, wo zeitlose Stilrichtungen auf moderne Trends treffen. Unsere umfangreiche Kollektion von Kleidungsstücken und Accessoires ist so vielfältig wie du selbst und bietet alles, was du für deinen perfekten Look benötigst.\n\nEntdecke unsere Auswahl an Kleidern, Blusen, Hosen, Röcken und Jacken, die durch hochwertige Materialien, raffinierte Schnitte und liebevolle Details überzeugen. Die Mode von VILA steht nicht nur für Stil und Eleganz, sondern auch für Verantwortung und Nachhaltigkeit. VILA setzt sich für faire Produktionsbedingungen und umweltfreundliche Materialien ein.",
        categories: ["Accessoires", "Allgemein", "Beauty", "Blusen", "Fashion", "Hosen/Jeans", "Lifestyle"],
        image: objectImage, // Placeholder until image is fixed
    },
    {
        name: "Casual Friday",
        slug: "casual-friday",
        shortDescription: "Der perfekte Look, nicht nur für Freitage…",
        description: "Du suchst nach lässiger, stylischer Mode, die perfekt für deinen Casual Friday im Büro ist? Dann bist du bei Casual Friday genau richtig! Das Label der DK Company bietet dir moderne, komfortable Kleidung, die sowohl im Büro als auch in der Freizeit eine gute Figur macht.\n\nWarum Casual Friday?\n✔ Lässiger Business-Style – Die perfekte Mischung aus entspannt und professionell\n✔ Bequeme Stoffe und perfekte Passform – Komfort für den ganzen Tag, ohne auf Stil zu verzichten\n✔ Vielseitige Kollektionen – Egal ob Hemd, Hose oder Pullover – Casual Friday bietet dir alles für den perfekten Look\n\nUnsere Highlights: Lässige Hemden – kombinierbar mit Jeans oder Chinos für einen entspannten Office-Look. Bequeme Hosen – vom schicken Chino bis zur modernen Jeans, immer der richtige Mix aus Stil und Komfort.",
        categories: ["Accessoires", "Allgemein", "Beauty", "Fashion", "Hemd", "Hemden", "Hosen/Jeans", "Lifestyle", "Nachhaltigkeit", "Socken"],
        image: casualFridayImage,
    },
    {
        name: "KKNEKKI",
        slug: "kknekki",
        shortDescription: "Der Original Haargummi – eines der besten der Welt",
        description: "KKNEKKI ist nicht nur ein Haargummi, sondern ein echtes Mode-Statement. Die einzigartige Webtechnik, bestehend aus über 60 Fäden, verleiht ihm eine unübertroffene Weichheit und Elastizität, die das Haar schont und gleichzeitig für perfekten Halt sorgt. Ob im Haar oder als stylisches Armband – KKNEKKI ist das Accessoire, das in keiner Sammlung fehlen darf. Erhältlich in einer riesigen Farbvielfalt, findest du garantiert den passenden Ton für jeden Look. Langlebig, wasserfest und sanft zum Haar: Entdecke, warum KKNEKKI als eines der besten Haargummis der Welt gilt.",
        categories: ["Accessoires", "Allgemein", "Fashion"],
        image: kknekkiImage,
    },
    {
        name: "Hopery",
        slug: "hopery",
        shortDescription: "Es geht auch ohne Palmöl!",
        description: "Hopery zeigt, dass hochwertige Kosmetik auch ohne Palmöl auskommt. Die Marke steht für konsequent nachhaltige, vegane und palmölfreie Pflegeprodukte, die gut für dich und die Umwelt sind. Mit jedem verkauften Produkt unterstützt Hopery zudem Orang-Utan-Rettungsprojekte. Entdecke feste Shampoos, Duschbars und Körperpflege, die nicht nur himmlisch duften, sondern auch einen echten Unterschied machen. Reine Inhaltsstoffe, faire Produktion und ein Herz für den Tierschutz – das ist Hopery.",
        categories: ["Allgemein", "Beauty", "Kosmetik"],
        image: hoperyImage,
    },
    {
        name: "Taschen, Geldbeutel & Mehr",
        slug: "taschen",
        shortDescription: "Vielfalt für deinen Stil Qualität, Stil",
        description: "Willkommen in der aufregenden Welt der Taschen und Accessoires! Vielfalt für deinen Stil: Von eleganten Handtaschen über lässige Umhängetaschen bis hin zu praktischen Rucksäcken – unsere Kollektion bietet für jeden Anlass und Geschmack das passende Accessoire. Qualität, die überzeugt: Wir legen Wert auf hochwertige Materialien und sorgfältige Verarbeitung. Jede Tasche und jeder Geldbeutel wurde ausgewählt, um dir lange Freude zu bereiten.",
        categories: ["Accessoires", "Allgemein", "Fashion", "Lifestyle", "Taschen", "Taschengurt"],
        image: taschenImage,
    },
    {
        name: "Kunstwerkstatt",
        slug: "kunstwerkstatt",
        shortDescription: "Handgefertigte Schmuckstücke von Walli Rainer",
        description: "Entdecke handgefertigte Schmuckstücke von Walli Rainer. Walli Rainer glaubt fest daran, dass wahre Schönheit in der Individualität liegt und dass Schmuck mehr als nur ein Accessoire ist – er ist ein Ausdruck der Einzigartigkeit einer Person. \n\nIn ihrer liebevoll gestalteten Kunstwerkstatt entstehen handgefertigte Schmuckstücke, bei denen jedes Paar Ohrringe ein Unikat ist. Ihre grenzenlose Liebe zum Kunsthandwerk und ihre Hingabe an jedes Detail spiegeln sich in ihren einzigartigen Kreationen wider, die von der Schönheit der Natur und kreativen Mustern inspiriert sind. \n\nWir laden dich herzlich ein, die Welt des handgefertigten Schmucks von Walli Rainer zu entdecken, um deine Persönlichkeit und deinen Stil auf einzigartige Weise zu zeigen.",
        categories: ["Accessoires", "Allgemein", "Beauty", "Handgemacht", "Schmuck"],
        image: kunstwerkstattImage,
    },
    {
        name: "Cereria Molla",
        slug: "cereria-molla",
        shortDescription: "Zeitlose Eleganz von Duftkerzen – Tradition seit 1899",
        description: "Entdecke die zeitlose Eleganz von Cereria Molla Duftkerzen: Eine Tradition seit 1899. Seit dem Jahr 1899 steht Cereria Molla für exzellente Handwerkskunst und die Herstellung hochwertiger Duftkerzen. Die Leidenschaft für Qualität und Tradition wird von Generation zu Generation weitergegeben. Jede Kerze wird sorgfältig von Hand gefertigt, wobei nur die feinsten Inhaltsstoffe verwendet werden, um ein unvergleichliches Dufterlebnis zu schaffen. Tauche ein in die Welt der Düfte und verleihe deinem Zuhause eine Atmosphäre von Luxus und Behaglichkeit.",
        categories: ["Geschenke", "Kerzen", "Lifestyle", "Nachhaltigkeit", "Pflege"],
        image: cereriaMollaImage,
    },
    {
        name: "Servietten",
        slug: "servietten",
        shortDescription: "Stilvoll, Nachhaltig und Vielseitig",
        description: "PPD Servietten: Stilvoll, Nachhaltig und Vielseitig. Willkommen in unserer Servietten-Welt: Deine Experten für stilvolle Tischkultur. Entdecke unsere vielfältige Auswahl an Servietten für jeden Anlass – von eleganten Dinnerpartys bis hin zu gemütlichen Familienfeiern. Unsere Servietten zeichnen sich nicht nur durch ansprechende Designs aus, sondern auch durch ihre Nachhaltigkeit. Hergestellt aus hochwertigen Materialien, sind sie umweltfreundlich und biologisch abbaubar.",
        categories: ["Allgemein", "Essen", "Geschenke", "Küche", "Lifestyle"],
        image: ppdImage,
    },
    {
        name: "Losboxen",
        slug: "losboxen",
        shortDescription: "Entdecke die Magie der Losboxen",
        description: "Entdecke die Magie der Losboxen von Herzmeister! Liebe Freunde der Spannung und des Glücks, wir laden euch herzlich ein, unsere faszinierenden Losboxen zu entdecken. Jede Box ist ein kleines Abenteuer für sich, gefüllt mit liebevollen Überraschungen und Sprüchen, die den Alltag verzaubern. Ideal als Geschenk oder als kleines Highlight für dich selbst – lass dich überraschen, welche Botschaft das Schicksal heute für dich bereithält.",
        categories: ["Allgemein", "Geschenke", "Lifestyle"],
        image: herzmeisterImage,
    },
    {
        name: "Ammann",
        slug: "ammann",
        shortDescription: "Hochwertige Unterwäsche für höchsten Tragekomfort",
        description: "Entdecke Ammann: Hochwertige Unterwäsche für höchsten Tragekomfort. Wäsche ist Vertrauenssache. Kaum ein anderes Kleidungsstück muss so hohen Anforderungen genügen wie die Wäsche, die wir direkt auf der Haut tragen. Ammann verbindet Tradition mit Innovation und bietet Unterwäsche, die durch perfekte Passform, hochwertige Materialien und klassisches Design überzeugt. Seit 1886 steht das Unternehmen für Qualität „Made in Europe“ und sorgt dafür, dass du dich den ganzen Tag rundum wohlfühlst.",
        categories: ["Allgemein", "Fashion", "Lifestyle", "Nachhaltigkeit", "Unterwäsche"],
        image: ammannImage,
    },
    {
        name: "Kruut",
        slug: "kruut",
        shortDescription: "Hol dir die Natur nach Hause.",
        description: "Hol dir die Natur nach Hause. Kruut steht für einen Schritt zurück zur nährstoffreichen Natur und zu dem Wissen, wie man sich diese zunutze machen kann. Mit kraftvollen Wildkräutern, die in Deutschland heimisch sind und oft vergessen werden. Kruut bringt diese Schätze zurück in deinen Alltag – als erfrischende Oxymels, Tinkturen oder Kräutermischungen. 100% natürlich, biologisch und ohne Zusatzstoffe. Ein Schluck wilde Natur für dein Wohlbefinden.",
        categories: ["Allgemein", "Gesundheit", "Lifestyle", "Nachhaltigkeit"],
        image: kruutImage,
    },
    {
        name: "Wäschepflege",
        slug: "waeschepflege",
        shortDescription: "Deine Bekleidung hat Anspruch auf die beste Pflege!",
        description: "Deine Bekleidung hat Anspruch auf die beste Pflege! 100 % VEGAN. Gute Pflege trägt dazu bei, dass deine Lieblingsstücke länger schön bleiben. Unsere Produkte zur Wäschepflege sind speziell darauf abgestimmt, Fasern zu schonen, Farben zu erhalten und dabei die Umwelt zu respektieren. Von sanften Waschmitteln bis hin zu speziellen Pflegeprodukten – wir bieten dir alles, was du für eine nachhaltige und effektive Wäschepflege benötigst. Vegan, ohne Tierversuche und biologisch abbaubar.",
        categories: ["Allgemein", "Fashion", "Hund", "Lifestyle", "Nachhaltigkeit", "Pflege", "Vegan"],
        image: waeschepflegeImage,
    },
    {
        name: "MAGS",
        slug: "mags",
        shortDescription: "Die coolsten Lifestyle-Produkte, die dein Leben bunter machen!",
        description: "Lust auf ausgefallene, witzige und geniale Lifestyle-Artikel, die deinen Alltag aufpeppen? Dann bist du bei uns genau richtig! Wir haben für dich die besten Produkte von MAGS im Sortiment – die Marke, die für kreative Geschenkideen, lustige Gadgets und jede Menge Spaß steht! \n\nWarum du unbedingt vorbeikommen solltest:\n- Einzigartige Geschenke & verrückte Gadgets – Perfekt für jede Gelegenheit!\n- Spaß garantiert! Ob für die Küche, das Büro oder einfach zum Lachen – hier findest du das Richtige.\n- Alles direkt zum Anfassen & Ausprobieren.\n\nOnline stöbern ist nett, aber live erleben ist besser! Komm vorbei, entdecke die besten MAGS-Produkte und finde dein neues Lieblings-Gadget – oder das perfekte Geschenk für jemanden, der eigentlich schon alles hat!",
        categories: ["Lifestyle", "Geschenke", "Witziges", "Accessoires"],
        image: magsImage,
    },
    {
        name: "A Beautiful Story",
        slug: "a-beautiful-story",
        shortDescription: "Handgemachter Schmuck mit einer Botschaft",
        description: "A Beautiful Story – eine Marke, die nicht nur schöne Accessoires herstellt, sondern auch eine inspirierende Botschaft vermittelt. \n\nHandgemachte Schätze mit Herz und Seele: A Beautiful Story steht für handgemachten Schmuck, der mit Liebe und Sorgfalt gefertigt wird. Jedes Stück ist ein Unikat und erzählt seine eigene Geschichte. Von kunstvoll gefertigten Armbändern bis hin zu filigranen Halsketten – jedes Schmuckstück ist ein Kunstwerk, das die Schönheit und Vielfalt des Lebens zelebriert.\n\nDie Philosophie von A Beautiful Story ist einfach und doch tiefgründig: Sie glauben daran, dass jeder Mensch eine einzigartige Geschichte zu erzählen hat und dass Schmuck eine Möglichkeit ist, diese Geschichten zu teilen und zu feiern. Ihre Kollektionen sind inspiriert von den Farben und Kulturen der Welt und laden dazu ein, sich mit der eigenen Persönlichkeit zu verbinden.",
        categories: ["Schmuck", "Accessoires", "Geschenke", "Gesundheit", "Lifestyle", "Nachhaltigkeit", "Fashion", "Beauty"],
        image: aBeautifulStoryImage,
    },
    {
        name: "Rohstoff",
        slug: "rohstoff",
        shortDescription: "Bio-Säfte – GANZE FRÜCHTE",
        description: "Wenig ist wertvoller, als Früchte frisch vom Baum und Wurzeln unmittelbar aus dem Boden. Rohstoff verarbeitet darum ausschließlich ganze und biologisch angebaute Rohstoffe. Äpfel, Zitronen, Orangen, Ingwer und Kurkuma werden im Ganzen verarbeitet, kalt gepresst, vermengt und direkt abgefüllt. So bleiben alle wertvollen Inhaltsstoffe und der volle Geschmack erhalten. Tu dir etwas Gutes mit den Kraftpaketen der Natur – für einen gesunden und vitalen Start in den Tag.",
        categories: ["Gesundheit", "Vegan", "Nachhaltigkeit", "Lifestyle", "Beauty"],
        image: rohstoffImage,
    },
];
