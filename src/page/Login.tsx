import { flexBox } from '@ui/flexBox'
import { usersMockData } from 'mock'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const { register, handleSubmit, watch } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data

    const user = usersMockData.find((user) => {
      return user.email === email && user.password === password
    })

    if (user) {
      navigate('/dashboard/overview')
      return
    }

    toast('로그인 정보가 틀렸습니다.', { type: 'error' })
  }

  return (
    <div className='flex items-center justify-center h-screen bg-pp-background flex-col'>
      <div className='flex flex-col gap-2 mb-8'>
        <span className='text-blue-500 text-xs text-center'>임시 이메일 • root@gmail.com</span>
        <span className='text-blue-500 text-xs text-center'>임시 비밀번호 • root</span>
      </div>
      <div className='bg-white px-4 pt-4 pb-2 flex flex-col w-[500px] rounded text-pp-gray'>
        <span className='text-center text-2xl py-2 font-bold'>퍼피플 로고 🐾</span>
        <span className='text-center text-sm'>기업회원 / 관리자 전용 페이지</span>

        <span className='mt-4 mb-2 pl-1 font-extrabold text-lg'>로그인</span>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <input
            className='outline-none bg-pp-input text-pp-input p-2 text-xs border border-stone-100'
            type='email'
            placeholder='이메일 주소'
            {...register('email')}
          />
          <input
            className='outline-none bg-pp-input p-2 text-xs border border-stone-100'
            type='password'
            placeholder='비밀번호'
            {...register('password')}
          />
          <button className='bg-pp-sidebar text-white font-bold text-lg rounded p-2' type='submit'>
            로그인
          </button>
        </form>

        <div className='flex justify-around mt-4'>
          <button className='p-4 text-sm'>회원 가입하기</button>
          <button className='p-4 text-sm'>비밀번호 찾기</button>
        </div>
      </div>
    </div>
  )
}

export default Login
