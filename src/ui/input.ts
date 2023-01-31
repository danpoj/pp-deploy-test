import { cva, VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes } from 'react'

export const input = cva('rounded outline-none w-full', {
  variants: {
    bgColor: {
      primary: 'bg-pp-input',
    },
    padding: {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8',
    },
    widthLen: {
      sm: 'sm:w-32',
      md: 'sm:w-64',
      lg: 'sm:w-96',
      xl: 'sm:w-[32rem]',
    },
  },

  defaultVariants: {
    bgColor: 'primary',
    padding: 'sm',
    widthLen: 'md',
  },
})

export interface InputProps extends VariantProps<typeof input>, InputHTMLAttributes<HTMLInputElement> {}
