import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' 

interface PlayerCardProps {
  children: React.ReactNode
}

const PlayerCard = (props: PlayerCardProps) => {
  const { children } = props

  return (
    // fontawesome layers to stack text on the icon
    // https://fontawesome.com/docs/web/style/layer
    
    <div className="box-border h-15 md:h-20 w-15 md:w-20 border-2">
      {/* use this div to absolutely position the number */}
      <div >
        <FontAwesomeIcon icon={faUser} size='5x'/>
      </div>

      <div>
        Player Name
      </div>
    </div>
  )
}

export default PlayerCard