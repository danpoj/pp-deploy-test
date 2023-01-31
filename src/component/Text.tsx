import { text, TextProps } from '@ui/text'

const Text = ({ size, weight, align, children, ...props }: TextProps) => {
  const style = text({ size, weight, align })

  return <span className={style}>{children}</span>
}

export default Text
