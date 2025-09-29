// pages/api/stats.js
import { Redis } from "@upstash/redis";

// Initialize Redis client (picks up env vars automatically)
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  // Grab IP from request
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  // Keys
  const totalKey = "bb:totalViews";
  const uniqueKey = `bb:unique:${ip}`;
  const uniqueCountKey = "bb:uniqueCount";

  // Increment total views
  const totalViews = await redis.incr(totalKey);

  // Handle unique visitor
  let uniqueVisitors = await redis.get(uniqueCountKey);
  if (!uniqueVisitors) {
    uniqueVisitors = 0;
  }

  const already = await redis.get(uniqueKey);
  if (!already) {
    // First time for this IP
    await redis.set(uniqueKey, "1", { ex: 60 * 60 * 24 * 30 }); // expire after 30 days
    uniqueVisitors = await redis.incr(uniqueCountKey);
  }

  res.status(200).json({
    totalViews: Number(totalViews || 0),
    uniqueVisitors: Number(uniqueVisitors || 0),
  });
}
