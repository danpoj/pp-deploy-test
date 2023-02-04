import { cva, type VariantProps } from 'class-variance-authority'

export const button = cva('', {
  variants: {
    intent: {
      header: 'text-white text-xs p-3',
      sidebar: 'text-pp-sidebar border-t border-stone-400 py-3 pl-3 text-sm',
      login: 'text-white bg-pp-sidebar',
      logout: 'border px-2 py-[2px] border-stone-500 rounded-sm text-xs',
    },

    sidebarActive: {
      true: 'border-l-8 bg-pp-sidebar-active',
    },
    headerActive: {
      true: ' text-indigo-300',
    },

    isLastElement: {
      true: 'border-b',
    },
  },

  defaultVariants: {
    intent: 'header',
  },
})

export interface ButtonProps extends VariantProps<typeof button> {}
