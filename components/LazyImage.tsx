'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

interface LazyImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export default function LazyImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  sizes,
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate a simple blur placeholder
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${fill ? 'absolute inset-0' : ''} ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center p-4">
          <div className="text-gray-400 text-sm">Image not available</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} ${className}`} style={!fill ? { width, height } : undefined}>
      {/* Loading Skeleton with Shimmer Effect */}
      {isLoading && (
        <div className={`absolute inset-0 image-loading-skeleton flex items-center justify-center z-10 ${fill ? '' : 'rounded-lg'}`}>
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
            <span className="text-xs text-gray-500 font-medium">Loading...</span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => {
          // Small delay for smooth transition
          setTimeout(() => setIsLoading(false), 100)
        }}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        loading={priority ? undefined : 'lazy'}
      />
    </div>
  )
}

