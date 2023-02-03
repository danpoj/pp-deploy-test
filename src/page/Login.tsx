import Button from '@component/Button'
import Input from '@component/Input'
import Text from '@component/Text'
import { flexBox } from '@ui/flexBox'
import Container from 'Layout/Container'
import FlexBox from 'Layout/FlexBox'
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
      navigate('/dashboard')
      return
    }

    toast('로그인 정보가 틀렸습니다.', { type: 'error' })
  }

  return (
    <Container>
      <FlexBox direction='column' gap='sm' padding='lg' rounded fullWidthMobile>
        <Text align='center' className='text-blue-500'>
          임시 이메일 • root@gmail.com
        </Text>
        <Text align='center' className='text-blue-500'>
          임시 비밀번호 • root
        </Text>
        <Text size='xl' align='center'>
          퍼피플 로고 🐾
        </Text>
        <Text size='md' align='center'>
          기업회원 / 관리자 전용 페이지
        </Text>
        <Text size='lg'>로그인</Text>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <Input type='email' widthLen='xl' placeholder='이메일 주소' {...register('email')} />
          <Input type='password' widthLen='xl' placeholder='비밀번호' {...register('password')} />
          <Button type='submit' intent='login'>
            로그인
          </Button>
        </form>

        <FlexBox>
          <Button fullWidth>회원 가입하기</Button>
          <Button fullWidth>비밀번호 찾기</Button>
        </FlexBox>
      </FlexBox>
    </Container>
  )
}

export default Login
