import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick: () => void,
  variant: keyof typeof variants,
}

const variants = {
  create: "bg-cyan-400 hover:bg-cyan-500",
  delete: "bg-red-600 hover:bg-red-700",
}

const Button = (props: ButtonProps) => {
  const { children, className, onClick, variant } = props

  return (
    <button
      className={clsx(
        "border border-black p-1 rounded text-slate-900 w-28",
        variants[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button