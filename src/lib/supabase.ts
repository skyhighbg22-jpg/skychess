import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (import.meta.env as any).VITE_SUPABASE_URL
const supabaseAnonKey =(import.meta.env as any).VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase configuration. Please check your environment variables.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
