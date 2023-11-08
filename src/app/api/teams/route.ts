import prisma from "@/db/prismaSingleton"

// https://www.youtube.com/watch?v=vrR4MlB7nBI
export const GET = async (request: Request) => {
  // can i get the query params from the request?
  const teams = await prisma.team.findMany()
  return Response.json({ teams })
}