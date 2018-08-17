const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'

/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/hello/:name', (req, res) => {
  const requestId = req.headers['kinto-request-id']
  // test with normal json logging
  console.log({
    kinto_request_id: requestId,
    benName: 'normal log',
    benValue: 'normal log value'
  })
  // test with json stringify
  console.log(
    JSON.stringify({
      kinto_request_id: requestId,
      benName: 'stringify log',
      benValue: 'stringify log value'
    })
  )
  console.log('All HEADERS:', req.headers)
  res.send({
    message: `Hellos requestId value: ${requestId}`
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
