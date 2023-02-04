import ChartCard from '@component/ChartCard'
import OverviewCard from '@component/OverviewCard'

const Overview = () => {
  return (
    <>
      <h1 className='font-semibold mb-4'>Overview</h1>

      {/* overview cards */}
      {/* <div className='flex justify-between gap-4'> */}
      <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-2'>
        <OverviewCard title='누적 회원 수' amount='12,345' />
        <OverviewCard title='신규 회원 수' amount='1,000' />
        <OverviewCard title='로그인 회원 수' amount='500' />
        <OverviewCard title='매출(결제금액 기준)' amount='5,000,000' />
      </div>

      {/* chart */}
      <ChartCard />

      {/* box3 */}
      <div className='mt-2 grid gap-2 lg:grid-cols-3'>
        <div className='bg-white w-full h-80 rounded-lg flex justify-between p-4 shadow'>
          <span className='text-pp-gray text-xs font-semibold'>산책하기</span>
          <span className='text-[0.65rem]'>더 보기 &gt;&gt;</span>
        </div>
        <div className='bg-white w-full h-80 rounded-lg flex justify-between p-4 shadow'>
          <span className='text-pp-gray text-xs font-semibold'>다이어리/커뮤니티</span>
          <span className='text-[0.65rem]'>더 보기 &gt;&gt;</span>
        </div>
        <div className='bg-white w-full h-80 rounded-lg flex justify-between p-4 shadow'>
          <span className='text-pp-gray text-xs font-semibold'>분실정보</span>
          <span className='text-[0.65rem]'>더 보기 &gt;&gt;</span>
        </div>
      </div>
    </>
  )
}

export default Overview
