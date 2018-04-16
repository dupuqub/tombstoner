
'use strict'

//......................................................................................................................

const P = // project
{
  builds  : {} ,
  choices : {} ,
  draws   : {} ,
  renders : {} ,
  updates : {} ,

  images  : {} ,

  accels  : {} ,
  decels  : {} ,
  moves   : {} ,

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
    radius : 8 , // units

    angle  : 0 , // degrees
    torque : 4 , // degrees

    speed :
    {
      common :
      {
        now : 0 , // units
        max : 3 , // units
      } ,
      lateral :
      {
        now : 0 , // units
        max : 3 , // units
      } ,
    } ,

    accel : 0.1 , // units
    decel : 0.05 , // units

    engines : {} ,
  } ,
}

