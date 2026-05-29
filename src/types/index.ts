// Shared types for the application
export type PlanTier = 'starter' | 'professional' | 'enterprise';

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
