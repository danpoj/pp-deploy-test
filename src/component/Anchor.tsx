import { button } from '@ui/button'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Anchor = ({ to, isLast, children }: { to: string; isLast?: boolean; children: ReactNode }) => {
  const { pathname } = useLocation()
  const isCurrentPage = pathname.includes(to)
  const buttonUI = button({
    intent: 'sidebar',
    className: `${isLast && 'border-b'} ${isCurrentPage && 'border-l-8 bg-pp-sidebar-active'}`,
  })

  return (
    <Link to={`/dashboard/${to}`} className={buttonUI}>
      {children}
    </Link>
  )
}

export default Anchor
