
'use strict'

//......................................................................................................................

P.builds.choice = (choice , index) =>
{
  const myDomObject =
  {
    id      : 'naviButton' + index ,
    classes : ['naviButton' , 'center' , 'button' , 'pointer' , 'box'] ,
    content : [choice.title]
  }

  return myDomObject
}

