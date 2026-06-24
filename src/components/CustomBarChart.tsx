import React, { useState } from 'react'

interface BarItem {
  name: string
  Score: number
}

interface CustomBarChartProps {
  width: number
  height: number
  data: BarItem[]
}

export const CustomBarChart: React.FC<CustomBarChartProps> = ({ width, height, data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const yMax = 100
  const yTicks = [0, 25, 50, 75, 100]

  const barWidth = Math.min(36, (chartWidth / data.length) * 0.55)
  const groupWidth = chartWidth / data.length

  const getCoordinates = (score: number, index: number) => {
    const x = padding.left + index * groupWidth + (groupWidth - barWidth) / 2
    const scoreClamped = Math.max(0, Math.min(yMax, score))
    const barHeight = (scoreClamped / yMax) * chartHeight
    const y = padding.top + chartHeight - barHeight
    return { x, y, barHeight }
  }

  // Draw rounded top corner bar path
  const getBarPath = (x: number, y: number, w: number, h: number, r: number) => {
    if (h <= 0) return ''
    const radius = Math.min(r, h, w / 2)
    return `
      M ${x},${y + h}
      L ${x},${y + radius}
      Q ${x},${y} ${x + radius},${y}
      L ${x + w - radius},${y}
      Q ${x + w},${y} ${x + w},${y + radius}
      L ${x + w},${y + h}
      Z
    `
  }

  return (
    <div className="relative w-full h-full select-none">
      <svg width={width} height={height} className="overflow-visible">
        {/* Gradients definitions */}
        <defs>
          <linearGradient id="customBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines and Y Axis ticks */}
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
                x={padding.left - 10}
                y={y + 4}
                textAnchor="end"
                className="text-[10px] font-medium fill-slate-400 dark:fill-slate-500"
              >
                {tick}%
              </text>
            </g>
          )
        })}

        {/* X Axis line */}
        <line
          x1={padding.left}
          y1={padding.top + chartHeight}
          x2={width - padding.right}
          y2={padding.top + chartHeight}
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-800"
          strokeWidth={1}
        />

        {/* Bars */}
        {data.map((item, idx) => {
          const { x, y, barHeight } = getCoordinates(item.Score, idx)
          const isHovered = hoveredIndex === idx
          const barPath = getBarPath(x, y, barWidth, barHeight, 6)

          return (
            <g
              key={idx}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Bar Rect/Path */}
              {barHeight > 0 && (
                <path
                  d={barPath}
                  fill="url(#customBarGradient)"
                  className="transition-all duration-200"
                  style={{
                    opacity: isHovered ? 0.95 : 0.8,
                    filter: isHovered ? 'drop-shadow(0 4px 6px rgba(99, 102, 241, 0.25))' : 'none'
                  }}
                />
              )}

              {/* Zero score placeholder indicator */}
              {barHeight <= 0 && (
                <rect
                  x={x}
                  y={padding.top + chartHeight - 2}
                  width={barWidth}
                  height={2}
                  fill="#cbd5e1"
                  className="dark:fill-slate-700"
                />
              )}

              {/* X Axis label tick */}
              <text
                x={x + barWidth / 2}
                y={padding.top + chartHeight + 16}
                textAnchor="middle"
                className={`text-[10px] font-semibold transition-colors duration-150 ${
                  isHovered ? 'fill-indigo-500 dark:fill-indigo-400' : 'fill-slate-400 dark:fill-slate-500'
                }`}
              >
                {item.name}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Floating HTML tooltip */}
      {hoveredIndex !== null && data[hoveredIndex] && (
        <div
          className="absolute bg-slate-950/95 text-white border border-slate-800 text-xs px-3 py-1.5 rounded-lg shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-150"
          style={{
            left: `${getCoordinates(data[hoveredIndex].Score, hoveredIndex).x + barWidth / 2}px`,
            top: `${getCoordinates(data[hoveredIndex].Score, hoveredIndex).y - 6}px`
          }}
        >
          <div className="font-semibold text-slate-300">{data[hoveredIndex].name}</div>
          <div className="text-[10px] text-indigo-400 font-bold mt-0.5">
            Score: <span className="text-white">{data[hoveredIndex].Score}%</span>
          </div>
        </div>
      )}
    </div>
  )
}
