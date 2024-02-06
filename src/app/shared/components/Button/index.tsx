import clsx from 'clsx'


const variants = {
  create: "w-[80px] font-semibold bg-cyan-400 hover:bg-cyan-500",
  delete: "w-[80px] font-semibold bg-red-600 hover:bg-red-700",
}
interface ButtonProps {
  className?: string,
  disabled?: boolean,
  icon?: React.ReactNode,
  iconMargin?: string,
  onClick?: () => void,
  text?: string,
  textProps?: string,
  variant: keyof typeof variants,
}

const Button = (props: ButtonProps) => {
  const { className, disabled, icon, iconMargin = '2', onClick, text, textProps, variant } = props

  return (
    <button
      className={clsx(
        "flex group p-2 justify-center items-center rounded bg-cyan-400 hover:bg-cyan-500 text-white w-fit",
        className,
        variants[variant],
      )}
      disabled={disabled}
      onClick={onClick}
      
    >
      <div className={textProps}>{text}</div>

      {icon && (
        <div className={`ml-${text ? iconMargin : 0}`}>
          {icon}
        </div>
      )}
    </button>
  )
}

export default Button