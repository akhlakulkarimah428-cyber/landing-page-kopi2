import { Product, BrewGuide, Testimonial, Article, FAQItem, TimelineStep } from './types';

// Impor gambar lokal atau referensi langsung.
export const HERO_IMAGE = '/src/assets/images/hero_coffee_cup_1783049629542.jpg';
export const PREMIUM_BAG_IMAGE = '/src/assets/images/coffee_beans_bag_1783049643047.jpg';
export const BREWING_POUR_OVER_IMAGE = '/src/assets/images/brewing_pour_over_1783049654742.jpg';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Sumatra Gayo Anaerobic Honey',
    nameEn: 'Sumatra Gayo Anaerobic Honey',
    origin: 'Indonesia, Dataran Tinggi Takengon',
    originEn: 'Indonesia, Takengon Highlands',
    roastLevel: 'Medium',
    flavorNotes: ['Beludru Merah', 'Markisa', 'Kayu Aras Manis', 'Gula Aren'],
    flavorNotesEn: ['Red Velvet', 'Passion Fruit', 'Sweet Cedar', 'Palm Sugar'],
    price: 14,
    description: 'Sebuah mahakarya dari Dataran Tinggi Gayo. Bersumber dari perkebunan organik teduh pada ketinggian 1.600 mdpl, lot mikro ini melalui fermentasi anaerobik selama 72 jam dalam tangki kedap udara, diikuti oleh pemrosesan honey. Menghasilkan body yang tebal dan bersirof dengan rasa buah tropis yang intens serta rempah halus.',
    descriptionEn: 'A masterpiece from the Gayo Highlands. Sourced from organic shade-grown estates at 1,600 masl, this micro-lot undergoes 72 hours of anaerobic fermentation in airtight tanks, followed by honey processing. Delivers a thick, syrupy mouthfeel with intense tropical fruits and delicate spices.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400',
    rating: 5.0,
    process: 'Anaerobic Honey',
    processEn: 'Anaerobic Honey',
    elevation: '1.600 mdpl',
    scaScore: 90.5,
    stockStatus: 'Limited',
    moisture: '11.1%',
    fobPriceRange: '$12.50 - $14.50 / kg',
    availableLots: '15 Karung (900 kg)',
    availableLotsEn: '15 Bags (900 kg)',
    defectCount: 'SCA Grade 1 (0 primary, < 3 secondary)',
    defectCountEn: 'SCA Grade 1 (0 primary, < 3 secondary)',
    bagType: 'Karung Rami 60kg dengan GrainPro',
    bagTypeEn: '60kg Jute Bag with GrainPro Liner'
  },
  {
    id: 'p2',
    name: 'Bali Kintamani Carbonic Maceration',
    nameEn: 'Bali Kintamani Carbonic Maceration',
    origin: 'Indonesia, Lereng Vulkanik Gunung Batur',
    originEn: 'Indonesia, Volcanic Slopes of Mount Batur',
    roastLevel: 'Light',
    flavorNotes: ['Bunga Jeruk', 'Selai Stroberi', 'Nibs Kakao', 'Krim Mangga'],
    flavorNotesEn: ['Orange Blossom', 'Strawberry Jam', 'Cacao Nibs', 'Mango Cream'],
    price: 16,
    description: 'Ditanam di tanah kaya mineral di Gunung Batur, lot single-estate varietas Bourbon & Typica ini menggunakan maserasi karbonik tingkat lanjut (tangki yang dialiri CO2) untuk menciptakan kemanisan buah yang cerah dan keasaman laktat yang kompleks. Hasil seduhan yang sangat bersih, sempurna untuk penyangrai kopi gelombang ketiga.',
    descriptionEn: 'Grown on mineral-rich volcanic soil on Mount Batur, this single-estate Bourbon & Typica lot uses advanced carbonic maceration (CO2 flushed tanks) to create sparkling fruit sweetness and complex lactic acidity. Extremely clean cup, perfect for third-wave specialty roasters.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400',
    rating: 4.9,
    process: 'Carbonic Maceration',
    processEn: 'Carbonic Maceration',
    elevation: '1.550 mdpl',
    scaScore: 91.0,
    stockStatus: 'Available',
    moisture: '11.3%',
    fobPriceRange: '$14.00 - $16.50 / kg',
    availableLots: '24 Karung (1.440 kg)',
    availableLotsEn: '24 Bags (1,440 kg)',
    defectCount: 'Tanpa Cacat Primer (Zero Defects)',
    defectCountEn: 'Zero Primary Defects',
    bagType: 'Kotak Vakum Hermetis 30kg',
    bagTypeEn: '30kg Airtight Vacuum Box'
  },
  {
    id: 'p3',
    name: 'Java Preanger Washed Estate',
    nameEn: 'Java Preanger Washed Estate',
    origin: 'Indonesia, Kawasan Vulkanik Jawa Barat',
    originEn: 'Indonesia, West Java Volcanic Region',
    roastLevel: 'Medium',
    flavorNotes: ['Teh Melati', 'Serai', 'Karamel Manis', 'Kranberi'],
    flavorNotesEn: ['Jasmine Tea', 'Lemongrass', 'Sweet Caramel', 'Cranberry'],
    price: 11,
    description: 'Cita rasa historis secangkir kopi "Aie". Diperoleh dari terasering vulkanik tertua di Jawa Barat, Java Preanger diproses secara double-washed untuk memberikan kejernihan rasa yang luar biasa, rasa di mulut yang menyerupai teh, dan aroma sitrus yang sangat lembut. Lot yang sangat stabil untuk blending kelas atas maupun espresso single-origin.',
    descriptionEn: 'The historic taste of a cup of "Aie". Sourced from the oldest volcanic terraces in West Java, Java Preanger is double-washed to provide outstanding flavor clarity, a tea-like body, and very refined citrus undertones. A highly stable lot for premium blending or single-origin espresso.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400',
    rating: 4.8,
    process: 'Double Washed',
    processEn: 'Double Washed',
    elevation: '1.650 mdpl',
    scaScore: 88.5,
    stockStatus: 'Available',
    moisture: '10.9%',
    fobPriceRange: '$9.50 - $11.50 / kg',
    availableLots: '40 Karung (2.400 kg)',
    availableLotsEn: '40 Bags (2,400 kg)',
    defectCount: 'SCA Grade 1 (Ekspor Premium)',
    defectCountEn: 'SCA Grade 1 (Premium Export)',
    bagType: 'Karung Rami 60kg dengan GrainPro',
    bagTypeEn: '60kg Jute Bag with GrainPro Liner'
  },
  {
    id: 'p4',
    name: 'Sulawesi Toraja Sapan Grade 1',
    nameEn: 'Sulawesi Toraja Sapan Grade 1',
    origin: 'Indonesia, Lereng Gunung Sesean',
    originEn: 'Indonesia, Slopes of Mount Sesean',
    roastLevel: 'Dark',
    flavorNotes: ['Truf Cokelat', 'Tetes Tebu', 'Kayu Cendana', 'Plum Matang'],
    flavorNotesEn: ['Chocolate Truffle', 'Molasses', 'Sandalwood', 'Ripe Plum'],
    price: 12,
    description: 'Lot warisan klasik dari Sulawesi Selatan. Diproduksi menggunakan pengupasan kering mikro-lot yang teliti. Kopi Sapan terkenal dengan bodinya yang tebal dan lembut, keasaman rendah, serta sentuhan kakao gelap yang pekat dan kayu cendana yang harum. Sangat direkomendasikan untuk portofolio sangrai gelap premium.',
    descriptionEn: 'A classic heritage lot from South Sulawesi. Produced using meticulous dry hulling for micro-lots. Sapan coffee is renowned for its thick and creamy body, low acidity, and deep dark chocolate notes with fragrant sandalwood. Highly recommended for premium dark roast portfolios.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400',
    rating: 4.7,
    process: 'Wet Hulled (Giling Basah)',
    processEn: 'Wet Hulled (Giling Basah)',
    elevation: '1.700 mdpl',
    scaScore: 88.0,
    stockStatus: 'Available',
    moisture: '11.5%',
    fobPriceRange: '$10.00 - $12.50 / kg',
    availableLots: '18 Karung (1.080 kg)',
    availableLotsEn: '18 Bags (1,080 kg)',
    defectCount: 'Ekspor Spesial Pilihan Tiga Kali (Triple-Picked)',
    defectCountEn: 'Premium Triple-Picked Export',
    bagType: 'Karung Rami 60kg dengan GrainPro',
    bagTypeEn: '60kg Jute Bag with GrainPro Liner'
  },
  {
    id: 'p5',
    name: 'Panama Geisha Esmeralda Reserve',
    nameEn: 'Panama Geisha Esmeralda Reserve',
    origin: 'Panama, Lembah Mikro Jaramillo',
    originEn: 'Panama, Jaramillo Micro Valley',
    roastLevel: 'Light',
    flavorNotes: ['Bunga Bergamot', 'Persik Putih', 'Teh Melati', 'Jeruk Mandarin'],
    flavorNotesEn: ['Bergamot Flower', 'White Peach', 'Jasmine Tea', 'Mandarin Orange'],
    price: 52,
    description: 'Standar internasional tertinggi kopi mewah. Ditanam di ketinggian ekstrem 1.800 mdpl di bawah naungan kabut pegunungan, lot Geisha ini mewakili intensitas aroma floral yang murni, bergamot yang elegan, dan body jeruk mandarin yang manis. Dinilai oleh tim Q-grader kami dengan skor luar biasa 93 poin.',
    descriptionEn: 'The highest international standard of luxury coffee. Grown at an extreme altitude of 1,800 masl under the shade of mountain mists, this Geisha lot represents pristine floral intensity, elegant bergamot, and a sweet mandarin orange body. Graded at an extraordinary 93 points by our Q-grader team.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400',
    rating: 5.0,
    process: 'Washed',
    processEn: 'Washed',
    elevation: '1.800 mdpl',
    scaScore: 93.0,
    stockStatus: 'Limited',
    moisture: '10.6%',
    fobPriceRange: '$48.00 - $55.00 / kg',
    availableLots: '6 Karung (360 kg)',
    availableLotsEn: '6 Bags (360 kg)',
    defectCount: 'Spesial Murni Tanpa Cela (Pristine)',
    defectCountEn: 'Pristine Specialty Grade',
    bagType: 'Kotak Vakum Hermetis 30kg',
    bagTypeEn: '30kg Airtight Vacuum Box'
  },
  {
    id: 'p6',
    name: 'Sidama Highlands Heirloom',
    nameEn: 'Sidama Highlands Heirloom',
    origin: 'Etiopia, Wilayah Yirgacheffe',
    originEn: 'Ethiopia, Yirgacheffe Region',
    roastLevel: 'Light',
    flavorNotes: ['Selai Blueberry', 'Lavender', 'Kulit Lemon', 'Teh Earl Grey'],
    flavorNotesEn: ['Blueberry Jam', 'Lavender', 'Lemon Zest', 'Earl Grey Tea'],
    price: 13,
    description: 'Lot heirloom alami yang bersumber dari keluarga petani kecil di dataran tinggi Yirgacheffe. Dikeringkan di bawah sinar matahari langsung di atas meja jemur khas Afrika, kopi ini menunjukkan aroma selai blueberry yang meledak-ledak dan kejernihan bergamot yang berkilau.',
    descriptionEn: 'A sun-dried natural heirloom lot sourced from smallholder families in the high plateaus of Yirgacheffe. Dried under direct sunlight on African raised beds, this coffee shows explosive blueberry jam aromas and brilliant bergamot clarity.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400',
    rating: 4.9,
    process: 'Natural Sun-dried',
    processEn: 'Natural Sun-dried',
    elevation: '2.000 mdpl',
    scaScore: 89.5,
    stockStatus: 'Available',
    moisture: '11.2%',
    fobPriceRange: '$11.50 - $13.50 / kg',
    availableLots: '30 Karung (1.800 kg)',
    availableLotsEn: '30 Bags (1,800 kg)',
    defectCount: 'SCA Grade 1 Specialty',
    defectCountEn: 'SCA Grade 1 Specialty',
    bagType: 'Karung Rami 60kg dengan GrainPro',
    bagTypeEn: '60kg Jute Bag with GrainPro Liner'
  },
  {
    id: 'p7',
    name: 'Andean Volcanic Washed',
    nameEn: 'Andean Volcanic Washed',
    origin: 'Kolombia, Terasering Huila',
    originEn: 'Colombia, Huila Terraces',
    roastLevel: 'Medium',
    flavorNotes: ['Cokelat Susu', 'Almond Panggang', 'Gula Merah Panela', 'Kismis Merah'],
    flavorNotesEn: ['Milk Chocolate', 'Roasted Almond', 'Panela Brown Sugar', 'Red Currant'],
    price: 10,
    description: 'Lot komersial dengan hasil tinggi dan keseimbangan rasa luar biasa dari Huila. Ditanam di lereng tanah liat vulkanik yang kaya nutrisi, memberikan cangkir kopi yang sangat manis, body penuh, dengan aroma cokelat yang kuat dan keasaman buah merah yang menyenangkan. Sangat ideal untuk roastery bervolume tinggi.',
    descriptionEn: 'A high-yielding commercial lot with exceptional balance from Huila. Grown on volcanic clay soils rich in nutrients, providing a sweet, full-bodied cup with robust chocolate aromas and a pleasant red fruit acidity. Ideal for high-volume roasteries.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400',
    rating: 4.8,
    process: 'Fully Washed',
    processEn: 'Fully Washed',
    elevation: '1.600 mdpl',
    scaScore: 88.0,
    stockStatus: 'Available',
    moisture: '11.0%',
    fobPriceRange: '$8.50 - $10.50 / kg',
    availableLots: '50 Karung (3.000 kg)',
    availableLotsEn: '50 Bags (3,000 kg)',
    defectCount: 'SCA Standard Export Grade 1',
    defectCountEn: 'SCA Standard Export Grade 1',
    bagType: 'Karung Rami 60kg dengan GrainPro',
    bagTypeEn: '60kg Jute Bag with GrainPro Liner'
  },
  {
    id: 'p8',
    name: 'Ecuador El Maputo Anaerobic',
    nameEn: 'Ecuador El Maputo Anaerobic',
    origin: 'Ekuador, Provinsi Pichincha',
    originEn: 'Ecuador, Pichincha Province',
    roastLevel: 'Light',
    flavorNotes: ['Minyak Markisa', 'Pure Mangga', 'Beri Liar', 'Nibs Kakao'],
    flavorNotesEn: ['Passion Fruit Oil', 'Mango Puree', 'Wild Berries', 'Cacao Nibs'],
    price: 22,
    description: 'Lot fermentasi ganda anaerobik dari hutan awan tinggi Pichincha. Menyajikan ledakan minyak buah tropis yang intens dan berair, rasa manis mangga yang pekat, dan ketahanan rasa kakao mentah di langit-langit mulut. Lot langka kelas kompetisi.',
    descriptionEn: 'A double anaerobic natural lot from the high cloud forests of Pichincha. Delivers an intense explosion of tropical fruit oils, rich mango sweetness, and lingering raw cacao on the palate. A rare competition-grade lot.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400',
    rating: 4.9,
    process: 'Double Anaerobic Natural',
    processEn: 'Double Anaerobic Natural',
    elevation: '1.750 mdpl',
    scaScore: 90.5,
    stockStatus: 'Sold Out',
    moisture: '11.4%',
    fobPriceRange: '$20.00 - $24.00 / kg',
    availableLots: '0 Karung (Teralokasi)',
    availableLotsEn: '0 Bags (Allocated)',
    defectCount: 'SCA Grade 1 Specialty',
    defectCountEn: 'SCA Grade 1 Specialty',
    bagType: 'Kotak Vakum Hermetis 30kg',
    bagTypeEn: '30kg Airtight Vacuum Box'
  }
];

