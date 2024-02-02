import clsx from 'clsx'

import Label from '@components/Label'

interface FormFieldProps {
  className?: string,
  children: React.ReactNode,
  label?: string,
  labelProps?: string,
}

const FormField = (props: FormFieldProps) => {
  const { className, children, label, labelProps } = props

  return (
    <div className={clsx("flex flex-col", className)}>
      <Label className={labelProps}>{label}</Label>
      
      {children}
    </div>
  )
}

export default FormField