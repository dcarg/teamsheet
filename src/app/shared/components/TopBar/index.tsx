import prisma from '@db/prismaSingleton'

const TopBar = async () => {
  const sports = await prisma.sport.findMany()

  return (
    <div className="border-b border-slate-500 flex flex-col items-center p-2 m-1 w-full">
      <div>
        <div className="text-slate-500 text-sm tracking-wider">Sport</div>

        <select name="sport">
          <option value="">Please Select</option>
          {sports.map(({ id, title }) => (
            <option key={id}>{title}</option>
          ))}
        </select>
      </div>
    </div>
  
  )
}

export default TopBar
