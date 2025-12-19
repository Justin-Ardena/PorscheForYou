export interface Porsche {
  id: string;
  name: string;
  model: string;
  year: string;
  description: string;
  personality: string;
  image: string;
  color: string;
  traits: string[];
}

export const porsches: Porsche[] = [
  {
    id: '911-turbo',
    name: '911 Turbo',
    model: '2024',
    year: '2024',
    description: 'The ultimate performance machine. Aggressive, powerful, and designed for those who demand the best.',
    personality: 'Ambitious Racer',
    image: '/image/gt3.jpeg',
    color: '#ef2b2d',
    traits: ['Performance', 'Power', 'Aggressive', 'Luxury']
  },
  {
    id: 'cayman-gt4',
    name: 'Cayman GT4',
    model: '2024',
    year: '2024',
    description: 'The purist\'s choice. Mid-engine agility meets precision handling for the true driving enthusiast.',
    personality: 'Technical Perfectionist',
    image: '/image/718.jpg',
    color: '#f0e68c',
    traits: ['Precision', 'Handling', 'Agile', 'Technical']
  },
  {
    id: 'taycan',
    name: 'Taycan Turbo S',
    model: '2024',
    year: '2024',
    description: 'The future is electric. Cutting-edge technology meets Porsche performance in an innovative package.',
    personality: 'Tech Visionary',
    image: '/image/taycan.jpg',
    color: '#1e90ff',
    traits: ['Innovation', 'Technology', 'Electric', 'Futuristic']
  },
  {
    id: 'panamera',
    name: 'Panamera Turbo S',
    model: '2024',
    year: '2024',
    description: 'Elegance meets performance. A practical luxury sedan that doesn\'t compromise on speed or style.',
    personality: 'Executive Sophisticate',
    image: '/image/panamera.jpg',
    color: '#2f4f4f',
    traits: ['Luxury', 'Practical', 'Sophisticated', 'Powerful']
  },
  {
    id: 'macan-turbo',
    name: 'Macan Turbo',
    model: '2024',
    year: '2024',
    description: 'Sporty SUV for the adventurous. Combines capability with performance for those who want it all.',
    personality: 'Adventure Seeker',
    image: '/image/macan.jpg',
    color: '#ff6347',
    traits: ['Versatile', 'Sporty', 'Capable', 'Adventurous']
  },
  {
    id: '918-hybrid',
    name: '918 Spyder Hybrid',
    model: '2015-2018',
    year: '2015-2018',
    description: 'The rarest gem. A limited-edition hybrid hypercar representing the pinnacle of Porsche engineering.',
    personality: 'Elite Collector',
    image: '/image/918.jpg',
    color: '#ffd700',
    traits: ['Rare', 'Hybrid', 'Elite', 'Hypercar']
  },
  {
    id: 'boxster-spyder',
    name: 'Boxster Spyder',
    model: '2024',
    year: '2024',
    description: 'Pure joy of driving. Open-air thrills with accessible performance and genuine driving pleasure.',
    personality: 'Free Spirit',
    image: '/image/boxster.jpg',
    color: '#32cd32',
    traits: ['Open-Air', 'Fun', 'Accessible', 'Spirited']
  },
  {
    id: '911-dakar',
    name: '911 Dakar',
    model: '2024',
    year: '2024',
    description: 'Adventure redefined. An off-road capable 911 for those who want to explore beyond the asphalt.',
    personality: 'Bold Explorer',
    image: '/image/dakar.jpg',
    color: '#ff8c00',
    traits: ['Off-Road', 'Bold', 'Explorer', 'Unique']
  },
  {
    id: 'carrera-gt',
    name: 'Carrera GT',
    model: '2003-2011',
    year: '2003-2011',
    description: 'A legend reborn. The ultimate expression of Porsche\'s racing heritage and engineering excellence.',
    personality: 'Classic Champion',
    image: '/image/carrera.jpg',
    color: '#dc143c',
    traits: ['Legend', 'Racing', 'Heritage', 'Champion']
  },
  {
    id: 'cayenne-e-hybrid',
    name: 'Cayenne E-Hybrid',
    model: '2024',
    year: '2024',
    description: 'Smart luxury with an electric edge. Eco-conscious performance for the modern driver.',
    personality: 'Conscious Innovator',
    image: '/image/cayenne.jpg',
    color: '#20b2aa',
    traits: ['Eco-Friendly', 'Hybrid', 'Luxury', 'Smart']
  }
];

