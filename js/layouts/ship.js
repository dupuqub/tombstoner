
'use strict'

//......................................................................................................................

P.layouts.ship = () =>
{
  const layout =
  {
    id      : 'ship' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'shipHeader' ,
        classes : [] ,
        content : []
      } ,
      {
        id      : 'shipContent' ,
        classes : [] ,
        content : [P.layouts[P.state.shipContentLayout]()]
      } ,
    ]
  }

  return layout
}

