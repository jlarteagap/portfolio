import type { APIRoute } from 'astro';
import { aboutData } from '../../data/about';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(aboutData),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
