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
  console.log({
    kinto_request_id: requestId,
    key: 'YEA',
    value: 'HOLLY'
  })
  console.log('All HEADERS:', req.headers)
  res.send({
    message: `Hello ${process.env.USER_X_NAME}`
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