export interface QuizQuestion {
  id: number;
  question: string;
  answers: {
    text: string;
    porscheId: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What defines your driving style?',
    answers: [
      { text: 'Maximum speed and aggression', porscheId: '911-turbo' },
      { text: 'Precision and technical mastery', porscheId: 'cayman-gt4' },
      { text: 'Cutting-edge technology and innovation', porscheId: 'taycan' },
      { text: 'Balanced luxury and power', porscheId: 'panamera' },
      { text: 'Versatile performance', porscheId: 'macan-turbo' },
      { text: 'Exclusive and rare experiences', porscheId: '918-hybrid' },
      { text: 'Pure driving joy', porscheId: 'boxster-spyder' },
      { text: 'Adventurous exploration', porscheId: '911-dakar' },
      { text: 'Legendary heritage', porscheId: 'carrera-gt' },
      { text: 'Eco-conscious luxury', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 2,
    question: 'What\'s your lifestyle like?',
    answers: [
      { text: 'High-octane and competitive', porscheId: '911-turbo' },
      { text: 'Detail-oriented perfectionist', porscheId: 'cayman-gt4' },
      { text: 'Tech-savvy and forward-thinking', porscheId: 'taycan' },
      { text: 'Executive and sophisticated', porscheId: 'panamera' },
      { text: 'Active and adventurous', porscheId: 'macan-turbo' },
      { text: 'Collector and connoisseur', porscheId: '918-hybrid' },
      { text: 'Carefree and spontaneous', porscheId: 'boxster-spyder' },
      { text: 'Explorer and risk-taker', porscheId: '911-dakar' },
      { text: 'Passionate about automotive history', porscheId: 'carrera-gt' },
      { text: 'Environmentally aware', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 3,
    question: 'What\'s your ideal vacation?',
    answers: [
      { text: 'Track day racing at legendary circuits', porscheId: '911-turbo' },
      { text: 'Autocross or driving school challenges', porscheId: 'cayman-gt4' },
      { text: 'Tech conferences and innovation hubs', porscheId: 'taycan' },
      { text: 'City tours and business trips', porscheId: 'panamera' },
      { text: 'Road trip across varied terrains', porscheId: 'macan-turbo' },
      { text: 'Exclusive private events and auctions', porscheId: '918-hybrid' },
      { text: 'Coastal drives with friends', porscheId: 'boxster-spyder' },
      { text: 'Off-road expedition in remote areas', porscheId: '911-dakar' },
      { text: 'Vintage car rallies and shows', porscheId: 'carrera-gt' },
      { text: 'Eco-tourism and sustainable travel', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 4,
    question: 'How important is fuel efficiency?',
    answers: [
      { text: 'Not at all - go big!', porscheId: '911-turbo' },
      { text: 'Efficiency through engineering', porscheId: 'cayman-gt4' },
      { text: 'Electric is the future', porscheId: 'taycan' },
      { text: 'Balanced efficiency matters', porscheId: 'panamera' },
      { text: 'Practical efficiency', porscheId: 'macan-turbo' },
      { text: 'Not concerned with daily use', porscheId: '918-hybrid' },
      { text: 'Less important - enjoying the drive matters', porscheId: 'boxster-spyder' },
      { text: 'Capability over efficiency', porscheId: '911-dakar' },
      { text: 'Classic cars don\'t need to be efficient', porscheId: 'carrera-gt' },
      { text: 'Very important - eco-friendly is essential', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 5,
    question: 'What\'s your personality type?',
    answers: [
      { text: 'Dominant and commanding', porscheId: '911-turbo' },
      { text: 'Analytical and precise', porscheId: 'cayman-gt4' },
      { text: 'Visionary and innovative', porscheId: 'taycan' },
      { text: 'Diplomatic and sophisticated', porscheId: 'panamera' },
      { text: 'Outgoing and versatile', porscheId: 'macan-turbo' },
      { text: 'Exclusive and discerning', porscheId: '918-hybrid' },
      { text: 'Enthusiastic and carefree', porscheId: 'boxster-spyder' },
      { text: 'Adventurous and bold', porscheId: '911-dakar' },
      { text: 'Passionate about excellence', porscheId: 'carrera-gt' },
      { text: 'Conscious and thoughtful', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 6,
    question: 'What matters most in a car?',
    answers: [
      { text: 'Raw power and performance', porscheId: '911-turbo' },
      { text: 'Handling and responsiveness', porscheId: 'cayman-gt4' },
      { text: 'Technology and features', porscheId: 'taycan' },
      { text: 'Comfort and luxury', porscheId: 'panamera' },
      { text: 'Versatility and capability', porscheId: 'macan-turbo' },
      { text: 'Exclusivity and rarity', porscheId: '918-hybrid' },
      { text: 'The joy of driving', porscheId: 'boxster-spyder' },
      { text: 'Capability in any terrain', porscheId: '911-dakar' },
      { text: 'Heritage and history', porscheId: 'carrera-gt' },
      { text: 'Sustainability and responsibility', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 7,
    question: 'How do you prefer your seating arrangement?',
    answers: [
      { text: 'Fixed, aggressive racing position', porscheId: '911-turbo' },
      { text: 'Intimate two-seater setup', porscheId: 'cayman-gt4' },
      { text: 'Modern ergonomic seating', porscheId: 'taycan' },
      { text: 'Comfortable four-seat luxury', porscheId: 'panamera' },
      { text: 'Spacious and practical', porscheId: 'macan-turbo' },
      { text: 'Exclusive and customized', porscheId: '918-hybrid' },
      { text: 'Open-air two-seater bliss', porscheId: 'boxster-spyder' },
      { text: 'High-riding and commanding view', porscheId: '911-dakar' },
      { text: 'Racing-inspired luxury', porscheId: 'carrera-gt' },
      { text: 'Spacious and comfortable five-seat', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 8,
    question: 'What\'s your budget range?',
    answers: [
      { text: '$200,000+', porscheId: '911-turbo' },
      { text: '$100,000-150,000', porscheId: 'cayman-gt4' },
      { text: '$180,000+', porscheId: 'taycan' },
      { text: '$120,000-160,000', porscheId: 'panamera' },
      { text: '$90,000-130,000', porscheId: 'macan-turbo' },
      { text: '$500,000+ (rare collector)', porscheId: '918-hybrid' },
      { text: '$80,000-110,000', porscheId: 'boxster-spyder' },
      { text: '$110,000-150,000', porscheId: '911-dakar' },
      { text: '$1,000,000+ (vintage/rare)', porscheId: 'carrera-gt' },
      { text: '$110,000-140,000', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 9,
    question: 'What\'s your approach to customization?',
    answers: [
      { text: 'Aggressive performance upgrades', porscheId: '911-turbo' },
      { text: 'Subtle handling enhancements', porscheId: 'cayman-gt4' },
      { text: 'Tech and software customization', porscheId: 'taycan' },
      { text: 'Luxury and comfort features', porscheId: 'panamera' },
      { text: 'Practical add-ons and accessories', porscheId: 'macan-turbo' },
      { text: 'Bespoke and exclusive options', porscheId: '918-hybrid' },
      { text: 'Minimal - pure is best', porscheId: 'boxster-spyder' },
      { text: 'Off-road capability upgrades', porscheId: '911-dakar' },
      { text: 'Preserve original heritage', porscheId: 'carrera-gt' },
      { text: 'Eco-friendly and efficient modifications', porscheId: 'cayenne-e-hybrid' }
    ]
  },
  {
    id: 10,
    question: 'What\'s your ultimate automotive dream?',
    answers: [
      { text: 'Dominating the track', porscheId: '911-turbo' },
      { text: 'Perfect the art of driving', porscheId: 'cayman-gt4' },
      { text: 'Drive the future today', porscheId: 'taycan' },
      { text: 'Elegant high-performance transportation', porscheId: 'panamera' },
      { text: 'Adventure anywhere, anytime', porscheId: 'macan-turbo' },
      { text: 'Own a rare masterpiece', porscheId: '918-hybrid' },
      { text: 'Feel the wind, pure freedom', porscheId: 'boxster-spyder' },
      { text: 'Explore the unexplored', porscheId: '911-dakar' },
      { text: 'Drive a legendary icon', porscheId: 'carrera-gt' },
      { text: 'Sustainability without compromise', porscheId: 'cayenne-e-hybrid' }
    ]
  }
];

export const matchingExplanations: Record<string, string> = {
  '911-turbo': 'You\'re an ambitious racer at heart! You crave raw power, cutting-edge performance, and the thrill of pushing limits. The 911 Turbo embodies your competitive spirit and desire for absolute excellence on every drive.',
  'cayman-gt4': 'You\'re a technical perfectionist who understands that true driving pleasure comes from precision and connection with the machine. The Cayman GT4 rewards your analytical approach with pure handling brilliance.',
  'taycan': 'You\'re a tech visionary looking toward the future of automotive innovation. The Taycan represents your belief that sustainability and performance aren\'t mutually exclusive – they\'re the future.',
  'panamera': 'You\'re an executive sophisticate who demands both power and practicality. The Panamera perfectly balances your need for luxury comfort with exhilarating performance for every journey.',
  'macan-turbo': 'You\'re an adventure seeker with versatile tastes. The Macan Turbo matches your desire to go anywhere, do anything, without sacrificing performance or style.',
  '918-hybrid': 'You\'re an elite collector with refined taste and deep appreciation for automotive artistry. The 918 Spyder represents the pinnacle – rare, exclusive, and utterly extraordinary.',
  'boxster-spyder': 'You\'re a free spirit who believes driving should be pure joy. The Boxster Spyder captures your enthusiasm for accessible performance and the uncomplicated pleasure of the open road.',
  '911-dakar': 'You\'re a bold explorer who refuses to be bound by conventional roads. The 911 Dakar celebrates your adventurous nature and unique approach to Porsche performance.',
  'carrera-gt': 'You\'re a passionate enthusiast with deep respect for automotive heritage and excellence. The Carrera GT is a legend that matches your passion for iconic, timeless machines.',
  'cayenne-e-hybrid': 'You\'re a conscious innovator who makes thoughtful choices without compromise. The Cayenne E-Hybrid reflects your commitment to luxury, capability, and environmental responsibility.'
};
