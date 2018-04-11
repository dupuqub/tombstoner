
'use strict'

//......................................................................................................................

P.random    = (min , max) => Math.floor(Math.random() * (max - min + 1)) + min
P.sum       = (a , b)     => a + b
P.skip      = (a , b)     => a + ' ' + b
P.lastIn    = array       => array.length - 1
P.array     = length      => Array.from({length})
P.hide      = domObject   => domObject.style.display = 'none'
P.show      = domObject   => domObject.style.display = 'flex'
P.dom       = query       => document.querySelector(query)
P.domAll    = query       => document.querySelectorAll(query)
P.attribute = attribute   => attribute.title + '="' + attribute.value + '"'
P.image     = ()          => new Image

P.needs = item => item.needs && item.needs.length ? item.needs.map(P.run).reduce(P.sum, 0) === item.needs.length : true

P.writeClue = (info , index , array) => info.text + (index === P.last_in(array) ? '' : '<br><br>')

