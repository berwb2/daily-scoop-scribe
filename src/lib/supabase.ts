
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
export const supabase = createClient(
  'https://nypxkyvbsagjqasbemyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cHhreXZic2FnanFhc2JlbXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTc1NDksImV4cCI6MjA2MjAzMzU0OX0.HY6ZVogLOlnL__WroeBM8nS0bVHChQE7bDX3m1RrLI4'
);
