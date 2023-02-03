import { text, TextProps } from '@ui/text'

const Text = ({ size, weight, align, className, children, ...props }: TextProps) => {
  const style = text({ size, weight, align, className, ...props })

  return <span className={style}>{children}</span>
}

export default Text
