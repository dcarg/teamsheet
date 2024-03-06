
// entityKey sport
// pathArray [ 'sport', 'rugby', 'superRugby', 'wallabies' ]

export const getBreadCrumbPath = (entityKey: string, pathArray: string[]) => {
  if (!entityKey || !pathArray?.length) return '#'

  const pathKeyIndex = pathArray.findIndex(path => path === entityKey)

  const breadCrumbPathArray = pathArray.slice(0, pathKeyIndex + 1)

  const breadCrumbPath = breadCrumbPathArray.join('/')

  return `/${breadCrumbPath}`
}