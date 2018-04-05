
'use strict'

//......................................................................................................................

P.layouts.navi = () =>
{
  const layout =
  {
    id      : 'navi' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'naviTitle' ,
        classes : ['center'] ,
        content : []
      } ,
      {
        id      : 'naviContent' ,
        classes : ['center' , 'row'] ,
        content :
        [
          { id : 'naviText'      , classes : ['naviContentSection' , 'center' , 'box']} ,
          { id : 'naviButtonBox' , classes : ['naviContentSection' , 'center' , 'column']} ,
          { id : 'naviConsole'   , classes : ['naviContentSection' , 'center' , 'box']} ,
        ]
      } ,
    ]
  }

  return layout
}

