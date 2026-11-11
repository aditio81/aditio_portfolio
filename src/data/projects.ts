import { caseStudies } from "@/content";
import type { Category } from "@/content/types";

// File ini TIDAK perlu diedit lagi.
// Daftar proyek untuk /work dan homepage diturunkan otomatis dari src/content/projects/*.
export type ProjectCategory = Category;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;      // utama
  categories: ProjectCategory[];  // utama + tambahan (untuk filter di /work)
  role: string;
  year: string;
  description: string;
  teaser?: string;
  stack: string[];
  imagePlaceholder: string;
  staticImage?: string;
  imagePosition?: string;
  imageScale?: number;
}

export const projects: Project[] = caseStudies.map((c) => ({
  id: c.slug,
  title: c.title,
  category: c.category,
  categories: [c.category, ...(c.alsoIn ?? [])],
  role: c.role,
  year: c.year,
  description: c.card.description,
  teaser: c.card.teaser,
  stack: c.tools,
  imagePlaceholder: c.card.image,
  staticImage: c.card.staticImage,
  imagePosition: c.card.imagePosition,
  imageScale: c.card.imageScale,
}));
