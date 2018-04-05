
'use strict'

//......................................................................................................................

P.builds.ship = layout =>
{
  const myDomObject =
  {
    id      : 'ship' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {id : 'shipHeader'  , content : []} ,
      {id : 'shipContent' , content : [P.builds[layout]()]} ,
    ]
  }

  return myDomObject
}

