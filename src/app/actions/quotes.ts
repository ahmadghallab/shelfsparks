'use server';

import quotes from '@/data/quotes.json'; 

export async function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export async function getQuoteById(id: number) {
  const quote = quotes.find(q => q.id === id);
  return quote ?? null;
}
