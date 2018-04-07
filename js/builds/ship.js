
'use strict'

//......................................................................................................................

P.builds.ship = () =>
{
  const myDom =
  {
    id      : 'ship' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'shipHeader' ,
        content :
        [
          {
            id      : 'shipHeaderStatus' ,
            classes : ['shipHeaderButton' , 'center' , 'box'] ,
            content : ['STATUS']
          } ,
          {
            id      : 'shipHeaderNavi' ,
            classes : ['shipHeaderButton' , 'center' , 'box'] ,
            content : ['NAVI']
          } ,
        ]
      } ,
      {
        id      : 'shipContent' ,
        content : [P.builds[P.info.shipTab]()]
      } ,
    ]
  }

  return myDom
}

