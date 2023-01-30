import { button, ButtonProps } from '@ui/button'

const Button = ({ intent, size, children, ...props }: ButtonProps) => {
  const style = button({ intent, size })

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
}

export default Button
