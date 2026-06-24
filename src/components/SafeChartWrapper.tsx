import React, { useState, useRef, useEffect } from 'react'

interface SafeChartWrapperProps {
  children: (width: number, height: number) => React.ReactNode
  height?: number
}

export const SafeChartWrapper: React.FC<SafeChartWrapperProps> = ({ children, height = 250 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return
      
      const { width, height: h } = entries[0].contentRect
      if (width > 0) {
        setDimensions({
          width: Math.floor(width),
          height: Math.floor(h || height)
        })
      }
    })
    
    resizeObserver.observe(containerRef.current)
    
    return () => {
      resizeObserver.disconnect()
    }
  }, [height])

  return (
    <div ref={containerRef} className="w-full h-full relative" style={{ minHeight: height }}>
      {dimensions && children(dimensions.width, dimensions.height)}
    </div>
  )
}
