
'use strict'

//......................................................................................................................

const P = // project
{
  builds  : {} ,
  choices : {} ,
  updates : {} ,
}

//......................................................................................................................

P.dom = // document object model
{
  screen : () => document.querySelector('#screen') ,

  naviTitle     : () => document.querySelector('#naviTitle') ,
  naviText      : () => document.querySelector('#naviText') ,
  naviButtonBox : () => document.querySelector('#naviButtonBox') ,
  naviConsole   : () => document.querySelector('#naviConsole') ,
}

//......................................................................................................................

P.info =
{
  body   : {w : null , h : null} ,
  aspect : {w : 16 , h : 9} ,
}

//......................................................................................................................

P.state =
{
  ship   : {} , // shipObject (ship's general information)
  screen : {} , // myDomObject (preserves screen)
  choice : {} , // choiceObject (preserves narrative by freeing the choice mechanic from the screen's state)
}

