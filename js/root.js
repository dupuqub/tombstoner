
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
}

//......................................................................................................................

P.info =
{
  body    : {w : 0 , h : 0} ,
  aspect  : {w : 16 , h : 9} ,
  shipTab : '' , // 'navi' or 'status'
  choice  : {} , // choiceObject (this is the temporary choice, but it is also the one that gets rendered)
}

//......................................................................................................................

P.state =
{
  ship   : {} , // shipObject (ship's general information)
  screen : {} , // myDomObject (preserves screen)
  choice : {} , // choiceObject (preserves narrative by freeing the choice mechanic from the screen's state)
}

