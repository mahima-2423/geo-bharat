import { StateData } from '../types';

export const STATES_DATA: Record<string, Omit<StateData, 'path' | 'labelPos'>> = {
  'IN-AP': {
    id: 'IN-AP',
    shortCode: 'AP',
    name: 'Andhra Pradesh',
    nativeName: 'ఆంధ్రప్రదేశ్',
    type: 'State',
    region: 'South',
    capital: 'Amaravati',
    famousFood: {
      name: 'Gongura Pachadi & Pulihora',
      emoji: '🍛',
      description: 'Tangy sorrel leaves chutney paired with steaming rice, ghee, and traditional tamarind rice.',
      tag: 'Spicy & Tangy Delicacy'
    },
    languages: ['Telugu', 'Urdu', 'English'],
    primaryLanguage: 'Telugu',
    greeting: {
      phrase: 'Namaskaram! (నమస్కారం)',
      meaning: 'Warm Greetings',
      script: 'నమస్కారం'
    },
    funFact: 'Home to Sriharikota Space Center (SDSC SHAR), where all of India’s historic Chandrayaan and Mangalyaan space missions lift off into the cosmos!',
    famousLandmark: 'Tirupati Venkateswara Temple & Araku Valley',
    knownAs: 'The Egg Bowl of India & Koh-i-Noor of India',
    colorTheme: '#FF9933'
  },
  'IN-AR': {
    id: 'IN-AR',
    shortCode: 'AR',
    name: 'Arunachal Pradesh',
    nativeName: 'अरुणाचल प्रदेश',
    type: 'State',
    region: 'North East',
    capital: 'Itanagar',
    famousFood: {
      name: 'Thukpa & Bamboo Shoot Fry',
      emoji: '🍜',
      description: 'Hearty Tibetan noodle soup packed with fresh mountain vegetables and fragrant stir-fried tender bamboo shoots.',
      tag: 'Himalayan Comfort'
    },
    languages: ['English', 'Nishi', 'Adi', 'Hindi'],
    primaryLanguage: 'English & Indigenous tribal dialects',
    greeting: {
      phrase: 'Khamani! / Tashi Delek!',
      meaning: 'Blessings & Peace',
      script: 'བཀྲ་ཤིས་བདེ་ལེགས'
    },
    funFact: 'Known as the "Land of Dawn-Lit Mountains", it is the very first territory in India to witness the rising sun each morning at Dong Valley!',
    famousLandmark: 'Tawang Monastery (India’s largest monastery)',
    knownAs: 'Orchid Paradise of India',
    colorTheme: '#138808'
  },
  'IN-AS': {
    id: 'IN-AS',
    shortCode: 'AS',
    name: 'Assam',
    nativeName: 'অসম',
    type: 'State',
    region: 'North East',
    capital: 'Dispur',
    famousFood: {
      name: 'Khaar & Masor Tenga',
      emoji: '🐟',
      description: 'Signature alkaline raw papaya preparation followed by a refreshing tangy river fish curry seasoned with lemon and tomatoes.',
      tag: 'Traditional Ahom Cuisine'
    },
    languages: ['Assamese', 'Bodo', 'Bengali'],
    primaryLanguage: 'Assamese',
    greeting: {
      phrase: 'Nomoskar! (নমস্কাৰ)',
      meaning: 'Welcome with folded hands',
      script: 'নমস্কাৰ'
    },
    funFact: 'Produces world-famous Assam black tea and hosts Majuli, the world’s largest river island nestled in the mighty Brahmaputra river!',
    famousLandmark: 'Kaziranga National Park (Home of the One-horned Rhino)',
    knownAs: 'Gateway to the North East',
    colorTheme: '#2E7D32'
  },
  'IN-BR': {
    id: 'IN-BR',
    shortCode: 'BR',
    name: 'Bihar',
    nativeName: 'बिहार',
    type: 'State',
    region: 'East',
    capital: 'Patna',
    famousFood: {
      name: 'Litti Chokha & Thekua',
      emoji: '🧆',
      description: 'Roasted wheat balls stuffed with spiced sattu (roasted gram flour) dipped in pure desi ghee and served with charred eggplant mash.',
      tag: 'Ancient Rustic Treat'
    },
    languages: ['Hindi', 'Maithili', 'Bhojpuri', 'Magahi'],
    primaryLanguage: 'Hindi & Maithili',
    greeting: {
      phrase: 'Pranaam! / God Lagi (प्रणाम)',
      meaning: 'Respectful Greetings',
      script: 'प्रणाम'
    },
    funFact: 'Birthplace of both Buddhism and Jainism, and home to Nalanda University (5th century CE), one of the earliest residential universities in recorded human history!',
    famousLandmark: 'Mahabodhi Temple Complex at Bodh Gaya',
    knownAs: 'Land of Viharas & Ancient Wisdom',
    colorTheme: '#D97706'
  },
  'IN-CT': {
    id: 'IN-CT',
    shortCode: 'CG',
    name: 'Chhattisgarh',
    nativeName: 'छत्तीसगढ़',
    type: 'State',
    region: 'Central',
    capital: 'Raipur',
    famousFood: {
      name: 'Chila, Muthia & Fara',
      emoji: '🥟',
      description: 'Crisp rice-batter crepes and steamed seasoned rice dumplings served with tangy roasted tomato-garlic chutney.',
      tag: 'Wholesome Rice Specialty'
    },
    languages: ['Chhattisgarhi', 'Hindi'],
    primaryLanguage: 'Chhattisgarhi',
    greeting: {
      phrase: 'Jai Johar! (जय जोहार)',
      meaning: 'Honor to Nature and Humanity',
      script: 'जय जोहार'
    },
    funFact: 'Known as the "Rice Bowl of Central India", housing over 20,000 traditional rice varieties and the spectacular Chitrakote "Niagara of India" waterfalls!',
    famousLandmark: 'Chitrakote Falls & Bastar Tribal Craft Villages',
    knownAs: 'The Rice Bowl of India',
    colorTheme: '#15803D'
  },
  'IN-GA': {
    id: 'IN-GA',
    shortCode: 'GA',
    name: 'Goa',
    nativeName: 'गोंय',
    type: 'State',
    region: 'West',
    capital: 'Panaji',
    famousFood: {
      name: 'Goan Fish Curry & Bebinca',
      emoji: '🥥',
      description: 'Tangy coconut and kokum fish curry paired with steaming red rice, followed by a decadent multi-layered Indo-Portuguese pudding.',
      tag: 'Coastal Portuguese Fusion'
    },
    languages: ['Konkani', 'Marathi', 'English'],
    primaryLanguage: 'Konkani',
    greeting: {
      phrase: 'Dev Borem Korum! (देव बरें करूं)',
      meaning: 'May God Bless You',
      script: 'देव बरें करूं'
    },
    funFact: 'India’s smallest state by geographic area, boasting 105 km of sun-kissed Arabian Sea coastline and highest per capita income!',
    famousLandmark: 'Basilica of Bom Jesus & Dudhsagar Falls',
    knownAs: 'Pearl of the Orient',
    colorTheme: '#0284C7'
  },
  'IN-GJ': {
    id: 'IN-GJ',
    shortCode: 'GJ',
    name: 'Gujarat',
    nativeName: 'ગુજરાત',
    type: 'State',
    region: 'West',
    capital: 'Gandhinagar',
    famousFood: {
      name: 'Dhokla, Khandvi & Undhiyu',
      emoji: '🥮',
      description: 'Steamed spongy gram flour cakes, delicate rolled gram noodles with mustard seeds, and slow-cooked winter vegetable potpourri.',
      tag: 'Sweet & Savory Gastronomy'
    },
    languages: ['Gujarati', 'Hindi'],
    primaryLanguage: 'Gujarati',
    greeting: {
      phrase: 'Kem Cho? - Majama! (કેમ છો?)',
      meaning: 'How are you? I am joyful!',
      script: 'કેમ છો'
    },
    funFact: 'Has India’s longest coastline (~1,600 km) and is the only sanctuary on Earth where wild Asiatic Lions roam freely in Gir Forest!',
    famousLandmark: 'Statue of Unity (World’s Tallest Statue - 182m) & Rann of Kutch',
    knownAs: 'Jewel of Western India',
    colorTheme: '#EA580C'
  },
  'IN-HR': {
    id: 'IN-HR',
    shortCode: 'HR',
    name: 'Haryana',
    nativeName: 'हरियाणा',
    type: 'State',
    region: 'North',
    capital: 'Chandigarh',
    famousFood: {
      name: 'Bajra Khichdi & Kadhi Pakora',
      emoji: '🍲',
      description: 'Slow-cooked pearl millet porridge with homemade white butter (makkhan) and creamy turmeric spiced buttermilk kadhi.',
      tag: 'Hearty Rustic Harvest'
    },
    languages: ['Haryanvi', 'Hindi', 'Punjabi'],
    primaryLanguage: 'Haryanvi & Hindi',
    greeting: {
      phrase: 'Ram Ram Ji! (राम राम जी)',
      meaning: 'Respectful Traditional Greeting',
      script: 'राम राम जी'
    },
    funFact: 'Manufactures over 50% of India’s cars and two-wheelers, and holds Kurukshetra, the historic setting of the epic Mahabharata!',
    famousLandmark: 'Brahma Sarovar & Sultanpur Bird Sanctuary',
    knownAs: 'Green Land of Sports Champions',
    colorTheme: '#16A34A'
  },
  'IN-HP': {
    id: 'IN-HP',
    shortCode: 'HP',
    name: 'Himachal Pradesh',
    nativeName: 'हिमाचल प्रदेश',
    type: 'State',
    region: 'North',
    capital: 'Shimla (Summer) / Dharamshala (Winter)',
    famousFood: {
      name: 'Dham & Siddu',
      emoji: '🍞',
      description: 'Royal festive feast cooked without onions/garlic, and steamed wheat flour buns filled with crushed poppy seeds and walnuts.',
      tag: 'Royal Mountain Banquet'
    },
    languages: ['Hindi', 'Pahari', 'Kangri'],
    primaryLanguage: 'Hindi & Pahari dialects',
    greeting: {
      phrase: 'Namaste! / Jai Dev! (नमस्ते)',
      meaning: 'Salutations in the Abode of Gods',
      script: 'नमस्ते'
    },
    funFact: 'Home to the world’s highest post office in Hikkim (14,567 ft) and the longest highway tunnel above 10,000 ft: the Atal Tunnel (9.02 km)!',
    famousLandmark: 'Atal Tunnel, Spiti Valley & Rohtang Pass',
    knownAs: 'Dev Bhoomi (Abode of Gods) & Apple State',
    colorTheme: '#0284C7'
  },
  'IN-JH': {
    id: 'IN-JH',
    shortCode: 'JH',
    name: 'Jharkhand',
    nativeName: 'झारखंड',
    type: 'State',
    region: 'East',
    capital: 'Ranchi',
    famousFood: {
      name: 'Dhuska with Ghugni & Rugda Curry',
      emoji: '🍘',
      description: 'Crispy deep-fried rice & lentil patties served with spicy black chickpea curry and rare indigenous forest mushroom stew.',
      tag: 'Tribal Mineral Cuisine'
    },
    languages: ['Hindi', 'Santali', 'Mundari', 'Nagpuri'],
    primaryLanguage: 'Hindi & Santali',
    greeting: {
      phrase: 'Johar! (जोहार)',
      meaning: 'Universal Greeting of Respect and Harmony',
      script: 'जोहार'
    },
    funFact: 'Accounts for over 40% of India’s mineral wealth and is home to Parasnath Hill, the highest mountain in Jharkhand and premier Jain sacred pilgrimage site!',
    famousLandmark: 'Hundru Falls, Betla National Park & Parasnath',
    knownAs: 'The Land of Forests (Vananchal)',
    colorTheme: '#059669'
  },
  'IN-KA': {
    id: 'IN-KA',
    shortCode: 'KA',
    name: 'Karnataka',
    nativeName: 'ಕರ್ನಾಟಕ',
    type: 'State',
    region: 'South',
    capital: 'Bengaluru',
    famousFood: {
      name: 'Bisi Bele Bath & Mysore Pak',
      emoji: '🍲',
      description: 'Piping hot spiced rice-lentil blend with tamarind and nutmeg, finished with melt-in-the-mouth royal ghee gram flour fudge.',
      tag: 'Royal Heritage Gastronomy'
    },
    languages: ['Kannada', 'Tulu', 'Kodava', 'Konkani'],
    primaryLanguage: 'Kannada',
    greeting: {
      phrase: 'Namaskara! (ನಮಸ್ಕಾರ)',
      meaning: 'Warm Reverence and Greetings',
      script: 'ನಮಸ್ಕಾರ'
    },
    funFact: 'Bengaluru is the "Silicon Valley of Asia", and Karnataka was the first place in India where coffee beans were planted in 1670 at Chikmagalur!',
    famousLandmark: 'Hampi UNESCO Ruins, Mysore Palace & Gol Gumbaz',
    knownAs: 'One State, Many Worlds',
    colorTheme: '#CA8A04'
  },
  'IN-KL': {
    id: 'IN-KL',
    shortCode: 'KL',
    name: 'Kerala',
    nativeName: 'കേരളം',
    type: 'State',
    region: 'South',
    capital: 'Thiruvananthapuram',
    famousFood: {
      name: 'Onam Sadya & Appam with Stew',
      emoji: '🍌',
      description: 'Elaborate 26-dish vegetarian banquet served on a plantain leaf, along with fluffy fermented rice pancakes and coconut milk vegetable stew.',
      tag: 'Spicy Coconut Paradise'
    },
    languages: ['Malayalam', 'English'],
    primaryLanguage: 'Malayalam',
    greeting: {
      phrase: 'Namaskaram! (നമസ്കാരം)',
      meaning: 'Salutations from the Soul',
      script: 'നമസ്കാരം'
    },
    funFact: 'India’s top state in literacy (>96%), highest human development index (HDI), and highest life expectancy, famed for tranquil backwaters!',
    famousLandmark: 'Alleppey Houseboat Backwaters & Munnar Tea Estates',
    knownAs: "God's Own Country",
    colorTheme: '#15803D'
  },
  'IN-MP': {
    id: 'IN-MP',
    shortCode: 'MP',
    name: 'Madhya Pradesh',
    nativeName: 'मध्य प्रदेश',
    type: 'State',
    region: 'Central',
    capital: 'Bhopal',
    famousFood: {
      name: 'Poha Jalebi & Dal Bafla',
      emoji: '🥣',
      description: 'Light spiced flattened rice garnished with sev and pomegranate paired with crispy syrupy jalebis and boiled-then-baked ghee dough balls.',
      tag: 'Heart of India Staples'
    },
    languages: ['Hindi', 'Malwi', 'Nimadi', 'Bundeli'],
    primaryLanguage: 'Hindi',
    greeting: {
      phrase: 'Ram Ram! / Namaste (नमस्ते)',
      meaning: 'Traditional Respectful Welcome',
      script: 'नमस्ते'
    },
    funFact: 'Known as the "Tiger State" of India with over 780 wild tigers across premier reserves like Kanha, Bandhavgarh, and Pench!',
    famousLandmark: 'Khajuraho Temples, Sanchi Stupa & Gwalior Fort',
    knownAs: 'The Heart of Incredible India',
    colorTheme: '#D97706'
  },
  'IN-MH': {
    id: 'IN-MH',
    shortCode: 'MH',
    name: 'Maharashtra',
    nativeName: 'महाराष्ट्र',
    type: 'State',
    region: 'West',
    capital: 'Mumbai',
    famousFood: {
      name: 'Vada Pav, Puran Poli & Misal Pav',
      emoji: '🍔',
      description: 'Iconic spicy potato fritter nestled inside soft bread with garlic chutney, spicy sprouted bean gravy, and sweet cardamom lentil flatbreads.',
      tag: 'Mumbai Street to Royal Maratha'
    },
    languages: ['Marathi', 'Hindi', 'Konkani'],
    primaryLanguage: 'Marathi',
    greeting: {
      phrase: 'Namaskar! / Jai Maharashtra! (नमस्कार)',
      meaning: 'Respectful Greetings and Pride',
      script: 'नमस्कार'
    },
    funFact: 'Home to the Lonar Lake, the world’s only hyper-velocity impact crater lake formed in basalt rock by a meteorite collision ~52,000 years ago!',
    famousLandmark: 'Ajanta & Ellora Caves, Gateway of India & Raigad Fort',
    knownAs: 'Gateway to Modern India & Financial Capital',
    colorTheme: '#EA580C'
  },
  'IN-MN': {
    id: 'IN-MN',
    shortCode: 'MN',
    name: 'Manipur',
    nativeName: 'মণিপুর',
    type: 'State',
    region: 'North East',
    capital: 'Imphal',
    famousFood: {
      name: 'Kangshoi & Chak-hao Kheer',
      emoji: '🍚',
      description: 'Delicate seasoned vegetable and dried fish broth served with fragrant, naturally purple organic black rice pudding.',
      tag: 'Exotic Organic Delicacy'
    },
    languages: ['Manipuri (Meitei)', 'English'],
    primaryLanguage: 'Manipuri (Meitei)',
    greeting: {
      phrase: 'Khurumjari! (খুরুমজরি)',
      meaning: 'I bow to you in warm greeting',
      script: 'খুরুমজরি'
    },
    funFact: 'Hosts Keibul Lamjao, the world’s only floating national park on Loktak Lake, preserving the rare brow-antlered dancing deer (Sangai)!',
    famousLandmark: 'Loktak Lake (Floating Phumdis) & Kangla Fort',
    knownAs: 'The Jewel City of India',
    colorTheme: '#0D9488'
  },
  'IN-ML': {
    id: 'IN-ML',
    shortCode: 'ML',
    name: 'Meghalaya',
    nativeName: 'मेघालय',
    type: 'State',
    region: 'North East',
    capital: 'Shillong',
    famousFood: {
      name: 'Jadoh & Dohneiiong',
      emoji: '🍛',
      description: 'Flavorsome indigenous red hill rice cooked with aromatic herbs, accompanied by savory pork prepared with black sesame paste.',
      tag: 'Khasi Traditional Feast'
    },
    languages: ['English', 'Khasi', 'Garo', 'Pnar'],
    primaryLanguage: 'English, Khasi & Garo',
    greeting: {
      phrase: 'Khublei Shibun! (Khublei)',
      meaning: 'Thank you and Blessings upon you',
      script: 'Khublei Shibun'
    },
    funFact: 'Mawsynram in Meghalaya holds the Guinness World Record as the wettest place on Earth with ~11,872 mm annual rainfall, where locals cultivate centuries-old living root bridges!',
    famousLandmark: 'Double Decker Living Root Bridge & Nohkalikai Falls',
    knownAs: 'Abode of the Clouds & Scotland of the East',
    colorTheme: '#0284C7'
  },
  'IN-MZ': {
    id: 'IN-MZ',
    shortCode: 'MZ',
    name: 'Mizoram',
    nativeName: 'मिज़ोरम',
    type: 'State',
    region: 'North East',
    capital: 'Aizawl',
    famousFood: {
      name: 'Bai & Koat Pitha',
      emoji: '🍲',
      description: 'Nutritious steamed seasonal greens, mustard leaves, and bamboo shoots stewed without spices, paired with crispy banana-rice fritters.',
      tag: 'Pure Herbal Mountain Cuisine'
    },
    languages: ['Mizo', 'English'],
    primaryLanguage: 'Mizo & English',
    greeting: {
      phrase: 'Chibai! (Chibai)',
      meaning: 'Warm and heartfelt Hello',
      script: 'Chibai'
    },
    funFact: 'Boasts one of India’s highest forest cover densities (>85% land area) and is famous for the intricate rhythmic Cheraw bamboo dance!',
    famousLandmark: 'Vantawng Falls & Reiek Tlang Peak',
    knownAs: 'Land of the Blue Mountains (Zoram)',
    colorTheme: '#16A34A'
  },
  'IN-NL': {
    id: 'IN-NL',
    shortCode: 'NL',
    name: 'Nagaland',
    nativeName: 'नागालैंड',
    type: 'State',
    region: 'North East',
    capital: 'Kohima',
    famousFood: {
      name: 'Smoked Pork with Axone & Bamboo Shoot',
      emoji: '🥩',
      description: 'Slow-smoked cured meat simmered with fermented soybean paste (Axone) and fiery Raja Mircha (Ghost Pepper chili).',
      tag: 'Fiery Tribal Heritage'
    },
    languages: ['English', 'Nagamese', 'Ao', 'Angami'],
    primaryLanguage: 'English & Nagamese',
    greeting: {
      phrase: 'Aroho! / Shalom!',
      meaning: 'Welcome and Peace be upon you',
      script: 'Aroho'
    },
    funFact: 'Celebrated as the "Land of Festivals", its annual Hornbill Festival in December unites 16 vibrant indigenous Naga tribes in a grand cultural carnival!',
    famousLandmark: 'Dzukou Valley & Kisama Heritage Village',
    knownAs: 'Land of Festivals',
    colorTheme: '#DC2626'
  },
  'IN-OR': {
    id: 'IN-OD',
    shortCode: 'OD',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    type: 'State',
    region: 'East',
    capital: 'Bhubaneswar',
    famousFood: {
      name: 'Chhena Poda & Dalma',
      emoji: '🍮',
      description: 'India’s original caramelized baked cottage cheese cheesecake, and lentils stewed with raw papaya, pumpkin, and roasted cumin.',
      tag: 'Temple Heritage Flavors'
    },
    languages: ['Odia', 'Santali', 'Hindi'],
    primaryLanguage: 'Odia',
    greeting: {
      phrase: 'Namaskara! / Jai Jagannath! (ନମସ୍କାର)',
      meaning: 'Hail Lord Jagannath & Warm Welcome',
      script: 'ନମସ୍କାର'
    },
    funFact: 'Origin of the classical Odissi dance and Puri’s sacred Rath Yatra (Chariot Festival), which has been celebrated uninterrupted for over a millennium!',
    famousLandmark: 'Konark Sun Temple (UNESCO) & Puri Jagannath Temple',
    knownAs: 'Soul of Incredible India',
    colorTheme: '#D97706'
  },
  'IN-PB': {
    id: 'IN-PB',
    shortCode: 'PB',
    name: 'Punjab',
    nativeName: 'ਪੰਜਾਬ',
    type: 'State',
    region: 'North',
    capital: 'Chandigarh',
    famousFood: {
      name: 'Makki Di Roti with Sarson Ka Saag',
      emoji: '🫓',
      description: 'Slow-simmered spiced mustard greens topped with white churned butter, served with crisp cornmeal flatbreads and jaggery.',
      tag: 'Golden Harvest Royalty'
    },
    languages: ['Punjabi', 'Hindi', 'English'],
    primaryLanguage: 'Punjabi',
    greeting: {
      phrase: 'Sat Sri Akal! (ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ)',
      meaning: 'Truth is the Timeless Ultimate Reality',
      script: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ'
    },
    funFact: 'The Golden Temple in Amritsar runs the world’s largest community kitchen (Langar), serving over 100,000 free hot nutritious meals every single day!',
    famousLandmark: 'Golden Temple (Harmandir Sahib) & Wagah Border',
    knownAs: 'Granary of India & Land of Five Rivers',
    colorTheme: '#F59E0B'
  },
  'IN-RJ': {
    id: 'IN-RJ',
    shortCode: 'RJ',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    type: 'State',
    region: 'West',
    capital: 'Jaipur',
    famousFood: {
      name: 'Dal Baati Churma & Ghevar',
      emoji: '🍛',
      description: 'Baked wheat balls soaked in golden ghee, spicy mixed lentil stew, sweet crumbled wheat, and honeycomb disc dessert.',
      tag: 'Royal Rajputana Banquet'
    },
    languages: ['Hindi', 'Rajasthani', 'Marwari'],
    primaryLanguage: 'Hindi & Rajasthani dialects',
    greeting: {
      phrase: 'Khamma Ghani! (खम्मा घणी)',
      meaning: 'Many Warm Greetings and Respect',
      script: 'खम्मा घणी'
    },
    funFact: 'India’s largest state by area (342,239 sq km), home to the Thar Desert and the Aravalli Range, the oldest fold mountain range on planet Earth!',
    famousLandmark: 'Hawa Mahal, Amer Fort, Jaisalmer Golden Fort',
    knownAs: 'Land of Kings & Palaces',
    colorTheme: '#EA580C'
  },
  'IN-SK': {
    id: 'IN-SK',
    shortCode: 'SK',
    name: 'Sikkim',
    nativeName: 'सिक्किम',
    type: 'State',
    region: 'North East',
    capital: 'Gangtok',
    famousFood: {
      name: 'Momos, Thukpa & Gundruk Soup',
      emoji: '🥟',
      description: 'Steamed Himalayan dumplings with fiery red chili dip, comforting broth, and fermented sun-dried leafy greens soup.',
      tag: 'High Altitude Organic'
    },
    languages: ['Nepali', 'Sikkimese (Bhutia)', 'Lepcha', 'English'],
    primaryLanguage: 'Nepali & English',
    greeting: {
      phrase: 'Kuzu Zangpo La! / Namaste!',
      meaning: 'Auspicious Welcome to You',
      script: 'कुजु जाङ्पो ला'
    },
    funFact: 'Recognized by the UN FAO as the world’s first 100% certified organic state, crowned by Mt. Kangchenjunga (8,586m), the 3rd highest peak on Earth!',
    famousLandmark: 'Gurudongmar Lake, Nathu La Pass & Rumtek Monastery',
    knownAs: 'Valley of Rice (Denzong) & Orchid Kingdom',
    colorTheme: '#0D9488'
  },
  'IN-TN': {
    id: 'IN-TN',
    shortCode: 'TN',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    type: 'State',
    region: 'South',
    capital: 'Chennai',
    famousFood: {
      name: 'Masala Dosa, Idli-Sambar & Filter Coffee',
      emoji: '☕',
      description: 'Crisp fermented golden rice-lentil crepes filled with spiced potatoes, fluffy steamed cakes, and frothy chicory-blended brew in brass dabarah.',
      tag: 'Ancient Dravidian Heritage'
    },
    languages: ['Tamil', 'English'],
    primaryLanguage: 'Tamil',
    greeting: {
      phrase: 'Vanakkam! (வணக்கம்)',
      meaning: 'Salutations and Divine Respect',
      script: 'வணக்கம்'
    },
    funFact: 'Tamil is one of the world’s oldest continuously spoken and written classical languages, spanning over 2,500 years of recorded literature!',
    famousLandmark: 'Brihadisvara Temple (Thanjavur), Meenakshi Temple & Shore Temple',
    knownAs: 'Land of Temples & Classical Heritage',
    colorTheme: '#B45309'
  },
  'IN-TG': {
    id: 'IN-TG',
    shortCode: 'TG',
    name: 'Telangana',
    nativeName: 'తెలంగాణ',
    type: 'State',
    region: 'South',
    capital: 'Hyderabad',
    famousFood: {
      name: 'Hyderabadi Dum Biryani & Haleem',
      emoji: '🍲',
      description: 'Slow-cooked fragrant long-grain basmati rice and marinated meat sealed with dough in a handi, with rich pounded wheat-meat delicacy.',
      tag: 'Nizami Royal Splendor'
    },
    languages: ['Telugu', 'Urdu', 'Hindi'],
    primaryLanguage: 'Telugu & Urdu',
    greeting: {
      phrase: 'Namaskaram! / Adaab! (నమస్కారం)',
      meaning: 'Warmest Greetings and Honor',
      script: 'నమస్కారం'
    },
    funFact: 'Home to the 800-year-old Ramappa Temple (UNESCO), built with engineering genius using floating bricks so light they float on water!',
    famousLandmark: 'Charminar, Golconda Fort & Ramappa Temple',
    knownAs: 'The Seed Bowl of India & Cyberabad',
    colorTheme: '#D97706'
  },
  'IN-TR': {
    id: 'IN-TR',
    shortCode: 'TR',
    name: 'Tripura',
    nativeName: 'ত্রিপুরা',
    type: 'State',
    region: 'North East',
    capital: 'Agartala',
    famousFood: {
      name: 'Mui Borok & Chakhwi',
      emoji: '🥘',
      description: 'Traditional fermented fish delicacy (Berma) cooked without oil, and bamboo shoot stew seasoned with fragrant indigenous herbs.',
      tag: 'Indigenous Oil-Free Delicacy'
    },
    languages: ['Bengali', 'Kokborok', 'English'],
    primaryLanguage: 'Bengali & Kokborok',
    greeting: {
      phrase: 'Khulumkha! / Nomoskar! (নমস্কার)',
      meaning: 'Hearty Greetings and Welcomes',
      script: 'নমস্কার'
    },
    funFact: 'Surrounded by Bangladesh on 3 sides (~84% of its border) and boasts Neermahal, one of only two spectacular lake water palaces in India!',
    famousLandmark: 'Ujjayanta Palace, Neermahal & Unakoti Rock Carvings',
    knownAs: 'Land of Hills and Cane Craft',
    colorTheme: '#059669'
  },
  'IN-UP': {
    id: 'IN-UP',
    shortCode: 'UP',
    name: 'Uttar Pradesh',
    nativeName: 'उत्तर प्रदेश',
    type: 'State',
    region: 'North',
    capital: 'Lucknow',
    famousFood: {
      name: 'Galouti Kebab, Lucknowi Biryani & Bedmi Puri',
      emoji: '🍢',
      description: 'Melt-in-the-mouth smoked aromatic kebabs crafted with over 100 spices, fragrant Awadhi biryani, and crispy urad-dal stuffed puris with spicy potato curry.',
      tag: 'Awadhi & Braj Confectionery'
    },
    languages: ['Hindi', 'Urdu', 'Awadhi', 'Bhojpuri'],
    primaryLanguage: 'Hindi & Urdu',
    greeting: {
      phrase: 'Namaste! / Adaab! / Radhe Radhe! (नमस्ते)',
      meaning: 'Reverent Respect and Auspiciousness',
      script: 'नमस्ते'
    },
    funFact: 'India’s most populous state (~240 million citizens) and home to Varanasi (Kashi), one of the oldest continuously inhabited cities on Earth!',
    famousLandmark: 'Taj Mahal (Seven Wonders of the World), Varanasi Ghats & Fatehpur Sikri',
    knownAs: 'Heartland of India & Land of Epics',
    colorTheme: '#EA580C'
  },
  'IN-UT': {
    id: 'IN-UK',
    shortCode: 'UK',
    name: 'Uttarakhand',
    nativeName: 'उत्तराखंड',
    type: 'State',
    region: 'North',
    capital: 'Dehradun (Winter) / Gairsain (Summer)',
    famousFood: {
      name: 'Kafuli, Phaanu & Bal Mithai',
      emoji: '🥬',
      description: 'Silky spinach and fenugreek gravy cooked in iron skillets, tempered lentil stew, and brown roasted fudge coated in sugar pearls.',
      tag: 'Himalayan Organic Nutrition'
    },
    languages: ['Hindi', 'Garhwali', 'Kumaoni', 'Sanskrit'],
    primaryLanguage: 'Hindi, Garhwali & Kumaoni',
    greeting: {
      phrase: 'Namaskar Ji! / Bhala Re! (नमस्कार)',
      meaning: 'Salutations from the Holy Heights',
      script: 'नमस्कार'
    },
    funFact: 'Known as "Devbhoomi" (Land of the Gods), it is the sacred originating source of the holy rivers Ganga (at Gangotri glacier) and Yamuna (at Yamunotri)!',
    famousLandmark: 'Kedarnath Temple, Valley of Flowers (UNESCO) & Badrinath',
    knownAs: 'Devbhoomi (Abode of the Gods)',
    colorTheme: '#0284C7'
  },
  'IN-WB': {
    id: 'IN-WB',
    shortCode: 'WB',
    name: 'West Bengal',
    nativeName: 'পশ্চিমবঙ্গ',
    type: 'State',
    region: 'East',
    capital: 'Kolkata',
    famousFood: {
      name: 'Macher Jhol, Kosha Mangsho & Rosogolla',
      emoji: '🐟',
      description: 'Tender freshwater fish simmered in five-spice mustard broth, slow-braised rich mutton, and spongy cottage cheese balls soaked in light syrup.',
      tag: 'Epicurean Bengal Masterpiece'
    },
    languages: ['Bengali', 'English', 'Hindi'],
    primaryLanguage: 'Bengali',
    greeting: {
      phrase: 'Nomoshkar! (নমস্কার)',
      meaning: 'Welcome with Warmth and Intellect',
      script: 'নমস্কার'
    },
    funFact: 'Kolkata was the capital of British India until 1911 and is home to the Sundarbans, the world’s largest mangrove forest delta where Royal Bengal Tigers swim!',
    famousLandmark: 'Victoria Memorial, Howrah Bridge & Sundarbans (UNESCO)',
    knownAs: 'Cultural Capital of India',
    colorTheme: '#15803D'
  },

  // Union Territories
  'IN-AN': {
    id: 'IN-AN',
    shortCode: 'AN',
    name: 'Andaman & Nicobar Islands',
    nativeName: 'अंडमान और निकोबार द्वीप समूह',
    type: 'Union Territory',
    region: 'Islands & UTs',
    capital: 'Port Blair',
    famousFood: {
      name: 'Coconut Prawn Curry & Fish Amritsari',
      emoji: '🥥',
      description: 'Succulent fresh Arabian & Bay of Bengal seafood simmered with freshly grated island coconut, curry leaves, and coastal spices.',
      tag: 'Tropical Island Cuisine'
    },
    languages: ['Hindi', 'English', 'Bengali', 'Tamil'],
    primaryLanguage: 'Hindi & English',
    greeting: {
      phrase: 'Namaste! / Welcome to Emerald Islands!',
      meaning: 'Hearty Island Greetings',
      script: 'नमस्ते'
    },
    funFact: 'Home to Barren Island—the only active volcano in South Asia—and North Sentinel Island, home to one of the world’s last uncontacted hunter-gatherer tribes!',
    famousLandmark: 'Cellular Jail (Kala Pani), Radhanagar Beach (Havelock)',
    knownAs: 'Emerald Islands of India',
    colorTheme: '#0D9488'
  },
  'IN-CH': {
    id: 'IN-CH',
    shortCode: 'CH',
    name: 'Chandigarh',
    nativeName: 'ਚੰਡੀਗੜ੍ਹ',
    type: 'Union Territory',
    region: 'North',
    capital: 'Chandigarh',
    famousFood: {
      name: 'Amritsari Kulcha with Chhole & Lassi',
      emoji: '🫓',
      description: 'Crisp layered tandoor-baked flatbread stuffed with spiced potatoes and onions, served with tangy chickpea curry and tall glasses of sweet malai lassi.',
      tag: 'Urban Punjabi Gastronomy'
    },
    languages: ['Punjabi', 'Hindi', 'English'],
    primaryLanguage: 'Punjabi & Hindi',
    greeting: {
      phrase: 'Sat Sri Akal! / Welcome to the City Beautiful',
      meaning: 'Grace and Orderly Warmth',
      script: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ'
    },
    funFact: 'India’s first planned modern city post-independence, designed by famed Swiss-French architect Le Corbusier, serving as joint capital for both Punjab and Haryana!',
    famousLandmark: 'Rock Garden (built from urban waste) & Sukhna Lake',
    knownAs: 'The City Beautiful',
    colorTheme: '#059669'
  },
  'IN-DN': {
    id: 'IN-DN',
    shortCode: 'DN',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    nativeName: 'दादरा और नगर हवेली और दमन और दीव',
    type: 'Union Territory',
    region: 'West',
    capital: 'Daman',
    famousFood: {
      name: 'Crab Xacuti & Parsi Peda',
      emoji: '🦀',
      description: 'Rich spiced coconut coastal crab curry paired with warm flatbreads and traditional Gujarati-Parsi milk sweets.',
      tag: 'Indo-Portuguese Coastal Fusion'
    },
    languages: ['Gujarati', 'Hindi', 'Konkani', 'Portuguese'],
    primaryLanguage: 'Gujarati & Hindi',
    greeting: {
      phrase: 'Kem Cho! / Olá!',
      meaning: 'How are you! Friendly Coastal Hello',
      script: 'કેમ છો'
    },
    funFact: 'Preserves over 450 years of Portuguese colonial history with grand stone ramparts, historic lighthouses, and pristine palm-fringed Arabian sea shores!',
    famousLandmark: 'Diu Fort, Moti Daman Fort & Jampore Beach',
    knownAs: 'Twin Coastal Enclaves',
    colorTheme: '#0284C7'
  },
  'IN-DL': {
    id: 'IN-DL',
    shortCode: 'DL',
    name: 'Delhi (NCT)',
    nativeName: 'दिल्ली',
    type: 'Union Territory',
    region: 'North',
    capital: 'New Delhi',
    famousFood: {
      name: 'Chhole Bhature & Paranthe Wali Gali Paranthas',
      emoji: '🥘',
      description: 'Puffy deep-fried sourdough breads with robust spiced chickpeas and pickles, along with fried flatbreads stuffed with khoya, paneer, and crushed spices.',
      tag: 'Capital Street Food Heritage'
    },
    languages: ['Hindi', 'Punjabi', 'Urdu', 'English'],
    primaryLanguage: 'Hindi & English',
    greeting: {
      phrase: 'Namaste! / Dilli Se Hain Hum!',
      meaning: 'Warm Welcome from the Capital',
      script: 'नमस्ते'
    },
    funFact: 'Has been continuously inhabited for over 2,500 years through 8 historic cities, and houses three UNESCO World Heritage Sites: Qutub Minar, Humayun’s Tomb, and the Red Fort!',
    famousLandmark: 'India Gate, Red Fort, Qutub Minar & Lotus Temple',
    knownAs: 'Dilwalon Ki Dilli (City of the Big-Hearted)',
    colorTheme: '#DC2626'
  },
  'IN-JK': {
    id: 'IN-JK',
    shortCode: 'JK',
    name: 'Jammu & Kashmir',
    nativeName: 'جموں و کشمیر',
    type: 'Union Territory',
    region: 'North',
    capital: 'Srinagar (Summer) / Jammu (Winter)',
    famousFood: {
      name: 'Kashmiri Rogan Josh, Gushtaba & Kahwa Tea',
      emoji: '🫖',
      description: 'Aromatic tender mutton slow-cooked with Kashmiri dried chilies and cockscomb flower, and fragrant saffron green tea brewed with crushed almonds and cardamom.',
      tag: 'Imperial Wazwan Banquet'
    },
    languages: ['Kashmiri', 'Dogri', 'Urdu', 'Hindi'],
    primaryLanguage: 'Kashmiri & Dogri',
    greeting: {
      phrase: 'Adaab / As-salamu alaykum! / Jai Jai Shri Mataji (آداب)',
      meaning: 'Peace and Blessings upon you',
      script: 'آداب'
    },
    funFact: 'Produces the world’s most precious and aromatic Saffron (Kesar) in Pampore fields, and features Dal Lake’s iconic wooden houseboats and floating Shikara markets!',
    famousLandmark: 'Dal Lake Shikara, Gulmarg Gondola & Vaishno Devi Shrine',
    knownAs: 'Paradise on Earth',
    colorTheme: '#0284C7'
  },
  'IN-LA': {
    id: 'IN-LA',
    shortCode: 'LA',
    name: 'Ladakh',
    nativeName: 'ལ་དྭགས',
    type: 'Union Territory',
    region: 'North',
    capital: 'Leh',
    famousFood: {
      name: 'Skyu, Thukpa & Gur Gur Butter Tea',
      emoji: '🥟',
      description: 'Traditional hearty root-vegetable stew with hand-shaped thumb pasta dumplings, paired with salted churned yak-butter pink tea.',
      tag: 'High Alpine Survival Food'
    },
    languages: ['Ladakhi (Bhoti)', 'Tibetan', 'Hindi', 'English'],
    primaryLanguage: 'Ladakhi & English',
    greeting: {
      phrase: 'Julley! (ཇུ་ལེགས་)',
      meaning: 'Hello, Goodbye, Thank You, and Blessings',
      script: 'ཇུ་ལེགས་'
    },
    funFact: 'Hosts Umling La Pass at 19,024 feet (5,798 m)—the highest motorable paved road on Earth—and the mystical gravity-defying Magnetic Hill!',
    famousLandmark: 'Pangong Tso Lake, Nubra Valley & Thiksey Monastery',
    knownAs: 'The Land of High Passes (Moonland)',
    colorTheme: '#7C3AED'
  },
  'IN-LD': {
    id: 'IN-LD',
    shortCode: 'LD',
    name: 'Lakshadweep',
    nativeName: 'ലക്ഷദ്വീപ്',
    type: 'Union Territory',
    region: 'Islands & UTs',
    capital: 'Kavaratti',
    famousFood: {
      name: 'Tuna Mus Kavaab & Coconut Sweet Halwa',
      emoji: '🐟',
      description: 'Marinated skipjack tuna fillets skewered and roasted with ground island spices, accompanied by fresh jaggery-coconut sweets.',
      tag: 'Coral Atoll Seafood'
    },
    languages: ['Malayalam', 'Jeseri', 'Mahl'],
    primaryLanguage: 'Malayalam & Jeseri',
    greeting: {
      phrase: 'Namaskaram! / As-salamu alaykum!',
      meaning: 'Peaceful Island Greeting',
      script: 'നമസ്കാരം'
    },
    funFact: 'India’s smallest Union Territory with a total land area of just 32 sq km, made of 36 idyllic coral atolls surrounded by crystal-clear turquoise lagoons!',
    famousLandmark: 'Agatti Coral Reef, Bangaram Atoll & Kavaratti Lagoon',
    knownAs: 'The Coral Paradise of India',
    colorTheme: '#0D9488'
  },
  'IN-PY': {
    id: 'IN-PY',
    shortCode: 'PY',
    name: 'Puducherry',
    nativeName: 'புதுச்சேரி',
    type: 'Union Territory',
    region: 'South',
    capital: 'Pondicherry',
    famousFood: {
      name: 'Kadugu Yerra & French Croissants',
      emoji: '🥐',
      description: 'Prawns cooked in creamy coconut and piquant mustard paste, accompanied by artisanal French bakery baguettes and café au lait.',
      tag: 'Franco-Tamil Fusion'
    },
    languages: ['Tamil', 'French', 'English', 'Telugu', 'Malayalam'],
    primaryLanguage: 'Tamil & French',
    greeting: {
      phrase: 'Vanakkam! / Bonjour!',
      meaning: 'Good day and Warm Welcome',
      script: 'வணக்கம்'
    },
    funFact: 'Known as the "French Riviera of the East", it features cobblestone streets lined with pastel mustard villas and the universal peace city of Auroville (City of Dawn)!',
    famousLandmark: 'Matrimandir (Auroville), Promenade Beach & Sri Aurobindo Ashram',
    knownAs: 'The French Riviera of the East',
    colorTheme: '#F59E0B'
  }
};
