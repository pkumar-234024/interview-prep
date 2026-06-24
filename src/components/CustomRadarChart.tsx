import React, { useState } from 'react'

interface RadarData {
  subject: string
  completed: number
  total: number
  percentage: number
  fullMark: number
}

interface CustomRadarChartProps {
  width: number
  height: number
  data: RadarData[]
}

export const CustomRadarChart: React.FC<CustomRadarChartProps> = ({ width, height, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const cx = width / 2
  const cy = height / 2
  
  // Keep the padding generous to fit the labels comfortably
  const maxRadius = Math.min(width, height) * 0.35
  const numPoints = data.length

  // Calculate coordinates for a given radius and point index
  const getCoordinates = (index: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / numPoints - Math.PI / 2
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      angle
    }
  }

  // Draw concentric polygon rings for the grid (e.g. 20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0]
  const gridPolygons = gridLevels.map((level) => {
    const r = maxRadius * level
    const points = Array.from({ length: numPoints }, (_, i) => {
      const { x, y } = getCoordinates(i, r)
      return `${x},${y}`
    }).join(' ')
    return points
  })

  // Data path calculation
  const dataPoints = data.map((d, i) => {
    const r = maxRadius * (Math.max(0, Math.min(100, d.percentage)) / 100)
    return getCoordinates(i, r)
  })

  const dataPathString = dataPoints.length > 0
    ? `${dataPoints.map((p) => `${p.x},${p.y}`).join(' ')}`
    : ''

  return (
    <div className="relative w-full h-full select-none">
      <svg width={width} height={height} className="overflow-visible">
        {/* Concentric grid rings */}
        {gridPolygons.map((points, idx) => (
          <polygon
            key={idx}
            points={points}
            fill="none"
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800 transition-colors"
            strokeWidth={1}
            strokeDasharray={idx === 4 ? 'none' : '3 3'}
          />
        ))}

        {/* Radial Axis Lines */}
        {Array.from({ length: numPoints }).map((_, i) => {
          const outerPoint = getCoordinates(i, maxRadius)
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={outerPoint.x}
              y2={outerPoint.y}
              stroke="currentColor"
              className="text-slate-200 dark:text-slate-800 transition-colors"
              strokeWidth={1}
            />
          )
        })}

        {/* Level Ticks (drawn along the top axis) */}
        {gridLevels.map((level, idx) => {
          const r = maxRadius * level
          return (
            <text
              key={idx}
              x={cx + 4}
              y={cy - r + 3}
              className="text-[9px] font-medium fill-slate-400 pointer-events-none"
            >
              {Math.round(level * 100)}%
            </text>
          )
        })}

        {/* Filled Data Polygon */}
        {dataPathString && (
          <polygon
            points={dataPathString}
            fill="rgba(99, 102, 241, 0.15)"
            stroke="#6366f1"
            strokeWidth={2}
            className="transition-all duration-300"
          />
        )}

        {/* Category Labels */}
        {data.map((d, i) => {
          const labelPoint = getCoordinates(i, maxRadius + 14)
          const angle = labelPoint.angle
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)

          // Determine text alignment based on angle quadrant
          let textAnchor: 'start' | 'end' | 'middle' = 'middle'
          let dx = 0
          let dy = 0

          if (cos > 0.1) {
            textAnchor = 'start'
            dx = 2
          } else if (cos < -0.1) {
            textAnchor = 'end'
            dx = -2
          }

          if (sin > 0.7) {
            dy = 8
          } else if (sin < -0.7) {
            dy = -2
          } else {
            dy = 3
          }

          // Truncate long labels on small spaces if necessary
          const displayLabel = d.subject

          return (
            <g
              key={i}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <text
                x={labelPoint.x + dx}
                y={labelPoint.y + dy}
                textAnchor={textAnchor}
                className="text-[10px] font-semibold fill-slate-600 dark:fill-slate-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 transition-colors"
              >
                {displayLabel}
              </text>
            </g>
          )
        })}

        {/* Interactive Dots & Tooltip Hotspots */}
        {dataPoints.map((pt, i) => {
          const isHovered = hoveredIndex === i
          return (
            <g key={i}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isHovered ? 6 : 4}
                className="fill-indigo-500 stroke-white dark:stroke-slate-900 transition-all duration-150 cursor-pointer"
                strokeWidth={1.5}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {/* Invisible large hover area */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={16}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </g>
          )
        })}
      </svg>

      {/* HTML Tooltip Floating Overlay */}
      {hoveredIndex !== null && data[hoveredIndex] && (
        <div
          className="absolute bg-slate-950/95 text-white border border-slate-800 text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-150"
          style={{
            left: `${dataPoints[hoveredIndex].x}px`,
            top: `${dataPoints[hoveredIndex].y - 8}px`
          }}
        >
          <div className="font-bold text-indigo-400">{data[hoveredIndex].subject}</div>
          <div className="text-[10px] text-slate-300 mt-0.5">
            Readiness: <span className="text-white font-semibold">{data[hoveredIndex].percentage}%</span>
          </div>
          <div className="text-[9px] text-slate-400 mt-0.5">
            Completed: {data[hoveredIndex].completed} / {data[hoveredIndex].total}
          </div>
        </div>
      )}
    </div>
  )
}
