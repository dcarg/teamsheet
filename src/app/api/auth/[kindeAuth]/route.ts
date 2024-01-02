import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'

type Params = {
  params: {
    kindeAuth: string,
  },
}

export const GET = async (request: object, { params }: Params) => {
	const endpoint = params.kindeAuth

	return handleAuth(request, endpoint)
}