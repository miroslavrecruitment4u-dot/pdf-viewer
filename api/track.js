export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const timestamp = new Date().toISOString();

  // You can replace this with storage logic (e.g., save to database or external service)
  console.log(`[TRACKING LOG] IP: ${ip}, Time: ${timestamp}, UserAgent: ${userAgent}`);

  res.status(200).json({ status: "OK" });
}
