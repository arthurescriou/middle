const MilleFeuille = require('@frenchpastries/millefeuille')
const {
  response
} = require('@frenchpastries/millefeuille/response')
require('dotenv').config()

const helloResponse = response('Hello French Pastries!')

const handler = request => {
  console.log(request.url)
  console.log(request.headers.host)
  console.log(request.headers)
  console.log(request.method)
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...{
        method: request.method
      },
      url: request.url,
      headers: request.headers
    })
  }
}

const server = MilleFeuille.create(handler)
