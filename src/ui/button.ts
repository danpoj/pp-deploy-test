import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export const button = cva('font-semibold rounded', {
  variants: {
    bgColor: {
      primary: 'bg-pp-sidebar',
      secondary: 'bg-white',
    },
    padding: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
    fullWidth: {
      true: 'w-full',
    },
  },

  compoundVariants: [
    {
      bgColor: 'primary',
      className: 'text-white',
    },
    {
      bgColor: 'secondary',
      className: 'text-pp-lightgray font-normal',
    },
  ],

  defaultVariants: {
    bgColor: 'primary',
    padding: 'sm',
  },
})

export interface ButtonProps extends VariantProps<typeof button>, ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
