interface FlowerIconProps {
  size?: number
  color?: string
}

/** Cluster-of-dots logo mark used in the navbar and section chips. */
export default function FlowerIcon({ size = 16, color = 'currentColor' }: FlowerIconProps) {
  const dots: Array<[number, number]> = [
    [8, 3.2],
    [12.2, 5.6],
    [12.2, 10.4],
    [8, 12.8],
    [3.8, 10.4],
    [3.8, 5.6],
    [8, 8],
  ]
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.35" fill={color} />
      ))}
    </svg>
  )
}
