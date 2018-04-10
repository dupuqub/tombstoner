
'use strict'

//......................................................................................................................

const P = // project
{
  builds  : {} ,
  choices : {} ,
  draws   : {} ,
  updates : {} ,
  images  : {} ,
}

//......................................................................................................................

P.info =
{
  unit    : 0 ,
  body    : {w : 0 , h : 0} ,
  aspect  : {w : 16 , h : 9} ,
  shipTab : '' , // 'navi' or 'status'
  choice  : null , // choiceObject (this is the temporary choice, but it is also the one that gets rendered)
}

//......................................................................................................................

P.state =
{
  layout : null , // myDomObject (preserves layout)
  choice : null , // choiceObject (preserves narrative by freeing the choice mechanic from the layout's state)
  ship   :
  {
    x      : 0 , // units
    y      : 0 , // units
    radius : 5 , // units
    speed  : 5 , // units
  } ,
}

