import wagyuImg from '@/src/assets/images/wagyu_signature_plate_1790929769718.jpg';
import trufflePastaImg from '@/src/assets/images/dish_truffle_pasta_1790930584113.jpg';
import burrataImg from '@/src/assets/images/dish_burrata_heirloom_1790930603560.jpg';
import chocolateTorteImg from '@/src/assets/images/dish_chocolate_torte_1790930614881.jpg';
import chefSpecialImg from '@/src/assets/images/chef_special_dish_1790929783778.jpg';
import heroDiningImg from '@/src/assets/images/hero_cinematic_dining_1790929757006.jpg';
import chefPlatingImg from '@/src/assets/images/gallery_chef_plating_1790930630606.jpg';
import foodPrepFlameImg from '@/src/assets/images/gallery_food_prep_flame_1790930644991.jpg';
import cellarDiningImg from '@/src/assets/images/cellar_private_dining_1790929794337.jpg';

export interface Dish {
  id: string;
  name: string;
  category: 'starters' | 'main' | 'pasta' | 'pizza' | 'desserts' | 'drinks';
  description: string;
  price: number;
  dietary?: ('GF' | 'V' | 'VG' | 'Chef Signature')[];
  pairing?: string;
  origin?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'chef' | 'prep' | 'table' | 'ambience';
  categoryLabel: string;
  description: string;
  image: string;
  aspect?: string;
}

export const RESTAURANT_INFO = {
  name: 'LUMORA',
  tagline: 'A Modern Dining Experience',
  shortBio: 'Where culinary avant-garde meets nocturnal intimacy. An elevated culinary sanctuary crafted for the senses.',
  address: '18 Mayfair Square, London W1J 8AQ',
  city: 'Mayfair, London',
  phone: '+44 (0) 20 7946 0882',
  email: 'concierge@lumora-restaurant.com',
  whatsappNumber: '+919345714473',
  whatsappMessage: 'Hello LUMORA Concierge, I would like to inquire about reserving a table for dinner.',
  hours: [
    { days: 'Wednesday – Sunday', meal: 'Dinner Service', time: '18:00 – 23:30' },
    { days: 'Friday – Sunday', meal: 'Lunch Tasting', time: '12:00 – 15:30' },
    { days: 'Monday – Tuesday', meal: 'Private Cellar & Culinary Research', time: 'By Special Arrangement' }
  ],
  dressCode: 'Smart Elegant (Tailored jackets encouraged, athletic wear strictly prohibited)',
  valet: 'Complimentary private valet reception at 18 Mayfair Square entrance.'
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'truffle-pasta',
    name: 'Truffle Pasta',
    category: 'pasta',
    description: 'Hand-rolled egg tagliolini bathed in cultured Normandy mountain butter, 36-month aged Parmigiano-Reggiano, and generous shavings of fresh Norcia black winter truffle.',
    price: 48,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Barolo Monfortino Riserva Giacomo Conterno 2013',
    origin: 'Piedmont & Norcia, Italy',
    image: trufflePastaImg
  },
  {
    id: 'wagyu-steak',
    name: 'Wagyu Steak',
    category: 'main',
    description: 'Charcoal-kissed A5 Miyazaki Wagyu striploin glazed with aged black winter truffle reduction, charred matsutake purée, smoked bone marrow butter, and 24k gold leaf.',
    price: 88,
    dietary: ['GF', 'Chef Signature'],
    pairing: 'Château Margaux Premier Grand Cru 2012',
    origin: 'Miyazaki Prefecture, Japan',
    image: wagyuImg
  },
  {
    id: 'burrata-heirloom',
    name: 'Burrata & Heirloom Tomato',
    category: 'starters',
    description: 'Handcrafted creamy Pugliese burrata surrounded by sun-drenched heritage tomatoes, cold-pressed Ligurian basil oil, 25-year aged Modena balsamic pearls, and sea salt crisps.',
    price: 34,
    dietary: ['GF', 'V'],
    pairing: 'Vermentino di Gallura Superiore, Capichera 2021',
    origin: 'Puglia & Modena, Italy',
    image: burrataImg
  },
  {
    id: 'dark-chocolate-torte',
    name: 'Dark Chocolate Torte',
    category: 'desserts',
    description: 'Decadent single-origin Valrhona Guanaja 72% chocolate ganache torte with glossy mirror glaze, spun caramel nest, smoked Cornish sea salt, and Madagascar Bourbon vanilla bean crème.',
    price: 26,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Château d’Yquem Sauternes 2009',
    origin: 'Tain-l’Hermitage & Madagascar',
    image: chocolateTorteImg
  }
];

