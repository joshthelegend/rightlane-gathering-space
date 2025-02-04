import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://rhqajyosulbozafpxmpl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJocWFqeW9zdWxib3phZnB4bXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0NzAsImV4cCI6MjAyNTM5ODQ3MH0.7kP_OqODJvXH0JhqbPfzKLkfZOVbFDCzZ_l7RVKsJYc'

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)