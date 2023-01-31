import Button from '@component/Button'
import Input from '@component/Input'
import Text from '@component/Text'
import Container from 'Layout/Container'
import FlexBox from 'Layout/FlexBox'

const Login = () => {
  return (
    <Container>
      <FlexBox direction="column" gap="sm" padding="lg" rounded fullWidthMobile>
        <Text size="xl" align="center">
          퍼피플 로고
        </Text>
        <Text size="md" align="center">
          기업회원 / 관리자 전용 페이지
        </Text>
        <Text size="lg">로그인</Text>

        <Input widthLen="xl" placeholder="이메일 주소" type="email" />
        <Input widthLen="xl" placeholder="비밀번호" type="password" />
        <Button>로그인</Button>

        <FlexBox>
          <Button bgColor="secondary" fullWidth>
            회원 가입하기
          </Button>
          <Button bgColor="secondary" fullWidth>
            비밀번호 찾기
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  )
}

export default Login
