import Anchor from '@component/Anchor'
import Header from '@component/Header'
import { button } from '@ui/button'
import { Outlet } from 'react-router-dom'

const Container = () => {
  const buttonUI = button({ intent: 'sidebar', className: 'border-l-8' })

  return (
    <>
      {/* dashboard */}
      <div className='pt-[89px] pl-[12.5rem] pr-2'>
        <Header />

        {/* sidebar */}
        <div className='bg-pp-sidebar w-48 h-screen fixed left-2 top-[89px] bottom-2 pt-10 flex flex-col'>
          <Anchor to='overview'>대시보드</Anchor>
          <Anchor to='service'>서비스 관리</Anchor>
          <Anchor to='member'>회원 관리</Anchor>
          <Anchor to='banner'>배너 관리</Anchor>
          <Anchor to='event'>이벤트 관리</Anchor>
          <Anchor to='offlineshop'>오프라인 매장 관리</Anchor>
          <Anchor to='onlinemall'>온라인몰 관리</Anchor>
          <Anchor to='admin' isLast>
            관리자
          </Anchor>
        </div>

        {/* contents */}
        <div className='bg-pp-background w-full p-8'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Container
