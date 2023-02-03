import Header from '@component/Header'
import Box from './Box'
import noticeIcon from '../asset/notice.svg'
import profileImage from '../asset/profile.png'
import Text from '@component/Text'
import Button from '@component/Button'

const DashBoardContainer = () => {
  return (
    <>
      <div className='flex justify-end items-center gap-2 px-12 py-4'>
        <img src={noticeIcon} alt='notice icon' className='w-5 h-5' />
        <Text size='xs'>root 님</Text>
        <img src={profileImage} alt='profile image' className='w-7 h-7 rounded-full' />
        <Button intent='logout'>로그아웃</Button>
      </div>
      <div className='px-2'>
        <div className='relative'>
          <Header />
        </div>
      </div>
    </>
  )
}

export default DashBoardContainer
