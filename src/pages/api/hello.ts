import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';

  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      method: request.method,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      message: 'Data received!',
      received: body,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
