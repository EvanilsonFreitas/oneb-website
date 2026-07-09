import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves a path under `public/` against Vite's configured base URL, so
 * asset references keep working when the site is deployed under a subpath
 * (e.g. GitHub Pages project sites at `/<repo-name>/`). Pass the path
 * without a leading slash, e.g. `asset('Logo/logo.svg')`.
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}
