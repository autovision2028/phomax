import type { NextApiRequest, NextApiResponse } from "next";

async function getZohoAccessToken() {
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error(
      "Missing Zoho env vars. Required: ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET."
    );
  }

  const tokenResponse = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData?.access_token) {
    const message = tokenData?.error ? String(tokenData.error) : "Failed to refresh Zoho access token";
    throw new Error(message);
  }

  return String(tokenData.access_token);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, productInterest } = req.body ?? {};

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields: name, email" });
    }

    const accessToken = await getZohoAccessToken();

    const createLeadResponse = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: String(name),
            Email: String(email),
            Phone: phone ? String(phone) : undefined,
            Lead_Source: "Website – Auto Vision",
            Description: productInterest ? `Product Interest: ${String(productInterest)}` : undefined,
          },
        ],
      }),
    });

    const createLeadData = await createLeadResponse.json();

    if (!createLeadResponse.ok) {
      return res.status(502).json({ error: "Zoho lead creation failed", details: createLeadData });
    }

    return res.status(200).json({ ok: true, zoho: createLeadData });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}