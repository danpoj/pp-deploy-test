import { button, ButtonProps } from '@ui/button'

const Button = ({ bgColor, padding, fullWidth, children, ...props }: ButtonProps) => {
  const style = button({ bgColor, padding, fullWidth })

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
}

export default Button
