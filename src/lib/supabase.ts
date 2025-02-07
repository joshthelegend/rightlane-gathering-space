import { createClient } from '@supabase/supabase-js';

// Default to empty strings if env vars are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and Anon Key are required. Please connect to Supabase in your project settings.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);