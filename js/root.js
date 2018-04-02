
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
  game  : document.querySelector('#game'),

  navi   : document.querySelector('#navi'),
  status : document.querySelector('#status'),

  header_navi   : document.querySelector('#header_navi'),
  header_status : document.querySelector('#header_status'),

  navi_title      : document.querySelector('#navi_title'),
  navi_text       : document.querySelector('#navi_text'),
  navi_choice_box : document.querySelector('#navi_choice_box'),
  navi_outcome    : document.querySelector('#navi_outcome'),
  navi_console    : document.querySelector('#navi_console'),

  layouts        : document.querySelectorAll('.layout'),
  header_buttons : document.querySelectorAll('.header_button'),
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
    ['Crew limit', 'Crew members (non-passengers) you may have onboard simultaneously.'],
    ['Starting crew', 'Crew members that begin the journey with you.'],
    ['Mod limit', 'Modifications you may have installed simultaneously.'],
    ['Starting mods', 'Modifications you begin the journey with.'],
    ['Shield', 'Hits you may take before taking hits to the core.'],
    ['Core', 'Hits you may take before you are destroyed.'],
    ['Beam', 'How much you strike.'],
    ['Engine', 'How much you dodge.'],

    ['', ''],
  ]
}

//......................................................................................................................

P.state =
{
  tab    : null,
  action : null,
  ship   : null,
  crew   : [],
}

