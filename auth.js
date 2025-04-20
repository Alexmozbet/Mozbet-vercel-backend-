const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://cotbfdtymsamvlclhclv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdGJmZHR5bXNhbXZsY2xoY2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODQ5MjAsImV4cCI6MjA2MDQ2MDkyMH0.S-J-qFgFxFo8SYv_BxfhF0Wm5kOaA3oKZosEkHtd-Q0'
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({ message: 'User registered', data });
}