export const brewGuides: BrewGuide[] = [
  {
    id: 'bg1',
    name: 'Protokol Cupping SCA (Standar Ekspor)',
    nameEn: 'SCA Cupping Protocol (Export Standard)',
    photo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400',
    ratio: '1:18.18 (8.25g Kopi / 150g Air)',
    temperature: '93°C / 200°F',
    time: '4:00 Menit perendaman',
    timeEn: '4:00 Minutes steep time',
    grindSize: 'Medium-Coarse (seperti garam laut kasar)',
    grindSizeEn: 'Medium-Coarse (resembling sea salt)',
    steps: [
      'Timbang tepat 8.25g biji kopi sangrai dan giling segar langsung ke dalam mangkuk cupping.',
      'Evaluasi aroma kering dari bubuk kopi dalam waktu 15 menit setelah digiling.',
      'Tuangkan 150g air bersih bersuhu 93°C langsung di atas bubuk, pastikan basah merata.',
      'Biarkan kerak kopi (crust) terbentuk dan diamkan selama 4 menit tanpa gangguan.',
      'Pada menit ke-4, pecahkan kerak (break the crust) dengan sendok cupping hangat. Hirup aromanya.',
      'Bersihkan sisa busa dan partikel terapung di permukaan. Biarkan mendingin hingga 71°C untuk mulai mencicipi.'
    ],
    stepsEn: [
      'Weigh exactly 8.25g of roasted coffee beans and grind fresh directly into the cupping bowl.',
      'Evaluate the dry aroma of the coffee grounds within 15 minutes of grinding.',
      'Pour 150g of clean water at 93°C directly over the grounds, ensuring even wetting.',
      'Allow the coffee crust to form and steep undisturbed for 4 minutes.',
      'At minute 4, break the crust using a warm cupping spoon. Inhale the aroma deeply.',
      'Clear remaining foam and floating particles. Allow to cool to 71°C to begin tasting.'
    ],
    description: 'Standar sensorik internasional. Digunakan oleh importir, roaster, dan Q-Grader di seluruh dunia untuk menilai kualitas kopi secara objektif. Metode ini menonjolkan kebersihan rasa, keseragaman, kemanisan, keasaman, dan skor akhir tanpa bias alat seduh.',
    descriptionEn: 'International sensory standard. Used by importers, roasters, and Q-Graders worldwide to assess coffee quality objectively. This method highlights cup cleanliness, uniformity, sweetness, acidity, and final score without brewer bias.'
  },
  {
    id: 'bg2',
    name: 'Hario V60 Pour Over (Kalibrasi Penyangrai)',
    nameEn: 'Hario V60 Pour Over (Roaster Calibration)',
    photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400',
    ratio: '1:16 (15g Kopi / 240g Air)',
    temperature: '94°C / 201°F',
    time: '3:00 Menit',
    timeEn: '3:00 Minutes',
    grindSize: 'Medium-Fine (seperti garam dapur)',
    grindSizeEn: 'Medium-Fine (like table salt)',
    steps: [
      'Bilas kertas saring dengan air mendidih untuk menghilangkan rasa kertas, lalu panaskan dripper keramik.',
      'Masukkan 15g bubuk kopi segar, ratakan permukaan kopi, dan atur timbangan ke angka nol.',
      'Tuang 40g air untuk tahap blooming. Putar perlahan dan tunggu 45 detik agar gas CO2 terlepas.',
      'Tuangkan air dalam spiral melingkar lambat hingga mencapai 150g, jaga agar air tidak mengenai kertas langsung.',
      'Biarkan mengalir sedikit, kemudian lakukan penuangan akhir secara terus-menerus hingga mencapai 240g.',
      'Goyangkan dripper secara perlahan untuk mendapatkan permukaan bubuk yang datar dan rata. Biarkan menetes habis.'
    ],
    stepsEn: [
      'Rinse the paper filter with boiling water to eliminate paper taste and pre-heat the ceramic dripper.',
      'Add 15g of fresh coffee grounds, level the bed, and tare the scale to zero.',
      'Pour 40g of water for the bloom. Swirl gently and wait 45 seconds for CO2 gases to release.',
      'Pour water in slow, steady concentric circles up to 150g, keeping the stream away from the filter paper.',
      'Allow to drain slightly, then continue the final pour smoothly until reaching 240g.',
      'Gently swirl the dripper to flatten the coffee bed. Let it drop and drain completely.'
    ],
    description: 'Sangat baik untuk menonjolkan keunikan rasa kopi single-origin yang kompleks. Corong kerucut memperkuat aroma bunga yang lembut, keasaman sitrus yang cerah, dan kejernihan rasa yang luar biasa bersih.',
    descriptionEn: 'Excellent for highlighting the unique characteristics of complex single-origin coffees. The conical shape amplifies delicate floral notes, bright citric acidity, and outstanding flavor clarity.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Hiroshi Tanaka',
    role: 'Managing Director, Zenith Specialty Roasters (Tokyo)',
    roleEn: 'Managing Director, Zenith Specialty Roasters (Tokyo)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    rating: 5,
    quote: "Nayaka Atelier telah mengubah cara kami mendatangkan kopi dari Indonesia. Gayo Anaerobic Honey mereka mendapatkan skor cupping luar biasa 90.5 dan tiba di Tokyo dalam kemasan vakum tanpa degradasi kelembapan sedikit pun. Integritas ekspor B2B yang tiada tanding.",
    quoteEn: "Nayaka Atelier has transformed how we source coffee from Indonesia. Their Gayo Anaerobic Honey scored an outstanding 90.5 and arrived in Tokyo in vacuum boxes without a single drop in moisture stability. Unmatched B2B export integrity."
  },
  {
    id: 't2',
    name: 'Emma Sterling',
    role: 'Sourcing Lead, Seattle Coffee Merchants',
    roleEn: 'Sourcing Lead, Seattle Coffee Merchants',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    rating: 5,
    quote: "Menemukan lot mikro proses carbonic maceration dari Bali yang konsisten dulunya adalah tantangan logistik besar. Nayaka Export menyediakan data ketertelusuran langsung, sampel uji DHL cepat, dan sertifikasi fitosanitari yang sempurna. Eksportir yang sangat direkomendasikan.",
    quoteEn: "Sourcing consistent carbonic maceration micro-lots from Bali was once a major logistical challenge. Nayaka Export provides live traceability data, rapid DHL test samples, and perfect phytosanitary certification. Highly recommended exporter."
  },
  {
    id: 't3',
    name: 'Guillaume Dupont',
    role: 'Head of Quality, Hamburg Coffee Trading House',
    roleEn: 'Head of Quality, Hamburg Coffee Trading House',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
    rating: 5,
    quote: "Metrik pelacakan lot Java Preanger 40 sangat akurat. Kami sangat menghargai transparansi lengkap mereka—ketinggian lahan, catatan kelembapan, dan jumlah cacat biji benar-benar tepat. Nayaka mengirimkan biji hijau kelas kompetisi dengan profesionalisme mutlak.",
    quoteEn: "The lot tracking metrics for Java Preanger 40 are incredibly accurate. We highly appreciate their complete transparency—elevation, moisture records, and defect counts are absolutely spot on. Nayaka delivers competition-grade green beans with absolute professionalism."
  }
];

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Presisi dalam Kemasan Hermetis: Mencegah Kerusakan Kopi Selama Transit Samudra',
    titleEn: 'Precision in Hermetic Packaging: Preventing Coffee Damage During Ocean Transit',
    category: 'Sains Logistik',
    categoryEn: 'Logistics Science',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400',
    date: '28 Juni 2026',
    dateEn: 'June 28, 2026',
    readTime: '6 Menit Baca',
    readTimeEn: '6 Min Read',
    summary: 'Menganalisis bagaimana fluktuasi kelembapan udara relatif di dalam kontainer pengapalan laut memengaruhi aktivitas air biji hijau, dan bagaimana segel GrainPro mempertahankan kesegaran sensorik.',
    summaryEn: 'Analyzing how relative humidity fluctuations inside ocean shipping containers affect green coffee water activity, and how GrainPro seals preserve sensory freshness.'
  },
  {
    id: 'a2',
    title: 'Keunggulan Tanah Vulkanik Indonesia: Bagaimana Andisol Gunung Batur Meningkatkan Keasaman Kopi',
    titleEn: 'The Edge of Indonesian Volcanic Soil: How Mount Batur Andisols Enhance Coffee Acidity',
    category: 'Jurnal Agronomi',
    categoryEn: 'Agronomy Journal',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=400',
    date: '14 Mei 2026',
    dateEn: 'May 14, 2026',
    readTime: '9 Menit Baca',
    readTimeEn: '9 Min Read',
    summary: 'Analisis mendalam mengenai tanah andisol vulkanik. Bagaimana penyerapan fosfat yang tinggi dan cadangan kalium di lereng Kintamani mempercepat sintesis senyawa organik pada buah ceri kopi Bali.',
    summaryEn: 'An in-depth analysis of volcanic andisol soil. How high phosphate absorption and potassium reserves on Kintamani slopes accelerate organic compound synthesis in Bali coffee cherries.'
  },
  {
    id: 'a3',
    title: 'Navigasi Protokol Bea Cukai: Mempermudah Dokumentasi Fitosanitari dan Surat Keterangan Asal',
    titleEn: 'Navigating Customs Protocols: Streamlining Phytosanitary and Certificate of Origin Documentation',
    category: 'Regulasi Perdagangan',
    categoryEn: 'Trade Regulation',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400',
    date: '03 April 2026',
    dateEn: 'April 03, 2026',
    readTime: '7 Menit Baca',
    readTimeEn: '7 Min Read',
    summary: 'Panduan kepatuhan langkah-demi-langkah bagi importir internasional, mencakup pendaftaran FDA, sertifikat fitosanitari, dan tanda negara asal dari Organisasi Kopi Internasional (ICO).',
    summaryEn: 'A step-by-step compliance guide for international importers, covering FDA registration, phytosanitary certificates, and official International Coffee Organization (ICO) origin marks.'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'Bagaimana cara Anda mengirimkan sampel biji kopi mentah (green bean)?',
    questionEn: 'How do you ship green coffee bean samples?',
    answer: 'Kami mengirimkan sampel fisik biji mentah (kemasan 200g - 350g) ke seluruh dunia melalui kurir ekspres premium (FedEx, DHL, atau UPS). Sampel dapat disangrai langsung sesuai permintaan menggunakan Ikawa sample roaster atau dikirim mentah sepenuhnya tergantung kenyamanan Anda. Hubungi meja ekspor kami untuk meminta penawaran.',
    answerEn: 'We ship physical green coffee samples (200g - 350g packs) worldwide via premium express couriers (FedEx, DHL, or UPS). Samples can be roasted on demand using our Ikawa sample roaster or shipped fully raw, depending on your preference. Contact our export desk to request a kit.'
  },
  {
    id: 'f2',
    question: 'Berapa Jumlah Pesanan Minimum (MOQ) untuk pengiriman kargo?',
    questionEn: 'What is the Minimum Order Quantity (MOQ) for cargo shipping?',
    answer: 'MOQ standar untuk ekspor kami adalah 1 karung penuh berkapasitas 60kg (dilengkapi GrainPro). Kami juga mendukung pengiriman konsolidasi LCL (Less than Container Load) untuk penyangrai skala menengah serta kontainer penuh FCL (Full Container Load, berisi sekitar 320 karung / 19,2 ton) untuk pembeli grosir langsung.',
    answerEn: 'Our standard MOQ for export is 1 full bag of 60kg (equipped with GrainPro liner). We also support consolidated LCL (Less than Container Load) shipments for medium-scale roasters and FCL (Full Container Load, approx. 320 bags / 19.2 tons) for direct wholesale buyers.'
  },
  {
    id: 'f3',
    question: 'Sertifikasi internasional apa saja yang Anda sediakan?',
    questionEn: 'What international certifications do you provide?',
    answer: 'Setiap pengiriman kargo ekspor disertai Sertifikat Fitosanitari dari karantina pertanian, Surat Keterangan Asal (Form A / COO), tanda ICO resmi, Sertifikat Halal, sertifikasi Organik USDA/EU jika berlaku, serta Laporan Resmi Cupping & Defect biji kopi dari Q-Grader bersertifikat.',
    answerEn: 'Every export cargo shipment is accompanied by a Phytosanitary Certificate from agricultural quarantine, a Certificate of Origin (Form A / COO), official ICO marks, Halal Certificate, USDA/EU Organic certification where applicable, and official Cupping & Defect reports from certified Q-Graders.'
  },
  {
    id: 'f4',
    question: 'Bagaimana biji kopi mentah dilindungi selama perjalanan laut agar tidak rusak?',
    questionEn: 'How is green coffee protected from damage during ocean transit?',
    answer: 'Semua biji kopi mentah kami dikemas dalam kantong hermetis GrainPro dengan perlindungan tinggi di dalam karung rami tebal, atau dikemas vakum khusus dalam kotak aluminium. Ini mencegah masuknya kelembapan eksternal, mengunci kelembapan relatif biji di kisaran 11%, dan melindungi biji dari jamur pelayaran.',
    answerEn: 'All our green beans are packaged in high-barrier GrainPro hermetic bags inside thick jute sacks, or custom vacuum-sealed in aluminum foil boxes. This prevents external humidity ingress, locks relative moisture around 11%, and shields the beans from ship mold.'
  },
  {
    id: 'f5',
    question: 'Bagaimana Anda menawarkan harga berdasarkan ketentuan FOB, CIF, atau DDP?',
    questionEn: 'Do you offer FOB, CIF, or DDP pricing terms?',
    answer: 'Kami umumnya memberikan kuotasi harga FOB (Free On Board) dari Pelabuhan Tanjung Priok (Jakarta) atau Pelabuhan Belawan (Medan). Namun, kami juga dapat mengatur pengiriman CIF (Cost, Insurance, and Freight) ke pelabuhan laut utama dunia, atau ketentuan kargo udara untuk lot mikro yang sangat eksklusif.',
    answerEn: 'We typically quote FOB (Free On Board) prices from Tanjung Priok Port (Jakarta) or Belawan Port (Medan). However, we can also arrange CIF (Cost, Insurance, and Freight) shipping to major global ports, or air cargo terms for ultra-exclusive micro-lots.'
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Terroir & Penanaman',
    titleEn: 'Terroir & Cultivation',
    subtitle: 'Kebun Teduh Ketinggian Ekstrem',
    subtitleEn: 'Extreme Altitude Shade Estates',
    description: 'Pohon kopi kami tumbuh subur di bawah naungan pohon penaung organik di ketinggian 1.500m hingga 2.100m pada tanah vulkanik subur, mengembangkan kerapatan gula yang tinggi dan asam organik kompleks untuk menghasilkan kopi kelas kompetisi.',
    descriptionEn: 'Our coffee trees thrive under organic shade canopies at 1,500m to 2,100m in rich volcanic soil, developing high sugar density and complex organic acids for competition-grade cups.',
    icon: 'Mountain'
  },
  {
    id: 2,
    title: 'Seleksi Ceri Standar SCA',
    titleEn: 'SCA Standard Cherry Selection',
    subtitle: 'Pemetikan Manual yang Presisi',
    subtitleEn: 'Precise Handpicking Cycles',
    description: 'Petani melakukan hingga 5 kali siklus pemetikan selama panen, hanya memilih ceri merah ranum dengan tingkat kemanisan Brix >20%. Ceri yang belum matang atau cacat segera dipisahkan.',
    descriptionEn: 'Farmers conduct up to 5 handpicking passes during harvest, choosing only deep-red cherries at peak Brix sweetness (>20%). Underripe or defective cherries are immediately separated.',
    icon: 'FlameKindling'
  },
  {
    id: 3,
    title: 'Proses Anaerobik & Pengolahan Mikro',
    titleEn: 'Anaerobic & Micro-Processing',
    subtitle: 'Kontrol Fermentasi Ketat',
    subtitleEn: 'Strict Fermentation Control',
    description: 'Buah kopi melalui maserasi karbonik ragi liar yang lembut dan pengeringan lambat di atas meja jemur. Kadar air diperiksa secara berkala menggunakan probe digital untuk mencapai standar mutlak 11,0%.',
    descriptionEn: 'Fruit undergoes delicate wild-yeast anaerobic maceration and slow drying on raised beds. Moisture levels are systematically checked with digital probes to hit the exact 11.0% target.',
    icon: 'Sun'
  },
  {
    id: 4,
    title: 'Hulling Kering & Sortasi Densitas',
    titleEn: 'Dry Hulling & Density Sorting',
    subtitle: 'Pemisahan Cacat Mutu Standar SCA',
    subtitleEn: 'Triple-Picked Defect Sorting',
    description: 'Kopi dikupas, disortir menggunakan meja gravitasi, dan disortir ulang secara manual sebanyak tiga kali (triple-picked). Kami menjamin status SCA Specialty Grade 1 dengan kurang dari 5 cacat sekunder per 350g sampel.',
    descriptionEn: 'Parchment is hulled, density-sorted on gravity tables, and hand-sorted three times (triple-picked). We guarantee SCA Specialty Grade 1 status with less than 5 secondary defects per 350g sample.',
    icon: 'Sparkles'
  },
  {
    id: 5,
    title: 'Pengujian Cupping Q-Grader',
    titleEn: 'Q-Grader Cupping Verification',
    subtitle: 'Protokol Penilaian Resmi',
    subtitleEn: 'Official Evaluation Protocol',
    description: 'Setiap kelompok panen diuji cupping di laboratorium ekspor kami oleh Q-Grader bersertifikat. Kami hanya merilis lot kopi yang mencapai nilai minimal 88+ poin SCA untuk dimasukkan dalam katalog ekspor resmi kami.',
    descriptionEn: 'Every batch is cupped in our export lab by certified Q-Graders. We only release coffee lots that score a minimum of 88+ SCA points to be included in our official export catalog.',
    icon: 'CheckCircle'
  },
  {
    id: 6,
    title: 'Pengiriman Kargo Hermetis',
    titleEn: 'Hermetic Cargo Shipping',
    subtitle: 'Perlindungan GrainPro di Laut',
    subtitleEn: 'Ocean-Safe GrainPro Protection',
    description: 'Segel kantong pelindung GrainPro berlapis-lapis di dalam karung rami mencegah penurunan mutu akibat kelembapan laut selama pelayaran kontainer trans-samudra, dikirim lengkap dengan sertifikasi kepabeanan.',
    descriptionEn: 'Multi-layered GrainPro hermetic bag sealing inside jute sacks prevents deterioration from sea humidity during container ocean voyages, shipped with full customs clearance docs.',
    icon: 'Truck'
  }
];

