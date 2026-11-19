/**
 * Resolves an asset path for static hosting (e.g. GitHub Pages)
 * where the application is deployed under a subpath (basePath).
 *
 * Works with both Next.js <Image /> (with images.unoptimized: true)
 * and standard <img> elements, preventing double-prefixing.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";

  // Return external URLs, protocol-relative URLs, or data/blob URLs as-is
  if (/^(?:https?:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/harit_portfolio" : "");

  // Strip leading slashes to normalize
  const cleanPath = path.replace(/^\/+/, "");

  // Avoid double-prefixing if the path already starts with the basePath
  const normalizedBasePath = basePath.replace(/^\/+/, "");
  if (
    normalizedBasePath &&
    (cleanPath === normalizedBasePath || cleanPath.startsWith(`${normalizedBasePath}/`))
  ) {
    return `/${cleanPath}`;
  }

  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
