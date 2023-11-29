import Seat from './Seat'

const benchData = [
  { key: 16, position: 'hooker' },
  { key: 17, position: 'prop' },
  { key: 18, position: 'prop' },
  { key: 19, position: '' },
  { key: 20, position: '' },
  { key: 21, position: '' },
  { key: 22, position: '' },
  { key: 23, position: '' },
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