export const CHEF_SPECIAL = {
  title: 'Obsidian Langoustine & Oscietra Caviar',
  subtitle: 'The Executive Chef’s Nocturnal Masterwork',
  price: 115,
  description: 'Wild Scottish langoustine flash-seared over binchotan white charcoal, glazed with reduced shellfish kombu dashi, crowned with Royal Oscietra caviar, sea foam infusion, and preserved yuzu zest.',
  sommelierNote: 'Paired with 2015 Dom Pérignon Rosé Champagne — vibrant maritime minerality balancing the decadent sweet richness of the langoustine and salinity of the caviar.',
  chefQuote: '“Fire is elemental. When raw Scottish shellfish meets thousand-degree white charcoal for seventy-four seconds, sweetness and smoke form an indelible culinary harmony.”',
  chefName: 'Matteo Vane',
  chefRole: 'Executive Chef & Founder',
  origin: 'North Sea & Brittany Coast',
  image: chefSpecialImg
};

export const FULL_MENU_ITEMS: Dish[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Burrata & Heirloom Tomato',
    category: 'starters',
    description: 'Pugliese burrata, heirloom garden tomatoes, cold-pressed basil oil, 25-year Modena balsamic pearls.',
    price: 34,
    dietary: ['GF', 'V'],
    pairing: 'Vermentino di Gallura 2021'
  },
  {
    id: 'starter-2',
    name: 'Hokkaido Scallop Crudo',
    category: 'starters',
    description: 'Seared sweet scallops, calamansi emulsion, pickled daikon, cured sea urchin butter, sea fennel.',
    price: 38,
    dietary: ['GF', 'Chef Signature'],
    pairing: 'Chablis Premier Cru, Vincent Dauvissat 2019'
  },
  {
    id: 'starter-3',
    name: 'Smoked Heritage Beetroot Carpaccio',
    category: 'starters',
    description: 'Salt-baked golden beets, whipped pistachio goat curd, blackcurrant vinaigrette, micro sorrel.',
    price: 26,
    dietary: ['GF', 'V'],
    pairing: 'Grüner Veltliner Smaragd, F.X. Pichler 2020'
  },
  {
    id: 'starter-4',
    name: 'Foie Gras Terrine & Spiced Brioche',
    category: 'starters',
    description: 'Port wine-poached fig, aged balsamic reduction, roasted hazelnut crunch, warm artisanal brioche.',
    price: 36,
    pairing: 'Tokaji Aszú 5 Puttonyos, Oremus 2016'
  },

  // Main Course
  {
    id: 'main-1',
    name: 'Wagyu Steak',
    category: 'main',
    description: 'A5 Miyazaki Wagyu striploin, charred matsutake purée, bone marrow glaze, smoked fleur de sel, gold leaf.',
    price: 88,
    dietary: ['GF', 'Chef Signature'],
    pairing: 'Château Margaux Premier Grand Cru 2012'
  },
  {
    id: 'main-2',
    name: 'Wild Brittany Sea Bass',
    category: 'main',
    description: 'Line-caught sea bass with crispy skin, royal Breton saffron velouté, sea fennel, smoked imperial caviar.',
    price: 64,
    dietary: ['GF'],
    pairing: 'Domaine Leflaive Puligny-Montrachet 2018'
  },
  {
    id: 'main-3',
    name: 'Aged Pyrenean Lamb Rack',
    category: 'main',
    description: 'Herb-crusted lamb rack, smoked parsnip cream, braised morel mushrooms, rosemary lamb jus reduction.',
    price: 58,
    dietary: ['GF'],
    pairing: 'Hermitage Rouge, Jean-Louis Chave 2017'
  },
  {
    id: 'main-4',
    name: 'Roasted Romanesco & Morels',
    category: 'main',
    description: 'Charred romanesco steaks, glazed black morels, sunchoke puree, pine nut emulsion, black garlic glaze.',
    price: 42,
    dietary: ['GF', 'VG'],
    pairing: 'Meursault-Charmes, Domaine des Comtes Lafon 2019'
  },

  // Pasta
  {
    id: 'pasta-1',
    name: 'Truffle Pasta',
    category: 'pasta',
    description: 'Hand-rolled egg tagliolini, cultured Normandy butter, 36-month Parmigiano, freshly shaved black truffle.',
    price: 48,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Barolo Monfortino Riserva Giacomo Conterno 2013'
  },
  {
    id: 'pasta-2',
    name: 'Tagliolini al Granchio Reale',
    category: 'pasta',
    description: 'Egg tagliolini with Norwegian King Crab, Calabrian chili, confit datterini tomatoes, lemon verbena oil.',
    price: 52,
    dietary: ['Chef Signature'],
    pairing: 'Vermentino di Gallura Superiore, Capichera 2021'
  },
  {
    id: 'pasta-3',
    name: 'Cavatelli with Wild Boar Ragù',
    category: 'pasta',
    description: 'Slow-simmered Tuscan wild boar, juniper berries, aged pecorino di Fossa, crispy mountain sage.',
    price: 44,
    pairing: 'Brunello di Montalcino, Biondi-Santi 2015'
  },
  {
    id: 'pasta-4',
    name: 'Handcrafted Spinach Tortellini',
    category: 'pasta',
    description: 'Artisanal ricotta, wild mountain chanterelles, hazelnut brown butter, aged Parmigiano crisp.',
    price: 39,
    dietary: ['V'],
    pairing: 'Soave Classico La Rocca, Pieropan 2020'
  },

  // Pizza
  {
    id: 'pizza-1',
    name: 'LUMORA Tartufo Nero',
    category: 'pizza',
    description: '72-hour cold-fermented sourdough, fior di latte, aged fontina, fresh black truffle shavings, organic egg yolk, thyme oil.',
    price: 38,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Franciacorta Cuvée Prestige, Ca’ del Bosco'
  },
  {
    id: 'pizza-2',
    name: 'Prosciutto di Parma Riserva',
    category: 'pizza',
    description: 'San Marzano DOP sauce, buffalo mozzarella, 30-month aged Parma prosciutto, wild rocket, aged balsamic drizzle.',
    price: 34,
    pairing: 'Chianti Classico Gran Selezione, Antinori 2018'
  },
  {
    id: 'pizza-3',
    name: 'Diavola Affumicata',
    category: 'pizza',
    description: "Smoked provola, artisanal spicy 'Nduja from Spilinga, hot capocollo, fermented hot honey, fresh basil.",
    price: 32,
    pairing: 'Etna Rosso, Tenuta delle Terre Nere 2020'
  },
  {
    id: 'pizza-4',
    name: 'Bianca ai Funghi Selvatici',
    category: 'pizza',
    description: 'Taleggio cream, roasted wild forest chanterelles, caramelized shallots, fresh rosemary, truffle pecorino.',
    price: 33,
    dietary: ['V'],
    pairing: 'Nebbiolo d’Alba, Bruno Giacosa 2020'
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Dark Chocolate Torte',
    category: 'desserts',
    description: 'Valrhona Guanaja 72% chocolate ganache, mirror glaze, spun caramel nest, smoked Cornish sea salt, Bourbon vanilla crème.',
    price: 26,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Château d’Yquem Sauternes 2009'
  },
  {
    id: 'dessert-2',
    name: 'Piedmont Hazelnut & Golden Pear',
    category: 'desserts',
    description: 'Roasted hazelnut praline crisp, poached Williams pear, dark chocolate crémeux, smoked sea salt ice cream.',
    price: 24,
    dietary: ['V'],
    pairing: 'Moscato d’Asti, Vietti 2022'
  },
  {
    id: 'dessert-3',
    name: 'Yuzu & White Sesame Sphere',
    category: 'desserts',
    description: 'Crisp white chocolate shell, tart yuzu curd, black sesame sponge cake, matcha infused foam.',
    price: 25,
    dietary: ['V', 'GF'],
    pairing: 'Umeshu Plum Wine, Yamazaki Reserve'
  },
  {
    id: 'dessert-4',
    name: 'Tahitian Vanilla & Fig Panna Cotta',
    category: 'desserts',
    description: 'Silky double cream panna cotta infused with Tahitian vanilla beans, port-poached mission figs, candied hazelnut.',
    price: 24,
    dietary: ['GF', 'V'],
    pairing: 'Royal Tokaji 5 Puttonyos 2017'
  },
  {
    id: 'dessert-5',
    name: 'Smoked Sicilian Pistachio Soufflé',
    category: 'desserts',
    description: 'Warm Bronte pistachio soufflé, molten center, served with cold cardamom milk ice cream and gold leaf.',
    price: 28,
    dietary: ['V', 'Chef Signature'],
    pairing: 'Recioto di Soave, Pieropan 2018'
  },

  // Drinks & Cocktails
  {
    id: 'drink-1',
    name: 'The Nocturne Old Fashioned',
    category: 'drinks',
    description: 'Michter’s 10 Year Bourbon, black truffle-infused maple, smoked cherrywood bitters, 24k gold leaf ice block.',
    price: 26,
    dietary: ['Chef Signature']
  },
  {
    id: 'drink-2',
    name: 'Mayfair Botanical Martini',
    category: 'drinks',
    description: 'Monkey 47 Gin, vermouth dry blend, clarified bergamot, lemon oil essence, castelvetrano olive sphere.',
    price: 24
  },
  {
    id: 'drink-3',
    name: 'Hibiki Japanese Mizunara Highball',
    category: 'drinks',
    description: 'Hibiki Japanese Harmony, artisanal super-dense hand-carved ice, sparkling mountain spring water, yuzu peel.',
    price: 25,
    dietary: ['Chef Signature']
  },
  {
    id: 'drink-4',
    name: 'Velvet Midnight (Zero-Proof)',
    category: 'drinks',
    description: 'Cold-extracted blackberry, lapsang souchong smoked tea, roasted vanilla, clarified citrus cordial.',
    price: 18,
    dietary: ['VG']
  },
  {
    id: 'drink-5',
    name: 'LUMORA Imperial Reserve Champagne',
    category: 'drinks',
    description: 'Vintage 2012 Grand Cru Brut, delicate brioche notes, refined effervescence, toasted hazelnut finish.',
    price: 45
  },
  {
    id: 'drink-6',
    name: 'Château d’Yquem Sauternes 2009 (Glass)',
    category: 'drinks',
    description: 'Legendary premier cru supérieur sweet wine, apricot compote, honeycomb, and crystallised orange peel.',
    price: 68
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-interior',
    title: 'The Nocturnal Main Salon',
    category: 'interior',
    categoryLabel: 'Restaurant Interior',
    description: 'Sculpted Italian leather banquettes beneath smoky blown glass chandeliers and dark brushed bronze acoustics.',
    image: heroDiningImg
  },
  {
    id: 'gal-chef',
    title: 'The Master at Work',
    category: 'chef',
    categoryLabel: 'Executive Chef',
    description: 'Executive Chef Matteo Vane conducting final garnish adjustments with micro herbs and culinary gold leaf.',
    image: chefPlatingImg
  },
  {
    id: 'gal-prep',
    title: 'Elemental Hearth & Embers',
    category: 'prep',
    categoryLabel: 'Food Preparation',
    description: 'One-thousand-degree Japanese binchotan charcoal coals searing wild Scottish langoustines to locked-in perfection.',
    image: foodPrepFlameImg
  },
  {
    id: 'gal-table',
    title: 'Private Cellar Dining Table',
    category: 'table',
    categoryLabel: 'Dining Table',
    description: 'A hand-hewn dark walnut banquet table set with Austrian Riedel crystal stems, warm candlelight, and silver service.',
    image: cellarDiningImg
  },
  {
    id: 'gal-ambience',
    title: 'Nocturnal Mayfair Ambience',
    category: 'ambience',
    categoryLabel: 'Evening Ambience',
    description: 'Intimate candlelit shadows, discrete jazz vinyl acoustics, and the clandestine elegance of London nightfall.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  }
];

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  image: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'main-salon',
    title: 'The Nocturnal Main Salon',
    subtitle: 'Sensory Grandeur',
    description: 'Low-slung Italian leather booths set beneath suspended brass constellations and hand-blown smoky glass. Designed for intimate acoustic warmth and cinematic nocturnal energy.',
    capacity: 'Up to 34 guests · A La Carte & 7-Course Tasting',
    image: heroDiningImg
  },
  {
    id: 'wine-vault',
    title: 'The Sommelier’s Secret Cellar',
    subtitle: 'Private Reserve Dining',
    description: 'Carved behind 200-year-old stone arches, surrounded by 1,400 rare vintages. Features a hand-hewn walnut banquet table and customized wine pairings with the Head Sommelier.',
    capacity: 'Private bookings · 8 to 14 guests',
    image: cellarDiningImg
  },
  {
    id: 'hearth-counter',
    title: 'The Chef’s Open Hearth',
    subtitle: 'Culinary Front Row',
    description: 'Sit millimeters from the binchotan embers and live charcoal smoke. Watch Chef Matteo Vane and his brigade curate every plate in real time with interactive courses.',
    capacity: '8 seats only · 10-Course Avant-Garde Tasting',
    image: foodPrepFlameImg
  },
  {
    id: 'cocktail-atelier',
    title: 'The Obsidian Bar & Lounge',
    subtitle: 'Late-Night Mixology',
    description: 'An onyx bar where rare Japanese whiskies and bespoke botanical infusions take center stage. Ideal for pre-dinner aperitifs or midnight digestifs with curated jazz vinyl.',
    capacity: 'Walk-ins welcome · Cocktails & Small Bites',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
  }
];
