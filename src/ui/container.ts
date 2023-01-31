import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const container = cva('bg-pp-background', {
  variants: {
    position: {
      center: 'w-full h-full flex items-center justify-center',
    },
    padding: {
      sm: 'p-4',
      md: 'p-8',
      lg: 'p-12',
    },
  },

  defaultVariants: {
    position: 'center',
    padding: 'sm',
  },
})

export interface ContainerProps extends VariantProps<typeof container> {
  children?: ReactNode
}
