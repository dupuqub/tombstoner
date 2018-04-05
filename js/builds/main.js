
'use strict'

//......................................................................................................................

P.builds.main = () =>
{
  const myDomObject =
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
            classes : ['mainButton' , 'center' , 'box' , 'button' , 'pointer'] ,
            content : ['NEW']
          } ,
          {
            id      : 'load' ,
            classes : ['mainButton' , 'center' , 'box' , 'button' , 'pointer'] ,
            content : ['LOAD']
          } ,
          {
            id      : 'options' ,
            classes : ['mainButton' , 'center' , 'box' , 'button' , 'pointer'] ,
            content : ['OPTIONS']
          } ,
        ]
      } ,
    ]
  }

  return myDomObject
}

