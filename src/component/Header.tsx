import { Link } from 'react-router-dom'
import noticeIcon from '../asset/notice.svg'
import profileImage from '../asset/profile.png'

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
      <div className='flex bg-pp-header py-2 justify-between px-4'>
        <button className='text-white'>퍼피플 로고</button>

        <div className='flex gap-8 pr-12 items-center'>
          <Link to='/dashboard/overview' className='text-white text-xs'>
            대시보드
          </Link>
          <Link to='/dashboard/service' className='text-white text-xs'>
            서비스 관리
          </Link>
          <Link to='/dashboard/member' className='text-white text-xs'>
            회원 관리
          </Link>
          <Link to='/dashboard/banner' className='text-white text-xs'>
            배너 관리
          </Link>
          <Link to='/dashboard/event' className='text-white text-xs'>
            이벤트 관리
          </Link>
          <Link to='/dashboard/offlineshop' className='text-white text-xs'>
            오프라인 매장 관리
          </Link>
          <Link to='/dashboard/onlinemall' className='text-white text-xs'>
            온라인몰 관리
          </Link>
          <Link to='/dashboard/admin' className='text-white text-xs'>
            관리자
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
