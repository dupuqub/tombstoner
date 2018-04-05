
'use strict'

//......................................................................................................................

P.builds.navi = () =>
{
  const myDomObject =
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
          {
            id      : 'naviText' ,
            classes : ['naviContentSection' , 'center' , 'box'] ,
            content :
            [
              //
            ]
          } ,
          {
            id      : 'naviButtonBox' ,
            classes : ['naviContentSection' , 'center' , 'column'] ,
            content :
            [
              //
            ]
          } ,
          {
            id      : 'naviConsole' ,
            classes : ['naviContentSection' , 'center' , 'box'] ,
            content :
            [
              //
            ]
          } ,
        ]
      } ,
    ]
  }

  return myDomObject
}

