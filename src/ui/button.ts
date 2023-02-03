import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export const button = cva('', {
  variants: {
    intent: {
      header: 'text-white text-sm p-2',
      sidebar: 'text-pp-sidebar border-t border-stone-400 py-3 pl-3 text-sm',
      login: 'text-white bg-pp-sidebar',
      logout: 'border px-2 py-[2px] border-stone-500 rounded-sm text-xs',
    },
  },
})

export interface ButtonProps extends VariantProps<typeof button>, ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
