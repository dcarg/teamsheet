interface LabelProps {
  text: string
}

const Label = (props: LabelProps) => {
  const { text } = props

  return (
    <div className="mb-1 text-slate-500 text-sm tracking-wider">{text}</div>
  )
}

export default Label