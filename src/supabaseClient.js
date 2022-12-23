import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhytkcuoinxkkvfxfzsb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoeXRrY3VvaW54a2t2ZnhmenNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2MjIyNjAsImV4cCI6MTk4NzE5ODI2MH0.NMNCgffaBNXZ6mTKmSEZTb3tuwW5Qc7jHo8Dh9lnA6k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
