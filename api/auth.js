const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://cotbfdtymsamvlclhclv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdGJmZHR5bXNhbXZsY2xoY2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODQ5MjAsImV4cCI6MjA2MDQ2MDkyMH0.S-J-qFgFxFo8SYv_BxfhF0Wm5kOaA3oKZosEkHtd-Q0';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
  const { username, email, password } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ username, email, password }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Usuário registrado com sucesso', data });
};
