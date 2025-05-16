import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uttknpaqmyrgfvynytpm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dGtucGFxbXlyZ2Z2eW55dHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzQ4NDEsImV4cCI6MjA2Mjg1MDg0MX0.FUn3FV_BM6mRNf9V677gUvFuEQ3IcAt-bf7q8KCuvqM';

export const supabase = createClient(supabaseUrl, supabaseKey);