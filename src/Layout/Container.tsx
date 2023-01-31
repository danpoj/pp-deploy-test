import { container, ContainerProps } from '@ui/container'

const Container = ({ position, padding, children, ...props }: ContainerProps) => {
  const style = container({ position, padding })

  return (
    <div className={style} {...props}>
      {children}
    </div>
  )
}

export default Container
