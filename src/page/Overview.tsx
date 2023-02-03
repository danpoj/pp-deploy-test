import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const data = {
  labels: ['3/1', '3/2', '3/3', '3/4', '3/5', '3/6', '3/7', '3/8', '3/9', '3/10'],
  datasets: [
    {
      label: '신규 회원 수',
      data: [50, 30, 64, 72, 36, 55, 92, 64, 112, 78],
      backgroundColor: '#bbddff',
      borderColor: '#bbddff',
      borderWidth: 2,
    },
    {
      label: '로그인 회원 수',
      data: [50, 30, 64, 72, 36, 55, 92, 64, 112, 78],
      backgroundColor: '#ffddbb',
      borderColor: '#ffddbb',
      borderWidth: 0.5,
    },
  ],
}
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

const Overview = () => {
  return (
    <>
      <h1 className='font-semibold mb-4'>Overview</h1>

      {/* box1 */}
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
          <span className='text-pp-gray text-xs'>누적 회원 수</span>
          <span className='font-nunito font-bold text-2xl text-center'>12,345</span>
        </div>
        <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
          <span className='text-pp-gray text-xs'>신규 회원 수</span>
          <span className='font-nunito font-bold text-2xl text-center'>1,000</span>
        </div>
        <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
          <span className='text-pp-gray text-xs'>로그인 회원 수</span>
          <span className='font-nunito font-bold text-2xl text-center'>500</span>
        </div>
        <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
          <span className='text-pp-gray text-xs'>매출(결제금액 기준)</span>
          <span className='font-nunito font-bold text-2xl text-center'>5,000,000</span>
        </div>
      </div>

      {/* box2 */}
      <div className='relative h-96 w-full flex bg-white p-10 mt-4 rounded-lg shadow'>
        <Bar data={data} options={options} />
      </div>

      {/* box3 */}
      <div className='flex gap-4 mt-4'>
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
