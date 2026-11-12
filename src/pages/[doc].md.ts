import type { APIRoute, GetStaticPaths } from 'astro';
import { docs } from '../lib/markdown';

export const getStaticPaths: GetStaticPaths = () => Object.keys(docs).map((doc) => ({ params: { doc } }));

export const GET: APIRoute = ({ params }) =>
  new Response(docs[params.doc as string](), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
