import { input, InputProps } from '@ui/input'
import { forwardRef, Ref } from 'react'

const Input = ({ bgColor, padding, widthLen, ...props }: InputProps, ref: any) => {
  const style = input({ bgColor, padding, widthLen })

  return <input className={style} {...props} ref={ref} />
}

export default forwardRef(Input)
