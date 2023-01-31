import { flexBox, FlexBoxProps } from '@ui/flexBox'

const FlexBox = ({ direction, gap, padding, bgColor, rounded, fullWidthMobile, children, ...props }: FlexBoxProps) => {
  const style = flexBox({ direction, gap, padding, bgColor, rounded, fullWidthMobile })

  return <div className={style}>{children}</div>
}

export default FlexBox
