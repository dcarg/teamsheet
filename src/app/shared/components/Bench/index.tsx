import Seat from './Seat'

const benchData = [
  { teamsheetPlace: 16, position: 'hooker' },
  { teamsheetPlace: 17, position: 'prop' },
  { teamsheetPlace: 18, position: 'prop' },
  { teamsheetPlace: 19, position: '' },
  { teamsheetPlace: 20, position: '' },
  { teamsheetPlace: 21, position: '' },
  { teamsheetPlace: 22, position: '' },
  { teamsheetPlace: 23, position: '' },
]

const Bench = () => (
  <div>
    <div>Bench</div>

    <div>
      {benchData.map(({ position, teamsheetPlace }) => (
        <Seat key={teamsheetPlace} position={position} teamsheetPlace={teamsheetPlace} />
      ))}
    </div>
  </div>
)


export default Bench