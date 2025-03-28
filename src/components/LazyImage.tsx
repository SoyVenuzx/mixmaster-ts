import React, { useState, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholderSrc?: string
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholderSrc = '/placeholder.svg'
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Crear un nuevo objeto Image para precargar
    const imageLoader = new Image()
    imageLoader.src = src

    imageLoader.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
    }

    imageLoader.onerror = () => {
      setImageSrc(placeholderSrc)
      setIsLoading(false)
    }

    return () => {
      imageLoader.onload = null
      imageLoader.onerror = null
    }
  }, [src, placeholderSrc])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse'>
          <svg
            className='w-12 h-12 text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}
