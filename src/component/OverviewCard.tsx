const OverviewCard = ({ title, amount }: { title: string; amount: string }) => {
  return (
    // <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
    <div className='flex flex-col bg-white rounded w-full p-4 gap-2 shadow'>
      <span className='text-pp-gray text-xs'>{title}</span>
      <span className='font-nunito font-bold text-2xl text-center'>{amount}</span>
    </div>
  )
}

export default OverviewCard
