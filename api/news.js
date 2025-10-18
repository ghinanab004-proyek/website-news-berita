export default async function handler(req, res) {
  const { q } = req.query;
  const query = q || "indonesia";
  const API_KEY = process.env.NEWSAPI_KEY; // masukkan di environment Vercel
  const url = `https://newsapi.org/v2/everything?q=${query}&language=id&pageSize=15&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal memuat berita" });
  }
}
