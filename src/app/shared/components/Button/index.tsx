interface ButtonProps {
  className?: string,
  disabled?: boolean,
  href?: string,
  onClick?: Function,
  text: string,
}

const Button = (props: ButtonProps) => {
  const { className, disabled, href, onClick, text } = props

  return (
    <button
      className={`align-middle  rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 ${className}`}
      href={href}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button