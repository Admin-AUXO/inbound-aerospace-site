import type { APIRoute } from 'astro';
import { abs, noindex } from '../lib/url';

const agents = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'Claude-SearchBot', 'Claude-User', 'ClaudeBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended'];

export const GET: APIRoute = () =>
  new Response(
    noindex
      ? 'User-agent: *\nDisallow: /\n'
      : `${agents.map((a) => `User-agent: ${a}`).join('\n')}\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap-index.xml')}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
