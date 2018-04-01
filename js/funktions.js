
'use strict'

//......................................................................................................................

P.dice    = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
P.sum     = (a, b) => a + b
P.array   = length => Array.from({length})
P.last_in = array => array.length - 1
P.run     = funktion => funktion()

P.have_all_needs = item => ! item.needs.length ? true : item.needs.map(P.run).reduce(P.sum, 0) === item.needs.length
P.write_choice   = (choice, index) => '<div id="action_choice_' + index + '" class="action_choice button center">' + choice.title + '</div>'
P.write_info     = info => info.text + '<br><br>'
