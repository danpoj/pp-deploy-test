import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const flexBox = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      zero: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
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
    padding: 'none',
    // bgColor: 'white',
  },
})

export interface FlexBoxProps extends VariantProps<typeof flexBox> {
  children: ReactNode
}
