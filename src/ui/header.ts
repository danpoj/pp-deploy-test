import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const header = cva('w-full', {
  variants: {
    bgColor: {
      bg: 'bg-pp-header',
    },
    padding: {
      small: 'p-4',
      medium: 'p-6',
      large: 'p-8',
    },
  },

  defaultVariants: {
    bgColor: 'bg',
    padding: 'small',
  },
})

export interface HeaderProps extends VariantProps<typeof header> {
  children: ReactNode
}
