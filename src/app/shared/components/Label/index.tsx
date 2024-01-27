import clsx from 'clsx'

interface LabelProps {
  children: React.ReactNode,
  className?: string,
}

const Label = (props: LabelProps) => {
  const { children, className } = props

  return (
    <div className={clsx(
      "mb-1 text-slate-500 text-sm tracking-wider",
      className,
    )}
      >
      {children}
    </div>
  )
}

export default Label