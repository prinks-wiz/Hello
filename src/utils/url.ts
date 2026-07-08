// Prefix any site-internal path with Astro's configured base.
// BASE_URL = '/' (site deployed at root path, no base prefix)
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash

export function url(path: string): string {
  return `${base}${path}`;
}
