import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const text = cva([], {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      thin: 'font-light',
      md: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      start: 'text-start',
      center: 'text-center',
      end: 'text-end',
    },
  },

  defaultVariants: {
    size: 'sm',
    weight: 'md',
    align: 'start',
  },
})

export interface TextProps extends VariantProps<typeof text> {
  children: ReactNode
}
