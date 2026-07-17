import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  duration?: string
  className?: string
}

/**
 * Player de vídeo do Design System — usado nos modais "Ver exemplo".
 * Renderiza um frame estilo janela de app com poster + play; o vídeo só é
 * carregado quando o usuário dá o play (economia de banda).
 */
export function VideoPlayer({
  src,
  poster,
  title,
  duration,
  className,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl',
        className,
      )}
    >
      {/* Barra da janela (frame visual) */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-neutral-900/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <p className="ml-3 truncate text-[11px] font-medium text-neutral-400">
          {title}
        </p>
        {duration && (
          <span className="ml-auto shrink-0 rounded bg-white/5 px-2 py-0.5 text-[10px] text-neutral-500">
            {duration}
          </span>
        )}
      </div>

      <div className="relative aspect-video w-full bg-black">
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain"
          >
            <track kind="captions" />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir demonstração: ${title}`}
            className="group relative h-full w-full cursor-pointer"
          >
            <img
              src={poster}
              alt={title}
              className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-primary-500 flex h-16 w-16 items-center justify-center rounded-full text-black shadow-[0_0_40px_rgba(62,240,170,0.45)] transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>
            <span className="absolute right-0 bottom-4 left-0 text-center text-xs font-semibold tracking-wider text-white/80 uppercase">
              Assistir demonstração
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
