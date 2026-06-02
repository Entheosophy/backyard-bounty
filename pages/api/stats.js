// /Users/entheos/Documents/Backyard Bounty/pages/api/stats.js
import { readStats } from "../../lib/analyticsStore";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json(await readStats());
}
