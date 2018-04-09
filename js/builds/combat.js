
'use strict'

//......................................................................................................................

P.builds.combat = () =>
{
  const myDom =
  {
    id      : 'combat' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        type       : 'canvas' ,
        attributes :
        [
          {title : 'width' , value : P.info.body.h} ,
          {title : 'height' , value : P.info.body.h} ,
        ] ,
        content :
        [
          [id : 'dust0' , classes : 'dust'] ,
          [id : 'dust1' , classes : 'dust'] ,
          [id : 'dust2' , classes : 'dust'] ,
          [id : 'dust3' , classes : 'dust'] ,
          'Sorry, your browser does not support<a href="https://goo.gl/QLSgQy">canvas</a>.'
        ]
      } ,
    ]
  }

  return myDom
}

