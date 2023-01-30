import Button from '@component/Button'

const Login = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
      <h1 className="font-black text-stone-600 text-4xl">Admin 🐾</h1>
      <Button intent="secondary" size="medium">
        Login 👋
      </Button>
    </div>
  )
}

export default Login
