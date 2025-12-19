'use client';

interface BarChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  title: string;
  maxValue?: number;
}

export function BarChart({ data, title, maxValue }: BarChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value));
  const chartHeight = 300;
  const barHeight = (chartHeight - 40) / data.length;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#e2e8f0',
        marginBottom: '1.5rem',
        marginTop: 0
      }}>
        {title}
      </h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '1.5rem',
        minHeight: '300px'
      }}>
        {data.map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '120px',
              fontSize: '0.9rem',
              color: '#cbd5e1',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {item.label}
            </div>
            <div style={{
              flex: 1,
              height: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '100%',
                width: `${(item.value / max) * 100}%`,
                background: item.color,
                borderRadius: '8px',
                transition: 'width 0.5s ease-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '0.75rem',
                boxShadow: `0 0 20px ${item.color}40`
              }}>
                {item.value > 0 && (
                  <span style={{
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PieChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  title: string;
}

export function PieChart({ data, title }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const slices = data.map((item) => {
    const sliceAngle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = 150 + 100 * Math.cos(startRad);
    const y1 = 150 + 100 * Math.sin(startRad);
    const x2 = 150 + 100 * Math.cos(endRad);
    const y2 = 150 + 100 * Math.sin(endRad);
    
    const largeArc = sliceAngle > 180 ? 1 : 0;
    const pathData = `M 150 150 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`;
    
    currentAngle = endAngle;
    
    return {
      path: pathData,
      color: item.color,
      label: item.label,
      percentage: ((item.value / total) * 100).toFixed(1),
      value: item.value
    };
  });

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#e2e8f0',
        marginBottom: '1.5rem',
        marginTop: 0
      }}>
        {title}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '2rem'
      }}>
        <svg width="300" height="300" viewBox="0 0 300 300" style={{ maxWidth: '100%' }}>
          {slices.map((slice, idx) => (
            <path
              key={idx}
              d={slice.path}
              fill={slice.color}
              fillOpacity="0.8"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              style={{
                filter: `drop-shadow(0 0 10px ${slice.color}40)`,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.target as SVGPathElement).style.fillOpacity = '1';
                (e.target as SVGPathElement).style.filter = `drop-shadow(0 0 20px ${slice.color}80)`;
              }}
              onMouseLeave={(e) => {
                (e.target as SVGPathElement).style.fillOpacity = '0.8';
                (e.target as SVGPathElement).style.filter = `drop-shadow(0 0 10px ${slice.color}40)`;
              }}
            />
          ))}
        </svg>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          justifyContent: 'center'
        }}>
          {slices.map((slice, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                background: slice.color,
                boxShadow: `0 0 10px ${slice.color}60`
              }} />
              <span style={{
                fontSize: '0.9rem',
                color: '#cbd5e1',
                flex: 1
              }}>
                {slice.label}
              </span>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: slice.color,
                minWidth: '60px',
                textAlign: 'right'
              }}>
                {slice.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface LineChartProps {
  data: Array<{ timestamp: string; value: number }>;
  title: string;
  color?: string;
}

export function LineChart({ data, title, color = '#ef2b2d' }: LineChartProps) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const width = 600;
  const height = 300;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((item, idx) => {
    const x = padding + (idx / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - (item.value / maxValue) * chartHeight;
    return { x, y, value: item.value };
  });

  const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  // Get last 7 days or dates
  const timestamps = data.slice(-7).map(d => {
    const date = new Date(d.timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{
        fontSize: '1.2rem',
        fontWeight: 700,
        color: '#e2e8f0',
        marginBottom: '1.5rem',
        marginTop: 0
      }}>
        {title}
      </h3>
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '1.5rem',
        overflowX: 'auto'
      }}>
        <svg 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
          style={{ minWidth: '100%' }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={`grid-${i}`}
              x1={padding}
              y1={padding + (chartHeight / 4) * i}
              x2={width - padding}
              y2={padding + (chartHeight / 4) * i}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}

          {/* Y-axis labels */}
          {[0, 1, 2, 3, 4].map(i => (
            <text
              key={`y-label-${i}`}
              x={padding - 10}
              y={padding + (chartHeight / 4) * i + 5}
              textAnchor="end"
              fill="#94a3b8"
              fontSize="12"
            >
              {Math.round((maxValue / 4) * (4 - i))}
            </text>
          ))}

          {/* Path background gradient area */}
          <defs>
            <linearGradient id="lineChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area under line */}
          <path
            d={`${pathD} L ${points[points.length - 1].x} ${padding + chartHeight} L ${padding} ${padding + chartHeight} Z`}
            fill="url(#lineChartGradient)"
          />

          {/* Line */}
          <path
            d={pathD}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: `drop-shadow(0 0 10px ${color}40)`
            }}
          />

          {/* Data points */}
          {points.map((p, idx) => (
            <circle
              key={`point-${idx}`}
              cx={p.x}
              cy={p.y}
              r="5"
              fill={color}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              style={{
                filter: `drop-shadow(0 0 8px ${color}60)`,
                cursor: 'pointer'
              }}
            />
          ))}

          {/* X-axis */}
          <line
            x1={padding}
            y1={padding + chartHeight}
            x2={width - padding}
            y2={padding + chartHeight}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
