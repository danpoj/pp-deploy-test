import { button, ButtonProps } from '@ui/button'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface AnchorProps extends ButtonProps {
  to: string
  isLastElement?: boolean
  children: ReactNode
}

const Anchor = ({ intent, to, isLastElement, children }: AnchorProps) => {
  const { pathname } = useLocation()
  const isCurrentPage = pathname.includes(to)

  const buttonUI = button({
    intent,
    sidebarActive: isCurrentPage && intent === 'sidebar',
    headerActive: isCurrentPage && intent === 'header',
    isLastElement,
  })

  return (
    <Link to={`${to}`} className={buttonUI}>
      {children}
    </Link>
  )
}

export default Anchor
