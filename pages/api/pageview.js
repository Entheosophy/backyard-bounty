// /Users/entheos/Documents/Backyard Bounty/pages/api/pageview.js
import { getVisitorIp, recordPageView } from "../../lib/analyticsStore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const stats = await recordPageView(getVisitorIp(req));
  return res.status(stats.tracked ? 200 : 202).json(stats);
}
