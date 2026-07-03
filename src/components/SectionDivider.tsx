import FlowerIcon from './FlowerIcon'

interface SectionDividerProps {
  label: string
}

/** Full-width hairline with a centered pill chip, e.g. “(services)”. */
export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="section-divider">
      <span className="section-chip">
        <FlowerIcon size={14} color="#fff" />
        {`(${label})`}
      </span>
    </div>
  )
}
