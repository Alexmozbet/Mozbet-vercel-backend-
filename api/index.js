export default function handler(req, res) {
  res.status(200).json({
    message: "Backend MozBet online com sucesso!",
    autor: "Alex Macuvel",
    status: "ok"
  });
}
