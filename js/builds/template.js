
'use strict'

//......................................................................................................................

P.builds.template = () =>
{
  const myDom =
  {
    type       : '' ,
    id         : 'template' ,
    classes    : ['layout' , 'center'] ,
    attributes :
    [
      {title : '' , value : 0} ,
    ] ,
    content :
    [
      {
        type       : '' ,
        id         : '' ,
        classes    : [] ,
        attributes :
        [
          {title : '' , value : 0} ,
        ] ,
        content : []
      } ,
    ]
  }

  return myDom
}

