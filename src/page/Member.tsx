import { userInfo } from 'mock'

const Member = () => {
  console.log(userInfo)

  return (
    <>
      <h1 className='font-semibold mb-4'>회원 정보</h1>
      <p>회원 관리 &gt; 회원 정보</p>

      <table className='text-xs mt-10 w-full'>
        <thead className=''>
          <tr>
            <td>번호</td>
            <td>이메일</td>
            <td>회원번호</td>
            <td>이름</td>
            <td>생년월일</td>
            <td>전화번호</td>
            <td>가입일</td>
            <td>최종 로그인</td>
            <td>SMS 수신</td>
            <td>이메일 수신</td>
            <td>관리</td>
          </tr>
        </thead>

        <tbody className=''>
          {userInfo.map((info, i) => (
            <tr key={i} className=''>
              <td>{info.id}</td>
              <td>{info.email}</td>
              <td>{info.unique}</td>
              <td>{info.name}</td>
              <td>{info.birth}</td>
              <td>{info.phone}</td>
              <td>{info.registration_date}</td>
              <td>{info.last_login_date}</td>
              <td>{info.receive_sms ? 'Y' : 'N'}</td>
              <td>{info.receive_email ? 'Y' : 'N'}</td>
              <td>편집/삭제</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Member
