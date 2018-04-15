
'use strict'

//......................................................................................................................

P.keyPool = []

//......................................................................................................................

P.press = event =>
{
  // console.log(event)

  P.keyPool.indexOf(event.key) === -1 ? P.keyPool.push(event.key) : null
}

P.release = event =>
{
  // console.log(event)

  P.keyPool = P.keyPool.filter(key => key !== event.key)
}

