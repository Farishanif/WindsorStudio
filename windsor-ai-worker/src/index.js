export default {
  async fetch(request, env) {
    // 1. Define the whitelist array containing your trusted production origins
    const allowedOrigins = [
      "https://windsorstudio.pages.dev",
      "https://farishanif.github.io"
    ];

    // Read the domain name of the website currently trying to chat
    const origin = request.headers.get("Origin");

    // 2. Establish baseline layout parameters
    const corsHeaders = {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // 3. Security Validation Check: If the origin matches a trusted domain, grant permission
    if (allowedOrigins.includes(origin)) {
      corsHeaders["Access-Control-Allow-Origin"] = origin;
    } else {
      // If a hacker from another site calls it, fall back safely to your primary site (blocking them)
      corsHeaders["Access-Control-Allow-Origin"] = "https://windsorstudio.pages.dev";
    }

    // Handle standard browser preflight safety checks
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { messages } = await request.json();

      // Execute using the custom frontend prompts passed down by either of your layout systems
      const response = await env.AI.run("@cf/qwen/qwen2.5-coder-32b-instruct", {
        messages: messages,
      });

      return new Response(JSON.stringify(response), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  },
};
