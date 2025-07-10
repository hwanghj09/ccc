import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qvxglfddveixpsqffryt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eGdsZmRkdmVpeHBzcWZmcnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNTY2NzMsImV4cCI6MjA2NzczMjY3M30.Pon7UAm_0PhOUdHDMkAaImAXTpjjBApr_SBViJWyIIQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
