interface LabelProps {
  children: React.ReactNode
}

const Label = (props: LabelProps) => {
  const { children } = props

  return (
    <div className="mb-1 text-slate-500 text-sm tracking-wider">{children}</div>
  )
}

export default Label