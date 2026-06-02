// /Users/entheos/Documents/Backyard Bounty/lib/analyticsStore.js
import { Redis } from "@upstash/redis";

const TOTAL_VIEWS_KEY = "bb:totalViews";
const UNIQUE_COUNT_KEY = "bb:uniqueCount";
const UNIQUE_TTL_SECONDS = 60 * 60 * 24 * 30;

let redis;

function hasRedisConfig() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function getRedis() {
  if (!hasRedisConfig()) return null;
  if (!redis) redis = Redis.fromEnv();
  return redis;
}

export function getVisitorIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }

  return req.socket.remoteAddress || "unknown";
}

export async function readStats() {
  const client = getRedis();
  if (!client) {
    return { available: false, totalViews: 0, uniqueVisitors: 0 };
  }

  try {
    const [totalViews, uniqueVisitors] = await Promise.all([
      client.get(TOTAL_VIEWS_KEY),
      client.get(UNIQUE_COUNT_KEY),
    ]);

    return {
      available: true,
      totalViews: Number(totalViews || 0),
      uniqueVisitors: Number(uniqueVisitors || 0),
    };
  } catch (error) {
    console.error("Failed to read Backyard Bounty stats", error);
    return { available: false, totalViews: 0, uniqueVisitors: 0 };
  }
}

export async function recordPageView(ip) {
  const client = getRedis();
  if (!client) {
    return { tracked: false, reason: "redis_unavailable", ...(await readStats()) };
  }

  const uniqueKey = `bb:unique:${ip}`;

  try {
    const totalViews = await client.incr(TOTAL_VIEWS_KEY);
    const alreadySeen = await client.get(uniqueKey);
    let uniqueVisitors = Number((await client.get(UNIQUE_COUNT_KEY)) || 0);

    if (!alreadySeen) {
      await client.set(uniqueKey, "1", { ex: UNIQUE_TTL_SECONDS });
      uniqueVisitors = Number(await client.incr(UNIQUE_COUNT_KEY));
    }

    return {
      available: true,
      tracked: true,
      totalViews: Number(totalViews || 0),
      uniqueVisitors,
    };
  } catch (error) {
    console.error("Failed to record Backyard Bounty page view", error);
    return { tracked: false, reason: "redis_error", ...(await readStats()) };
  }
}
