import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const box = cva([], {
  variants: {
    bgColor: {
      background: 'bg-pp-background',
      sidebar: 'bg-pp-sidebar',
      header: 'bg-pp-header',
    },
    padding: {
      small: 'p-4',
      medium: 'p-8',
      large: 'p-12',
    },
  },

  defaultVariants: {
    bgColor: 'background',
    padding: 'small',
  },
})

export interface BoxProps extends VariantProps<typeof box> {
  children?: ReactNode
}
