import { button, ButtonProps } from '@ui/button'

const Button = ({ intent, className, children, ...props }: ButtonProps) => {
  const style = button({ intent, className })

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
}

export default Button
