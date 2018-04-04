
'use strict'

//......................................................................................................................

P.layouts.main = () =>
{
  const layout =
  {
    id      : 'main' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'mainTitle' ,
        classes : ['center'] ,
        content : ['TOMBSTONER']
      } ,
      {
        id      : 'mainButtonBox' ,
        classes : ['center' , 'column'] ,
        content :
        [
          {
            id      : 'new' ,
            classes : ['mainButton' , 'center' , 'box' , 'button'] ,
            content : ['NEW']
          } ,
          {
            id      : 'load' ,
            classes : ['mainButton' , 'center' , 'box' , 'button'] ,
            content : ['LOAD']
          } ,
          {
            id      : 'options' ,
            classes : ['mainButton' , 'center' , 'box' , 'button'] ,
            content : ['OPTIONS']
          } ,
        ]
      } ,
    ]
  }

  return layout
}

