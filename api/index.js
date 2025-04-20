export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      status: "online",
      projeto: "MozBet",
      backend: "Operacional",
      autor: "Alex Macuvel",
      mensagem: "MozBet Backend Online com Sucesso!"
    });
  } else {
    res.status(405).json({ erro: "Método não permitido" });
  }
}
