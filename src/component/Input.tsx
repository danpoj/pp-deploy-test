import { input, InputProps } from '@ui/input'

const Input = ({ bgColor, padding, widthLen, ...props }: InputProps) => {
  const style = input({ bgColor, padding, widthLen })

  return <input className={style} {...props} />
}

export default Input
