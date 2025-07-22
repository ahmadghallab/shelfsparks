'use server';

import quotes from '@/data/quotes.json'; 
import { revalidatePath } from 'next/cache';

export async function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export async function getQuoteById(id: number) {
  const quote = quotes.find(q => q.id === id);
  return quote ?? null;
}

export async function shuffleQuotes(path = '/') {
  revalidatePath(path);
}
