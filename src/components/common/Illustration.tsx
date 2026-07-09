import { useState, type ImgHTMLAttributes } from 'react'

interface IllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** File name inside `public/Ilustration/`, e.g. "astronaut.png". */
  name: string
  alt: string
}

/**
 * Renders a manually-provided 3D illustration/icon from `public/Ilustration/`.
 * If the file hasn't been added yet, it fails silently (no broken-image icon)
 * so the reserved layout space just stays empty until the asset is dropped in.
 */
export function Illustration({ name, alt, ...props }: IllustrationProps) {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <img
      src={`/Ilustration/${name}`}
      alt={alt}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
