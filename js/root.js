
'use strict'

//......................................................................................................................

const P = // project
{
  builds  : {} ,
  choices : {} ,
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
  choice  : {} , // choiceObject (this is the temporary choice, but it is also the one that gets rendered)
}

//......................................................................................................................

P.state =
{
  layout : {} , // myDomObject (preserves layout)
  choice : {} , // choiceObject (preserves narrative by freeing the choice mechanic from the layout's state)
  ship   :
  {
    x : 0 ,
    y : 0 ,
    r : 5 , // units
  } ,
}

