import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons' 

interface PlayerIconProps {
  playerId: number | undefined,
  teamSheetLayoutId: string,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { playerId, teamSheetLayoutId } = props

  return (
    // faUserPlus for positions needed to be added
    // faUser for selected positions
    // faUserEdit on hover for selected positions
    
    <div className="flex relative w-full justify-center content-center">
      <FontAwesomeIcon
        icon={playerId ? faUser : faUserPlus}
        size='3x'
        style={{
          marginTop: 10,
          marginRight: 10,
          marginLeft: playerId ? 10 : 18,
        }}
      />

      <div className="absolute inset-x-1/6 bottom-0 m-auto text-xl text-white">
        {teamSheetLayoutId}
      </div>
    </div>
  )
}

export default PlayerIcon
