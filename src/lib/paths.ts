const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefixes a `public/` asset path with the site's base path (needed for plain <a>/<img> URLs). */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
