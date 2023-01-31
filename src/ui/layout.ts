import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

export const layout = cva('font-semibold border rounded', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white border-transparent hover:bg-blue-600',
      secondary: 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
  },

  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      className: 'text-4xl',
    },
  ],

  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
})

export interface LayoutProps extends VariantProps<typeof layout> {
  children: ReactNode
}
