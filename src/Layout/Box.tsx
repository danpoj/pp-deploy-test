import { box, BoxProps } from '@ui/box'

const Box = ({ bgColor, padding, className, children, ...props }: BoxProps) => {
  const style = box({ bgColor, padding, className, ...props })

  return <div className={style}>{children}</div>
}

export default Box
