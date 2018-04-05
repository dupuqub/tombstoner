
'use strict'

//......................................................................................................................

P.builds.choice = (choice , index) =>
{
  const myDom =
  {
    id      : 'naviButton' + index ,
    classes : ['naviButton' , 'center' , 'button' , 'pointer' , 'box'] ,
    content : [choice.title]
  }

  return myDom
}

