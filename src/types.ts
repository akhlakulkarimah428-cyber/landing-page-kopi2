export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  origin: string;
  originEn?: string;
  roastLevel: 'Light' | 'Medium' | 'Dark';
  flavorNotes: string[];
  flavorNotesEn?: string[];
  price: number;
  description: string;
  descriptionEn?: string;
  image: string;
  rating: number;
  process?: string;
  processEn?: string;
  elevation?: string;
  scaScore?: number;
  stockStatus?: 'Available' | 'Limited' | 'Sold Out';
  moisture?: string;
  fobPriceRange?: string;
  availableLots?: string;
  availableLotsEn?: string;
  defectCount?: string;
  defectCountEn?: string;
  bagType?: string;
  bagTypeEn?: string;
}

export interface BrewGuide {
  id: string;
  name: string;
  nameEn?: string;
  photo: string;
  ratio: string;
  temperature: string;
  time: string;
  timeEn?: string;
  grindSize: string;
  grindSizeEn?: string;
  steps: string[];
  stepsEn?: string[];
  description: string;
  descriptionEn?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEn?: string;
  avatar: string;
  rating: number;
  quote: string;
  quoteEn?: string;
}

export interface Article {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  image: string;
  date: string;
  dateEn?: string;
  readTime: string;
  readTimeEn?: string;
  summary: string;
  summaryEn?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionEn?: string;
  answer: string;
  answerEn?: string;
}

export interface TimelineStep {
  id: number;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}