export const galleryPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400',
    title: 'Kebun Tanah Vulkanik',
    titleEn: 'Volcanic Soil Estates',
    desc: 'Pohon kopi kami tumbuh subur di ketinggian 1.600m di bawah naungan pohon pelindung di dataran tinggi Gayo, Sumatra.',
    descEn: 'Our coffee trees thrive at 1,600m under shade-growing forest canopies in the Gayo highlands, Sumatra.'
  },
  {
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400',
    title: 'Patio Pengeringan',
    titleEn: 'Drying Patio & Beds',
    desc: 'Meja penjemuran ceri proses honey yang dikeringkan perlahan di bawah sinar matahari untuk mencapai kadar air ideal 11%.',
    descEn: 'Raised drying tables for honey-processed cherries, slowly dried under the sun to achieve the ideal 11% moisture level.'
  },
  {
    url: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=400',
    title: 'Laboratorium Q-Grader',
    titleEn: 'Q-Grader Lab',
    desc: 'Sesi evaluasi rasa (cupping) sesuai standar SCA untuk mengukur kebersihan rasa, tingkat kemanisan, dan kompleksitas aroma.',
    descEn: 'Sensory evaluation (cupping) sessions under SCA standards to measure cup cleanliness, sweetness, and complex flavor profiles.'
  },
  {
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400',
    title: 'Kemasan Hermetis GrainPro',
    titleEn: 'GrainPro Hermetic Bags',
    desc: 'Biji kopi mentah kami dikemas dalam kantong pelindung kedap udara multi-layer guna menjaga kesegaran rasa selama pelayaran samudera.',
    descEn: 'Our green coffee is packaged in multi-layer airtight hermetic bags to lock in flavor freshness during long ocean transits.'
  },
  {
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400',
    title: 'Profil Sangrai Sampel',
    titleEn: 'Sample Roasting Profiles',
    desc: 'Penyangraian contoh lot kecil untuk menguji tingkat ekstraksi rasa, ekspansi biji kopi, dan keseragaman warna sangrai.',
    descEn: 'Small-batch roasting of sample lots to evaluate flavor extraction, physical bean expansion, and roast color uniformity.'
  }
];
