
'use strict'

//......................................................................................................................

const P = // The full project is contained here
{
  actions : {},
}

//......................................................................................................................

P.dom = // document object model
{
  start : document.querySelector('#start'),
  game : document.querySelector('#game'),

  action_title      : document.querySelector('#action_title'),
  action_text       : document.querySelector('#action_text'),
  action_choice_box : document.querySelector('#action_choice_box'),
  action_outcome    : document.querySelector('#action_outcome'),
  action_console    : document.querySelector('#action_console'),
}

//......................................................................................................................

P.info =
{
  body   : {w : 0, h : 0},
  aspect : {w : 16, h : 9},

  vowels     : ['i','e','é','a','á','o','ó','u'],
  consonants : ['f','s','x','g','d','b','h','y','m','n','r','l','v','z','j','k','t','p'],

  wiki :
  [
    ['Crew limit', 'Crew members (non-passengers) you may have onboard.'],
    ['Mod limit', 'Modifications you may have installed simultaneously.'],
    ['Shield', 'Hits you may take before taking hits to the core.'],
    ['Core', 'Hits you may take before you are destroyed'],
    ['Beam', 'How much you strike'],
    ['Engine', 'How much you dodge'],

    ['', ''],
  ]
}

//......................................................................................................................

P.state =
{
  action : null,
  ship   : {},
  crew   : [],
}

