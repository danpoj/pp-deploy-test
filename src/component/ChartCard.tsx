import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const data = {
  labels: ['3/1', '3/2', '3/3', '3/4', '3/5', '3/6', '3/7', '3/8', '3/9', '3/10'],
  datasets: [
    {
      label: '신규 회원 수',
      data: [10, 24, 18, 33, 12, 6, 12, 24, 42, 22],
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

const ChartCard = () => {
  return (
    <div className='relative h-96 w-full flex bg-white p-2 sm:p-4 xl:p-6 mt-2 rounded-lg shadow'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default ChartCard
