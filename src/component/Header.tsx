import { Link } from 'react-router-dom'
import noticeIcon from '../asset/notice.svg'
import profileImage from '../asset/profile.png'
import Anchor from './Anchor'

const Header = () => {
  return (
    <header className='flex flex-col fixed top-0 left-2 right-2 z-50'>
      {/* info */}
      <div className='flex justify-end items-center gap-2 pr-8 py-3 bg-white'>
        <img src={noticeIcon} alt='notice icon' className='w-4 h-4 mr-2' />
        <span className='text-xs'>root 님</span>
        <img src={profileImage} alt='profile image' className='w-6 h-6 rounded-full' />
        <button className='border border-stone-300 text-[10px] rounded px-2 py-1'>로그아웃</button>
      </div>

      {/* banner */}
      <div className='flex bg-pp-header justify-between px-4'>
        <button className='text-white py-2'>퍼피플 로고</button>

        <div className='hidden lg:flex gap-2 pr-12 items-center'>
          <Anchor to='overview' intent='header'>
            대시보드
          </Anchor>
          <Anchor to='service' intent='header'>
            서비스 관리
          </Anchor>
          <Anchor to='member' intent='header'>
            회원 관리
          </Anchor>
          <Anchor to='banner' intent='header'>
            배너 관리
          </Anchor>
          <Anchor to='event' intent='header'>
            이벤트 관리
          </Anchor>
          <Anchor to='offlineshop' intent='header'>
            오프라인 매장 관리
          </Anchor>
          <Anchor to='onlinemall' intent='header'>
            온라인몰 관리
          </Anchor>
          <Anchor to='admin' intent='header'>
            관리자
          </Anchor>
        </div>
      </div>
    </header>
  )
}

export default Header
