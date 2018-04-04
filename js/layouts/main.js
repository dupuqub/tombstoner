
'use strict'

//......................................................................................................................

P.layouts.main = () =>
{
  const layout =
  {
    id      : 'main' ,
    classes : ['layout' , 'center' , 'col'] ,
    content :
    [
      {
        id      : 'mainTitle' ,
        classes : ['center'] ,
        content : ['TOMBSTONER']
      } ,
      {
        id      : 'mainButtonBox' ,
        classes : ['center' , 'col'] ,
        content :
        [
          {
            id      : 'new' ,
            classes : ['mainButton' , 'center' , 'box'] ,
            content : ['NEW']
          } ,
          {
            id      : 'load' ,
            classes : ['mainButton' , 'center' , 'box'] ,
            content : ['LOAD']
          } ,
          {
            id      : 'options' ,
            classes : ['mainButton' , 'center' , 'box'] ,
            content : ['OPTIONS']
          } ,
        ]
      } ,
    ]
  }

  return layout
}

