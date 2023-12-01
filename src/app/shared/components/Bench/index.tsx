import Seat from './Seat'

const benchData = [
  { teamSheetLayoutId: 16, position: 'hooker' },
  { teamSheetLayoutId: 17, position: 'prop' },
  { teamSheetLayoutId: 18, position: 'prop' },
  { teamSheetLayoutId: 19, position: '' },
  { teamSheetLayoutId: 20, position: '' },
  { teamSheetLayoutId: 21, position: '' },
  { teamSheetLayoutId: 22, position: '' },
  { teamSheetLayoutId: 23, position: '' },
]

const Bench = () => (
  <>
    {benchData.map(({ position, teamSheetLayoutId }) => (
      <Seat key={teamSheetLayoutId} position={position} teamSheetLayoutId={teamSheetLayoutId} />
    ))}
  </>
)


export default Bench