import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  let error = useRouteError()

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <h1 className="text-3xl">-ㅅ-a</h1>
      {isRouteErrorResponse(error) ? (
        <p className="text-xl">
          {error.status} {error.statusText}
        </p>
      ) : (
        <p className="text-xl">unknown error</p>
      )}
    </div>
  )
}

export default ErrorPage
