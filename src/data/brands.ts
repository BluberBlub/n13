export interface Brand {
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    categories: string[];
    image?: string;
}

export const brands: Brand[] = [
    {
        slug: 'happy-socks',
        name: 'Happy Socks',
        shortDescription: 'Bunte Socken für deinen einzigartigen Stil',
        description:
            'Happy Socks steht für bunte und fröhliche Socken, die jedem Outfit eine Extraportion Persönlichkeit verleihen. Von lebendigen Mustern und verspielten Motiven bis hin zu klassischen Designs mit einem modernen Twist bieten wir eine vielfältige Auswahl an Socken, die jeden Geschmack und Stil widerspiegeln.',
        categories: ['Fashion', 'Lifestyle', 'Socken', 'Strumpfwaren'],
        image: '/images/brand-happy-socks.jpg',
    },
    {
        slug: 'meyer-hosen',
        name: 'Meyer Hosen',
        shortDescription: 'Hochwertige Hosen mit perfekter Passform',
        description:
            'Meyer Hosen steht für erstklassige Qualität und perfekte Passform. Die Kollektion bietet eine breite Auswahl an Hosen für jeden Anlass – von klassisch elegant bis modern lässig. Nachhaltig produziert und mit Liebe zum Detail gefertigt.',
        categories: ['Fashion', 'Hosen/Jeans', 'Lifestyle', 'Nachhaltigkeit'],
        image: '/images/brand-meyer.jpg',
    },
    {
        slug: 'object',
        name: 'Object',
        shortDescription: 'Skandinavische Damenmode mit besonderem Charme',
        description:
            'Object verbindet skandinavisches Design mit modernem Zeitgeist. Die Kollektion bietet vielseitige Styles für Frauen, die Wert auf Qualität und individuelle Mode legen. Von Basics bis Statement-Pieces – Object macht Mode, die begeistert.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires'],
        image: '/images/brand-object.jpg',
    },
    {
        slug: 'b-young',
        name: 'B.Young',
        shortDescription: 'Dänische Mode für die moderne Frau',
        description:
            'B.Young ist eine dänische Modemarke, die feminine und zeitgemäße Kleidung für die moderne Frau kreiert. Die Kollektion zeichnet sich durch vielseitige Styles aus, die sowohl im Alltag als auch bei besonderen Anlässen überzeugen.',
        categories: ['Fashion', 'Lifestyle', 'Hemden', 'Hosen/Jeans', 'Accessoires'],
        image: '/images/brand-b-young.jpg',
    },
    {
        slug: 'blend',
        name: 'Blend',
        shortDescription: 'Lässige Herrenmode mit nordischem Touch',
        description:
            'Blend bietet lässige und trendige Herrenmode mit nordischem Flair. Die Marke steht für komfortable Alltagsmode, die sich durch gute Qualität und faire Preise auszeichnet. Nachhaltig und stylish zugleich.',
        categories: ['Fashion', 'Lifestyle', 'Hemden', 'Nachhaltigkeit'],
        image: '/images/brand-blend.jpg',
    },
    {
        slug: 'desoto',
        name: 'Desoto',
        shortDescription: 'Innovative Hemden – bügelleicht und nachhaltig',
        description:
            'Desoto revolutioniert das Hemd mit innovativen, bügelleichten Materialien. Die Hemden sind nicht nur pflegeleicht, sondern auch nachhaltig produziert. Perfekt für den modernen Mann, der Wert auf Stil und Praktikabilität legt.',
        categories: ['Fashion', 'Hemden', 'Lifestyle', 'Nachhaltigkeit'],
        image: '/images/brand-desoto.jpg',
    },
    {
        slug: 'lindenmann',
        name: 'Lindenmann',
        shortDescription: 'Hochwertige Gürtel und Accessoires',
        description:
            'Lindenmann steht für erstklassige Gürtel und Accessoires aus hochwertigen Materialien. Mit Liebe zum Detail gefertigt, bieten die Produkte zeitlose Eleganz und perfekte Verarbeitung für den anspruchsvollen Kunden.',
        categories: ['Accessoires', 'Fashion', 'Gürtel', 'Lifestyle'],
        image: '/images/brand-lindenmann.jpg',
    },
    {
        slug: 'vila',
        name: 'Vila',
        shortDescription: 'Feminine Mode mit skandinavischer Leichtigkeit',
        description:
            'Vila ist eine dänische Modemarke, die feminine, trendige und erschwingliche Mode für Frauen bietet. Die Kollektionen reichen von eleganten Kleidern über lässige Alltagslooks bis hin zu stylischen Accessoires.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires', 'Nachhaltigkeit'],
        image: '/images/brand-vila.jpg',
    },
    {
        slug: 'casual-friday',
        name: 'Casual Friday',
        shortDescription: 'Relaxte Herrenmode für jeden Tag',
        description:
            'Casual Friday bietet entspannte und stilvolle Herrenmode für den modernen Mann. Die Kollektion vereint Komfort mit zeitgemäßem Design – ideal für den lässigen Alltagslook mit skandinavischem Einfluss.',
        categories: ['Fashion', 'Lifestyle', 'Herrenmode'],
        image: '/images/brand-casual-friday.jpg',
    },
];
