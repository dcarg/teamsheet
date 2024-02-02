import clsx from 'clsx'

interface ButtonProps {
  className?: string,
  disabled?: boolean,
  icon?: React.ReactNode,
  iconMargin?: string,
  onClick?: () => void,
  text?: string,
  textProps?: string,
}

const Button = (props: ButtonProps) => {
  const { className, disabled, icon, iconMargin = '2', onClick, text, textProps } = props

  return (
    <button
      className={clsx(
        "flex group p-2 align-middle rounded bg-cyan-400 hover:bg-cyan-500 text-white",
        className,
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