import React from 'react'

export type GridProps = {
  children: React.ReactNode
  className?: string
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={`grid items-center justify-center ${className}`}>{children}</div>
}

export default Grid
