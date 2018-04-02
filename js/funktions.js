
'use strict'

//......................................................................................................................

P.dice    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
P.sum     = (a, b) => a + b
P.array   = length => Array.from({length})
P.last_in = array => array.length - 1
P.run     = funktion => funktion()
P.hide    = dom_object => dom_object.style.display = 'none'
P.show    = dom_object => dom_object.style.display = 'flex'

P.have_all_needs = item => ! item.needs.length ? true : item.needs.map(P.run).reduce(P.sum, 0) === item.needs.length
P.write_choice   = (choice, index) => '<div id="navi_choice_' + index + '" class="navi_choice button center">' + choice.title + '</div>'
P.write_clue     = (info, index, array) => info.text + (index === P.last_in(array) ? '' : '<br><br>')

