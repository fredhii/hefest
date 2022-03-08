/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFile } = require('fs')
const { argv } = require('yargs')
// Read environment variables from .env file
require('dotenv').config()
// Read command line arguments
const environment = argv.environment
const isProduction = environment === 'prod'
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`
// Validate if env variables is set
if (!process.env['API_URL']) {
  console.error('All the required environment variables were not provided!')
  process.exit(-1)
}
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  API_URL: "${process.env['API_URL']}"
};
`
// Swaps the variables in the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err)
  }
  console.log(`Wrote variables to ${targetPath}`)
})
