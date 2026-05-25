// Prefix any site-internal path with Astro's configured base.
// BASE_URL = '/Hello/' in production, '/' in dev.
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash

export function url(path: string): string {
  return `${base}${path}`;
}
