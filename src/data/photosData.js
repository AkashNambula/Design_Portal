/**
 * Centralized Photo and Story Data Store
 * All photo references point to /images/ in the public directory.
 * Every photograph is unique and used in exactly ONE module (no repetition across sections).
 * Each photo specifies its tailored aspect ratio matching its natural framing.
 */

// 01. ABOUT MODULE: Harshii's solo editorial portrait
export const aboutPhotos = [
  {
    id: 'about-01',
    imagePath: '/images/about-harshii-smile.jpg',
    title: 'Harshii',
    date: '18 November',
    caption: 'A soul adorned with grace, an infectious smile, and a warmth that brightens every ordinary day.',
    altText: 'Portrait of Harshii smiling warmly in green dress',
    aspectRatio: 'aspect-[4/3]',
    objectPosition: 'object-center',
  },
];

// 02. OUR STORY MODULE: Chronological photoshoot milestones (Portrait 2:3)
export const ourStoryPhotos = [
  {
    id: 'story-01',
    memoryNumber: '01',
    date: 'A Beautiful Promise',
    title: 'Holding Hands, Walking Forward',
    description: 'A gentle touch, a quiet smile, and the unspoken certainty that every tomorrow is brighter together.',
    imagePath: '/images/story-holding-hands.jpg',
    caption: 'Walking together hand in hand beneath sunlit trees',
    altText: 'Couple holding hands during romantic outdoor photoshoot',
    aspectRatio: 'aspect-[2/3]',
    objectPosition: 'object-top',
  },
  {
    id: 'story-02',
    memoryNumber: '02',
    date: 'Shared Horizons',
    title: 'Looking Toward Tomorrow',
    description: 'Standing side by side, dreaming under open skies, grateful for every step of this journey.',
    imagePath: '/images/story-balcony-shoot.jpg',
    caption: 'Looking towards the future with gratitude and excitement',
    altText: 'Couple standing together at the balcony railing during photoshoot',
    aspectRatio: 'aspect-[2/3]',
    objectPosition: 'object-top',
  },
];

// 03. WE TOGETHER MODULE: Couple shared chapters (Landscape 16:9)
export const togetherPhotos = [
  {
    id: 'together-01',
    imagePath: '/images/together-cafe.jpg',
    title: 'Cafe Talks & Soft Breezes',
    date: 'Afternoon Hours',
    caption: 'Warm drinks, shared smiles, and the easy comfort of conversations that never need to end.',
    altText: 'Harshii and partner relaxing at a cafe balcony',
    aspectRatio: 'aspect-[16/9]',
    objectPosition: 'object-center',
  },
  {
    id: 'together-02',
    imagePath: '/images/together-garden.jpg',
    title: 'Sunlit Celebrations',
    date: 'Garden Memories',
    caption: 'Dressed in tradition, surrounded by nature, celebrating moments that turn into lifelong treasures.',
    altText: 'Couple smiling in traditional attire in a sunny garden',
    aspectRatio: 'aspect-[16/9]',
    objectPosition: 'object-center',
  },
];

// 04. MY MEMORIES MODULE: Candid playful retrospectives (Landscape 16:9)
export const memoriesPhotos = [
  {
    id: 'memories-01',
    imagePath: '/images/memory-playful.jpg',
    title: 'Unfiltered Mischief',
    date: 'Carefree Days',
    caption: 'The silliest giggles and sweetest candid moments that remind us why laughter is the best part of love.',
    altText: 'Playful outdoor candid selfie with cute puppy ears filter',
    aspectRatio: 'aspect-[16/9]',
    objectPosition: 'object-center',
  },
];

// 05. MOMENTS IN MOTION MODULE: Looking back with shared smiles (Portrait 4:5)
export const motionPhotos = [
  {
    id: 'motion-01',
    imagePath: '/images/motion-holding-hands-stairs.jpg',
    title: 'Walking Hand in Hand',
    date: 'A Heartfelt Glance',
    caption: 'Turning back to share a smile, knowing that every step forward is sweeter together.',
    altText: 'Harshii in floral dress and partner in wine shirt holding hands and smiling back',
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center',
  },
];

// 06. HEART STORAGE MODULE: All couple memories stored in modern scrapbook polaroid template
export const heartStoragePhotos = [
  {
    id: 'heart-01',
    imagePath: '/images/about-harshii.jpg',
    title: 'Grace & Radiance',
    date: '18 November',
    category: 'Portraits',
    caption: 'A soul adorned with effortless grace, warmth and joy.',
    rotation: '-3deg',
    tapePosition: 'top-center',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'heart-02',
    imagePath: '/images/story-holding-hands.jpg',
    title: 'Hand in Hand',
    date: 'A Beautiful Promise',
    category: 'Photoshoots',
    caption: 'Under the sunlit trees, stepping forward together.',
    rotation: '4deg',
    tapePosition: 'top-left',
    aspectRatio: 'aspect-[2/3]',
  },
  {
    id: 'heart-03',
    imagePath: '/images/story-balcony-shoot.jpg',
    title: 'Shared Horizons',
    date: 'Our Tomorrow',
    category: 'Photoshoots',
    caption: 'Standing side by side, looking into everything ahead.',
    rotation: '-2deg',
    tapePosition: 'top-right',
    aspectRatio: 'aspect-[2/3]',
  },
  {
    id: 'heart-04',
    imagePath: '/images/together-cafe.jpg',
    title: 'Afternoon Reverie',
    date: 'Cafe Conversations',
    category: 'Candids',
    caption: 'Warm coffee, gentle breeze, and laughter that never ends.',
    rotation: '3deg',
    tapePosition: 'top-center',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'heart-05',
    imagePath: '/images/together-garden.jpg',
    title: 'Tradition & Sunshine',
    date: 'Garden Days',
    category: 'Milestones',
    caption: 'Dressed in tradition, celebrating timeless happiness.',
    rotation: '-4deg',
    tapePosition: 'top-left',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'heart-06',
    imagePath: '/images/memory-playful.jpg',
    title: 'Unfiltered Mischief',
    date: 'Carefree Days',
    category: 'Candids',
    caption: 'Sweetest laughs and silliness that make every day fun.',
    rotation: '2deg',
    tapePosition: 'top-right',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'heart-07',
    imagePath: '/images/motion-holding-hands-stairs.jpg',
    title: 'Looking Back with Love',
    date: 'Sunlit Steps',
    category: 'Photoshoots',
    caption: 'Turning back to share a smile amidst the green leaves.',
    rotation: '-3deg',
    tapePosition: 'top-center',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'heart-08',
    imagePath: '/images/letter-memory.jpg',
    title: 'Forever In My Heart',
    date: 'A Heartfelt Note',
    category: 'Milestones',
    caption: 'Ni Abbai loves you unconditionally, today and always.',
    rotation: '4deg',
    tapePosition: 'top-left',
    aspectRatio: 'aspect-[16/9]',
  },
];
