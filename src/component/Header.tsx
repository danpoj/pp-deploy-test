import FlexBox from 'Layout/FlexBox'
import Button from './Button'
import Text from './Text'

const Header = () => {
  return (
    <header className='flex bg-pp-header w-full justify-between pl-4 pr-20'>
      <Button intent='header'>퍼피플 로고</Button>

      <FlexBox padding='sm' gap='lg'>
        <Button intent='header'>회원 관리</Button>
        <Button intent='header'>배너 관리</Button>
        <Button intent='header'>이벤트 관리</Button>
        <Button intent='header'>오프라인 매장 관리</Button>
        <Button intent='header'>온라인몰 관리</Button>
        <Button intent='header'>관리자</Button>
      </FlexBox>
    </header>
  )
}

export default Header
