// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rhqajyosulbozafpxmpl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJocWFqeW9zdWxib3phZnB4bXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDQ0MjEsImV4cCI6MjA1NDI4MDQyMX0.pEbrZLZo98wxO7DVfUBFdipAHG0CbiYyAoE9PBynZRI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);