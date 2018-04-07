
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
          {title : 'width' , value : P.info.body.w} ,
          {title : 'height' , value : P.info.body.h} ,
        ] ,
        content : ['Sorry, your browser does not support <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">canvas</a>.']
      } ,
    ]
  }

  return myDom
}

