import React, { useState } from 'react'

interface AreaItem {
  name: string
  Score: number
}

interface CustomAreaChartProps {
  width: number
  height: number
  data: AreaItem[]
}

export const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ width, height, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const padding = { top: 15, right: 15, bottom: 20, left: 30 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const yMax = 100
  const yTicks = [0, 25, 50, 75, 100]

  const getCoordinates = (score: number, index: number) => {
    const divisor = data.length > 1 ? data.length - 1 : 1
    const x = padding.left + (index / divisor) * chartWidth
    const scoreClamped = Math.max(0, Math.min(yMax, score))
    const y = padding.top + chartHeight - (scoreClamped / yMax) * chartHeight
    return { x, y }
  }

  // Calculate area path string
  const points = data.map((item, idx) => getCoordinates(item.Score, idx))
  
  // Line path (linear segments)
  const linePath = points.length > 0
    ? points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ')
    : ''

  // Area path (closed polygon back to bottom axis)
  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x},${padding.top + chartHeight} L ${points[0].x},${padding.top + chartHeight} Z`
    : ''

  // Hover detection columns
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - padding.left
    
    if (mouseX < 0) {
      setHoveredIndex(0)
      return
    }
    if (mouseX > chartWidth) {
      setHoveredIndex(data.length - 1)
      return
    }

    const colWidth = chartWidth / (data.length - 1)
    const rawIdx = Math.round(mouseX / colWidth)
    const idx = Math.max(0, Math.min(data.length - 1, rawIdx))
    setHoveredIndex(idx)
  }

  return (
    <div className="relative w-full h-full select-none">
      <svg
        width={width}
        height={height}
        className="overflow-visible cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="customAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.00" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {yTicks.map((tick, idx) => {
          const y = padding.top + chartHeight - (tick / yMax) * chartHeight
          return (
            <g key={idx} className="transition-colors">
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                className="text-slate-100 dark:text-slate-800/60"
                strokeWidth={1}
              />
              <text
                x={padding.left - 8}
                y={y + 3}
                textAnchor="end"
                className="text-[9px] font-medium fill-slate-400 dark:fill-slate-500"
              >
                {tick}%
              </text>
            </g>
          )
        })}

        {/* Closed Area Fill */}
        {areaPath && (
          <path
            d={areaPath}
            fill="url(#customAreaGradient)"
            className="transition-all duration-300"
          />
        )}

        {/* Line Stroke */}
        {linePath && (
          <path
            d={linePath}
            fill="none"
            stroke="#6366f1"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />
        )}

        {/* X Axis label tick */}
        {data.map((item, idx) => {
          const { x } = getCoordinates(item.Score, idx)
          // Only render first, middle, last, or every second to keep clean spacing
          const shouldShowLabel = data.length <= 6 || idx === 0 || idx === data.length - 1 || idx === Math.floor(data.length / 2)
          return shouldShowLabel ? (
            <text
              key={idx}
              x={x}
              y={padding.top + chartHeight + 14}
              textAnchor="middle"
              className="text-[9px] font-semibold fill-slate-400 dark:fill-slate-500"
            >
              {item.name}
            </text>
          ) : null
        })}

        {/* Vertical alignment line on Hover */}
        {hoveredIndex !== null && points[hoveredIndex] && (
          <line
            x1={points[hoveredIndex].x}
            y1={padding.top}
            x2={points[hoveredIndex].x}
            y2={padding.top + chartHeight}
            stroke="#6366f1"
            strokeDasharray="3 3"
            strokeWidth={1}
            className="pointer-events-none"
          />
        )}

        {/* Data points (dots) */}
        {points.map((pt, idx) => {
          const isHovered = hoveredIndex === idx
          return (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r={isHovered ? 5 : 3}
              className="fill-indigo-500 stroke-white dark:stroke-slate-900 transition-all duration-150 pointer-events-none"
              strokeWidth={1.5}
            />
          )
        })}
      </svg>

      {/* Floating tooltip overlay */}
      {hoveredIndex !== null && data[hoveredIndex] && points[hoveredIndex] && (
        <div
          className="absolute bg-slate-950/95 text-white border border-slate-800 text-[10px] px-2 py-1 rounded-md shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-150"
          style={{
            left: `${points[hoveredIndex].x}px`,
            top: `${points[hoveredIndex].y - 6}px`
          }}
        >
          <div className="font-semibold text-slate-350">{data[hoveredIndex].name}</div>
          <div className="font-bold text-indigo-400 mt-0.5">
            Score: <span className="text-white">{data[hoveredIndex].Score}%</span>
          </div>
        </div>
      )}
    </div>
  )
}
