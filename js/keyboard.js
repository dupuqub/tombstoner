
'use strict'

//......................................................................................................................

P.keyPool = []

//......................................................................................................................

P.press   = event => P.keyPool.indexOf(event.key) === -1 ? P.keyPool.push(event.key) : null
P.release = event => P.keyPool = P.keyPool.filter(key => key !== event.key)

