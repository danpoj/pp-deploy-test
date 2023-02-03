import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const box = cva('', {
  variants: {
    bgColor: {
      content: 'bg-white',
      background: 'bg-pp-background',
      sidebar: 'bg-pp-sidebar',
      header: 'bg-pp-header',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-8',
      lg: 'p-12',
    },
  },

  defaultVariants: {
    bgColor: 'content',
    padding: 'none',
  },
})

export interface BoxProps extends VariantProps<typeof box> {
  className?: string
  children?: ReactNode
}
