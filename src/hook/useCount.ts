import { useState } from 'react'

export const useCount = (initialValue: number) => {
  const [value, setValue] = useState(initialValue)

  const handler = (e:any) => {
    setValue(e.target.value)
  }

  return [value, setValue, handler]
}
