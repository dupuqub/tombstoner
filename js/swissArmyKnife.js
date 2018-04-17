
'use strict'

//......................................................................................................................

P.random = (min , max) => Math.floor(Math.random() * (max - min + 1)) + min
P.skip   = (a , b)     => a + ' ' + b
P.sum    = (a , b)     => a + b

P.dom    = query => document.querySelector(query)
P.domAll = query => document.querySelectorAll(query)

P.hide = domObject => domObject.style.display = 'none'
P.show = domObject => domObject.style.display = 'flex'

P.array     = length    => Array.from({length})
P.attribute = attribute => attribute.title + '="' + attribute.value + '"'
P.color     = color     => 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')'
P.lastIn    = array     => array.length - 1

P.image = () => new Image

//......................................................................................................................

P.needs = item => item.needs && item.needs.length ? item.needs.map(P.run).reduce(P.sum, 0) === item.needs.length : true

P.solveParticleItem = item => item[0] ? P.random(item[0] , item[1]) : typeof item === 'function' ? item() : item

P.writeClue = (info , index , array) => info.text + (index === P.last_in(array) ? '' : '<br><br>')

