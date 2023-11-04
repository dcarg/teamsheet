import prisma from '@db/prismaSingleton'

const TopBar = async () => {
  const sports = await prisma.sport.findMany()

  return (
    <>
      <div>Sport</div>
      <select name="sport">
        <option value="">Please Select</option>
        {sports.map(({ id, title }) => (
          <option key={id}>{title}</option>
        ))}
      </select>
    </>
  
  )
}

export default TopBar
