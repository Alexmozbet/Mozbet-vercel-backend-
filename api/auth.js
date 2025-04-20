const { createClient } = require('@supabase/supabase-js');

// Credenciais Supabase
const supabaseUrl = 'https://cotbfdtymsamvlclhclv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdGJmZHR5bXNhbXZsY2xoY2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODQ5MjAsImV4cCI6MjA2MDQ2MDkyMH0.S-J-qFgFxFo8SYv_BxfhF0Wm5kOaA3oKZosEkHtd-Q0';

const supabase = createClient(supabaseUrl, supabaseKey);

// Vercel API Route padrão
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ username, email, password }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Usuário registrado com sucesso!', data });
}
