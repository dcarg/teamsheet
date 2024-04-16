// Take a default state and a record and update the values on the default state to the record
// Only keys present on defaultState will be updated
// e.g. with default state
// {
//   key: '',
//   title: '',
// }
// and record
// {
//   key: 'allBlacks',
//   title: 'All Blacks',
//   primaryColor: '#000000',
// }
// the updated defaultState will be
// {
//   key: 'allBlacks',
//   title: 'All Blacks',
// }
// TODO fix types
export const mergeDefaultStateWithRecord = <T>(defaultState: T, entity?: T) => {
  if (!entity) return defaultState

  const updatedState = Object.entries(defaultState).reduce((acc, stateEntry) => {
    const [key, value] = stateEntry
    acc[key] = entity[key] || value

    return acc
  }, {})

  return updatedState
}