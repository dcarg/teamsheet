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
export const mergeDefaultStateWithRecord = <T extends { [key: string]: any }>(
  defaultState: T,
  entity?: { [key: string]: any }
) => {
  if (!entity) return defaultState

  const updatedState = Object.entries(defaultState).reduce((acc, stateEntry) => {
    const [key, value] = stateEntry
    acc[key] = entity[key] || value

    return acc
  }, {} as T)

  return updatedState
}