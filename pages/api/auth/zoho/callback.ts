import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, error, location = "us" } = req.query;

  console.log(" Zoho OAuth callback received:", { code, error });

  if (error) {
    console.error(" Zoho OAuth error:", error);
    return res.redirect(`/auth/error?error=${encodeURIComponent(error as string)}`);
  }

  if (!code) {
    console.error(" No authorization code provided");
    return res.redirect("/auth/error?error=No authorization code provided");
  }

  try {
    // Determine Zoho accounts domain based on location
    const accountsDomain = location === "eu" ? "https://accounts.zoho.eu" : 
                          location === "in" ? "https://accounts.zoho.in" : 
                          "https://accounts.zoho.com";

    // Exchange code for tokens
    const tokenResponse = await fetch(`${accountsDomain}/oauth/v2/token`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Phomax Integration/1.0"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        redirect_uri: process.env.ZOHO_REDIRECT_URI!,
        code: code as string
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error(" Token exchange failed:", tokenData);
      return res.redirect(`/auth/error?error=${encodeURIComponent(tokenData.error || "Token exchange failed")}`);
    }

    console.log(" Successfully obtained Zoho tokens");

    // Store tokens securely (in production, use database)
    // For now, we'll redirect to a success page with the tokens in the URL (not secure for production!)
    const successUrl = `/auth/success?access_token=${encodeURIComponent(tokenData.access_token)}&refresh_token=${encodeURIComponent(tokenData.refresh_token)}&expires_in=${tokenData.expires_in}`;
    
    return res.redirect(successUrl);

  } catch (err: any) {
    console.error(" Unexpected error:", err);
    return res.redirect(`/auth/error?error=${encodeURIComponent(err.message || "Unknown error")}`);
  }
}
