export interface Brand {
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    categories: string[];
    image?: string;
    featured?: boolean;
}

export const brands: Brand[] = [
    {
        slug: 'happy-socks',
        name: 'Happy Socks',
        shortDescription: 'Bunte Socken für deinen einzigartigen Stil',
        description:
            'Happy Socks wurde 2008 mit einer klaren Vision gegründet: Ein alltägliches Kleidungsstück in ein farbenfrohes Design-Objekt zu verwandeln, das Freude verbreitet. Die Marke steht für ultimative Qualität, Handwerkskunst und Kreativität. Jedes Paar Socken ist ein kleines Kunstwerk, das Persönlichkeit und gute Laune in deinen Alltag bringt.',
        categories: ['Fashion', 'Lifestyle', 'Socken', 'Strumpfwaren'],
        image: '/images/brand-happy-socks.jpg',
    },
    {
        slug: 'meyer-hosen',
        name: 'Meyer Hosen',
        shortDescription: 'Qualität bis ins Detail – nachhaltig & fair.',
        description:
            'Seit 1960 steht Meyer Hosen für erstklassige Qualität und perfekte Passform. Als europäischer Spezialist für Männerhosen verbindet das Familienunternehmen traditionelles Handwerk mit innovativer Fertigung. Besonderer Wert wird auf Nachhaltigkeit gelegt: Faire Produktionsbedingungen und ökologische Materialien sind bei Meyer Standard. Die Liebe zum Detail zeigt sich in jeder Naht.',
        categories: ['Fashion', 'Hosen/Jeans', 'Lifestyle', 'Nachhaltigkeit'],
        image: '/images/brand-meyer.jpg',
    },
    {
        slug: 'object',
        name: 'Object',
        shortDescription: 'Cool, edel & skandinavisch.',
        description:
            'Object Collectors Item steht für Mode, die Geschichten erzählt. Die Marke verbindet skandinavische Coolness mit femininer Eleganz. Der Fokus liegt auf hochwertigen Materialien und Schnitten, die die Persönlichkeit unterstreichen, ohne sich aufzudrängen. Perfekt für Frauen, die ihren eigenen Stil leben.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires'],
        image: '/images/brand-object.jpg',
    },
    {
        slug: 'b-young',
        name: 'B.Young',
        shortDescription: 'Fashion für jeden Tag und jeden Anlass.',
        description:
            'B.Young ist eine dänische Modemarke, die es versteht, aktuelle Trends in tragbare Mode für jeden Tag zu übersetzen. Die Kollektionen bieten frische, feminine Styles, die Qualität und Preisbewusstsein perfekt vereinen. Von Business bis Casual – B.Young hat den passenden Look.',
        categories: ['Fashion', 'Lifestyle', 'Hemden', 'Hosen/Jeans', 'Accessoires'],
        image: '/images/brand-b-young.jpg',
    },
    {
        slug: 'blend',
        name: 'Blend',
        shortDescription: 'Authentische Jeanswear für coole Typen.',
        description:
            'Blend liefert Jeanswear für Männer, die wissen, was sie wollen. Die Marke steht für authentische Mode mit rauem Charme und nordischer Seele. Der Fokus liegt auf Denim – robust, stylisch und immer am Puls der Zeit. Ehrliche Mode zu fairen Preisen.',
        categories: ['Fashion', 'Lifestyle', 'Hemden', 'Nachhaltigkeit'],
        image: '/images/brand-blend.jpg',
    },
    {
        slug: 'desoto',
        name: 'Desoto',
        shortDescription: 'Das Hemd neu definiert: Jersey-Komfort trifft Style.',
        description:
            'Desoto hat das klassische Herrenhemd revolutioniert. Das Geheimnis? Premium-Jersey aus 100% Baumwolle. Das Ergebnis sind Hemden, die so bequem sind wie ein T-Shirt und so elegant wie ein Business-Hemd. Bügelfrei, atmungsaktiv und mit absoluter Bewegungsfreiheit (Flex-Cross). Made in Europe, chemiefrei und nachhaltig (Öko-Tex zertifiziert).',
        categories: ["Hemden", "Herren", "Bügelfrei"],
        image: '/images/brand-desoto.jpg',
    },
    {
        name: "Lindenmann",
        slug: "lindenmann",
        image: "/images/brand-lindenmann.jpg",
        description:
            "Lindenmann – The Art of Belt. Seit 1961 steht das Pforzheimer Familienunternehmen für hochwertige Herren-Accessoires. Ob klassische Ledergürtel, Hosenträger oder Manschettenknöpfe: Lindenmann verbindet traditionelles Handwerk mit modernem Design. Qualität, die man sieht und fühlt.",
        shortDescription: "Hochwertige Gürtel und Accessoires für Männer.",
        categories: ["Accessoires", "Herren", "Leder"],
    },
    {
        slug: 'vila',
        name: 'Vila',
        shortDescription: 'Feminine Eleganz mit skandinavischem Touch.',
        description:
            'Vila glaubt, dass Weiblichkeit die perfekte Balance zwischen Zartheit und Stärke ist. Die Marke entwirft Mode für Frauen, die ihren persönlichen Stil mit Selbstbewusstsein tragen. Feine Drucke, schmeichelhafte Schnitte und liebevolle Details prägen den Look. Skandinavisch schlicht, aber niemals langweilig.',
        categories: ['Fashion', 'Lifestyle', 'Blusen', 'Hosen/Jeans', 'Accessoires', 'Nachhaltigkeit'],
        image: '/images/brand-vila.jpg',
    },
    {
        slug: 'casual-friday',
        name: 'Casual Friday',
        shortDescription: 'Ready for the Weekend – jeden Tag.',
        description:
            'Casual Friday ist inspiriert vom entspannten Stil des Wochenendes. Die Marke bietet Mode für Männer, die im Job und in der Freizeit gut aussehen wollen, ohne sich zu verkleiden. Cleane Schnitte, hochwertige Stoffe und ein Hauch von skandinavischem Minimalismus.',
        categories: ['Fashion', 'Lifestyle', 'Herrenmode'],
        image: '/images/brand-casual-friday.jpg',
    },
    {
        name: "MAGS",
        slug: "mags",
        shortDescription: "Trendorientierte Mode mit Fokus auf Qualität",
        description: "MAGS steht für schicke, trendbewusste Mode, die keine Kompromisse bei der Qualität eingeht. 'Trend, Fit, and Quality' ist das Motto. Entdecke einzigartige Designs und Schnitte, die deine Persönlichkeit unterstreichen.",
        categories: ["Damen", "Fashion", "Trends"],
        image: '/images/brand-mags.jpg',
    },
    {
        name: "A Beautiful Story",
        slug: "a-beautiful-story",
        shortDescription: "Handgefertigter Schmuck mit Bedeutung",
        description: "Schmuckstücke, die Glück bringen. A Beautiful Story fertigt fairen Handelsschmuck in Nepal und Indien. Jedes Stück hat eine Bedeutung und erzählt eine Geschichte. 'Lucky tools' für dein tägliches Leben.",
        categories: ["Schmuck", "Accessoires", "Fair Trade"],
        image: '/images/brand-a-beautiful-story.jpg',
    },
    {
        name: "Cereria Molla",
        slug: "cereria-molla",
        shortDescription: "Luxuriöse Duftkerzen aus Spanien",
        description: "Seit 1899 fertigt Cereria Molla handgegossene Duftkerzen aus besten Rohstoffen. Erlebe mediterrane Düfte, die dein Zuhause in eine Wohlfühloase verwandeln. Natürlich, elegant und zeitlos.",
        categories: ["Lifestyle", "Duftkerzen", "Home"],
        image: '/images/brand-cereria-molla.jpg',
    },
    {
        name: "KKNEKKI",
        slug: "kknekki",
        shortDescription: "Die weltbesten Haargummis",
        description: "KKNEKKI Haargummis sind bekannt für ihre außergewöhnliche Qualität und Farbenvielfalt. Sie sind sanft zum Haar, extrem haltbar und sehen auch als Armband toll aus. Ein Must-Have Accessoire.",
        categories: ["Accessoires", "Haar", "Lifestyle"],
        image: '/images/brand-kknekki.jpg',
    },
    {
        name: "Ammann",
        slug: "ammann",
        shortDescription: "Traditionelle Wäsche von höchster Qualität",
        description: "Seit 1886 steht Ammann für hochwertige Tag- und Nachtwäsche. Klassisches Design trifft auf höchsten Tragekomfort und perfekte Passform. Wäsche zum Wohlfühlen, Tag und Nacht.",
        categories: ["Wäsche", "Herren", "Damen"],
        image: '/images/brand-ammann.jpg',
    },
    {
        name: "Kruut",
        slug: "kruut",
        shortDescription: "Moderne Wildkräuter-Elixiere",
        description: "Kruut bringt die Kraft der heimischen Wildkräuter zurück in deinen Alltag. Oxymels und Tinkturen nach traditionellen Rezepten, hergestellt aus 100% bio-zertifizierten Zutaten. Natürlich, wild und kraftvoll.",
        categories: ["Lifestyle", "Gesundheit", "Kräuter"],
        image: '/images/brand-kruut.jpg',
    },
    {
        name: "Hopery",
        slug: "hopery",
        shortDescription: "Vegane Naturkosmetik ohne Palmöl",
        description: "Hopery bietet hochwertige, vegane Naturkosmetik, die gut für dich und die Umwelt ist. 100% ohne Palmöl, um den Lebensraum der Orang-Utans zu schützen. Handgefertigt mit Liebe und Tradition.",
        categories: ["Kosmetik", "Vegan", "Nachhaltigkeit"],
        image: '/images/brand-hopery.jpg',
    },
    {
        name: "Kunstwerkstatt",
        slug: "kunstwerkstatt",
        shortDescription: "Einzigartige Kunst & Handwerk",
        description: "Kreative Kunstwerke und handgefertigte Unikate. Die Kunstwerkstatt bietet besondere Stücke, die Geschichten erzählen und inspirieren. Entdecke Kunst, die berührt.",
        categories: ["Kunst", "Lifestyle", "Deko"],
        image: '/images/brand-kunstwerkstatt.jpg',
    },
    {
        name: "Rohstoff",
        slug: "rohstoff",
        shortDescription: "Bio-Säfte und Erfrischungen",
        description: "Purer Genuss aus besten Bio-Zutaten. Rohstoff steht für Säfte und Erfrischungen, die natürlich schmecken und gut tun. Ohne künstliche Zusätze, einfach purer Geschmack.",
        categories: ["Food", "Bio", "Lifestyle"],
        image: '/images/brand-rohstoff.jpg',
    },
];
