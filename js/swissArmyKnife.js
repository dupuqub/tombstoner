
'use strict'

//......................................................................................................................

P.dice   = (min , max) => Math.floor(Math.random() * (max - min + 1)) + min
P.sum    = (a , b)     => a + b
P.skip   = (a , b)     => a + ' ' + b
P.lastIn = array       => array.length - 1
P.array  = length      => Array.from({length})
P.hide   = domObject   => domObject.style.display = 'none'
P.show   = domObject   => domObject.style.display = 'flex'

