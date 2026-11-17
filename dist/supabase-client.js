'use strict';

const SUPABASE_URL = 'https://fgvxnjlnsoepygbcfaoo.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_VUgAa1G9TlM31H2wgA231w_lZnrM0gD';

// This browser-safe publishable key is intended for frontend use.
if (!window.supabase || typeof window.supabase.createClient !== 'function') {
  throw new Error('The local Supabase SDK did not load.');
}

window.ujimaSupabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
