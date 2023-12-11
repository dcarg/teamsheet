const apiUrls = {
  development: 'http://localhost:3000/api',
  production: 'https://teamsheet.online/api',
  test: '',
}

export const BASE_API_URL = apiUrls[process.env.NODE_ENV]