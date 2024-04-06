import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import Line from '@components/Line'

interface PageHeaderProps {
  actionContent?: React.ReactNode,
  title: string,
  icon?: IconDefinition,
}

const PageHeader = (props: PageHeaderProps) => {
  const { actionContent, icon, title } = props



  // Height 65px (same as Navbar)
  return (
    <div className="flex flex-col h-[65px] justify-center text-slate-700">
      <div className="flex">
        <div className="flex items-center">
          {icon && (
            <FontAwesomeIcon className="mr-3 w-[30px]" icon={icon} size="xl" />
          )}

          <div className="align-middle font-semibold items-center text-xl">
            {title}
          </div>
        </div>
        
        {/* actionContent */}
        <div className="ml-auto items-center justify-end w-auto">
            {actionContent}
        </div>
      </div>

      <Line />
    </div>
  )
}

export default PageHeader