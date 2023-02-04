import Anchor from '@component/Anchor'
import Header from '@component/Header'

import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <>
      {/* dashboard */}
      <div className='pt-[89px] pl-[12.5rem] pr-2'>
        <Header />

        {/* sidebar */}
        <div className='bg-pp-sidebar w-48 h-screen fixed left-2 top-[89px] bottom-2 pt-10 flex flex-col'>
          <Anchor to='overview' intent='sidebar'>
            대시보드
          </Anchor>
          <Anchor to='service' intent='sidebar'>
            서비스 관리
          </Anchor>
          <Anchor to='member' intent='sidebar'>
            회원 관리
          </Anchor>
          <Anchor to='banner' intent='sidebar'>
            배너 관리
          </Anchor>
          <Anchor to='event' intent='sidebar'>
            이벤트 관리
          </Anchor>
          <Anchor to='offlineshop' intent='sidebar'>
            오프라인 매장 관리
          </Anchor>
          <Anchor to='onlinemall' intent='sidebar'>
            온라인몰 관리
          </Anchor>
          <Anchor to='admin' intent='sidebar' isLastElement>
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
