import Seat from './Seat'

const benchData = [
  { key: 1, position: 'hooker' },
  { key: 2, position: 'prop' },
  { key: 3, position: 'prop' },
  { key: 4, position: '' },
  { key: 5, position: '' },
  { key: 6, position: '' },
  { key: 7, position: '' },
  { key: 8, position: '' },
]

const Bench = () => (
  <div>
    <div>Bench</div>

    <div>
      {benchData.map(({ key, position }) => (
        <Seat key={key} position={position} />
      ))}
    </div>
  </div>
)


export default Bench