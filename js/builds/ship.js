
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
      {
        id      : 'shipHeader' ,
        content :
        [
          {id : 'shipHeaderStatusButton' , classes : ['shipHeaderButton' , 'center' , 'box'] , content : ['']} ,
          {id : 'shipHeaderNaviButton'   , classes : ['shipHeaderButton' , 'center' , 'box'] , content : ['']} ,
        ]
      } ,
      {
        id      : 'shipContent' ,
        content : [P.builds[layout]()]
      } ,
    ]
  }

  return myDomObject
}

