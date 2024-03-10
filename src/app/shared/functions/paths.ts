
// entityKey sport
// pathArray [ 'sport', 'rugby', 'superRugby', 'wallabies' ]

export const getBreadCrumbPath = (index: number, pathArray: string[]) => {
  if (!pathArray?.length) return ''

  const breadCrumbPathArray = pathArray.slice(0, index + 1)

  const breadCrumbPath = breadCrumbPathArray.join('/')

  return `/${breadCrumbPath}`
}