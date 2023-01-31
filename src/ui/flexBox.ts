import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const flexBox = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    bgColor: {
      white: 'bg-white',
      background: 'bg-pp-background',
      sidebar: 'bg-pp-sidebar',
      header: 'bg-pp-header',
    },
    rounded: {
      true: 'rounded',
    },
    fullWidthMobile: {
      true: 'w-full sm:w-auto',
    },
  },

  defaultVariants: {
    direction: 'row',
    gap: 'sm',
    padding: 'sm',
    bgColor: 'white',
  },
})

export interface FlexBoxProps extends VariantProps<typeof flexBox> {
  children: ReactNode
}
