import { box, BoxProps } from '@ui/box'

const Box = ({ bgColor, padding, children, ...props }: BoxProps) => {
  const style = box({ bgColor, padding, ...props })

  return <div className={style}>{children}</div>
}

export default Box
