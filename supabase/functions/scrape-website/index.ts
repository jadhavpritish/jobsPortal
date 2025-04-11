// Follow Deno runtime API
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const PICA_API_ENDPOINT = "https://api.picaos.com/v1/passthrough/v1/scrape";

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
      },
      status: 200,
    });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: "URL is required" }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 400,
      });
    }

    // Get environment variables
    const picaSecretKey = Deno.env.get("PICA_SECRET_KEY");
    const picaConnectionKey = Deno.env.get("PICA_FIRECRAWL_CONNECTION_KEY");

    // Validate environment variables
    if (!picaSecretKey || !picaConnectionKey) {
      console.error("Missing required environment variables");
      return new Response(
        JSON.stringify({
          error: "Server configuration error: Missing required credentials",
          details:
            "PICA_SECRET_KEY and PICA_FIRECRAWL_CONNECTION_KEY must be set",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          status: 500,
        },
      );
    }

    // Call the Firecrawl API through Pica passthrough
    const response = await fetch(PICA_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-pica-secret": picaSecretKey,
        "x-pica-connection-key": picaConnectionKey,
        "x-pica-action-id": "conn_mod_def::GClH_gYvdtQ::cbt1pY3eSOW7SsB6Ezov8A",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Firecrawl API error:", response.status, errorData);
      return new Response(
        JSON.stringify({
          error: "Error from scraping service",
          status: response.status,
          details: errorData,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          status: response.status,
        },
      );
    }

    const data = await response.json();

    // Ensure we're returning a properly formatted response
    return new Response(JSON.stringify({ data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error scraping website:", error);

    return new Response(
      JSON.stringify({ error: error.message || "Failed to scrape website" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      },
    );
  }
});
