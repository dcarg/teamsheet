import React from 'react'

import clsx from 'clsx'

interface LineProps {
  className?: string;
}

const Line: React.FC<LineProps> = (props: LineProps) => {
  const { className } = props

  return <div className={clsx("h-[1px] mt-3 w-full bg-slate-200", className)}></div>
};

export default Line;