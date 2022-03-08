// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export const environment = {
  production: true,
  API_URL: process.env['API_URL']
}
