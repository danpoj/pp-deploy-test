import { header, HeaderProps } from '@ui/header'

const Header = ({ bgColor, padding, children, ...props }: HeaderProps) => {
  const style = header({ bgColor, padding, ...props })

  return <header className={style}>{children}</header>
}

export default Header
