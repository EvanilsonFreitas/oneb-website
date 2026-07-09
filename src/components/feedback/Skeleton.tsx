import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-white/5', className)}
      {...props}
    />
  )
}

interface CardGridSkeletonProps {
  count?: number
  className?: string
}

export function CardGridSkeleton({
  count = 6,
  className,
}: CardGridSkeletonProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-neutral-950/40"
        >
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="flex flex-1 flex-col gap-4 p-6">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="mt-auto flex items-center justify-between pt-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

interface DetailSkeletonProps {
  className?: string
}

export function DetailSkeleton({ className }: DetailSkeletonProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 py-12 lg:px-[7.5%]', className)}>
      <Skeleton className="mb-8 h-4 w-40" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-8">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="mt-8 h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
        </div>
        <div className="lg:col-span-4">
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
