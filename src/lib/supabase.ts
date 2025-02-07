import { createClient } from '@supabase/supabase-js';

// Default to empty strings if env vars are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and Anon Key are required. Please connect to Supabase in your project settings.');
}

// Create a dummy client that throws errors when used if credentials are missing
export const supabase = !supabaseUrl || !supabaseAnonKey
  ? {
      from: () => {
        throw new Error('Please connect to Supabase in your project settings before using database features.');
      },
      // Add other commonly used methods
      auth: {
        signIn: () => {
          throw new Error('Please connect to Supabase in your project settings before using authentication features.');
        },
        signUp: () => {
          throw new Error('Please connect to Supabase in your project settings before using authentication features.');
        }
      }
    }
  : createClient(supabaseUrl, supabaseAnonKey);