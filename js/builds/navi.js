
'use strict'

//......................................................................................................................

P.builds.navi = () =>
{
  const
  choiceObject = P.info.choice ,
  myDomObject  =
  {
    id      : 'navi' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'naviTitle' ,
        classes : ['center'] ,
        content : [choiceObject.title]
      } ,
      {
        id      : 'naviContent' ,
        classes : ['center' , 'row'] ,
        content :
        [
          {
            id      : 'naviText' ,
            classes : ['naviContentSection' , 'center' , 'box'] ,
            content : [choiceObject.text]
          } ,
          {
            id      : 'naviButtonBox' ,
            classes : ['naviContentSection' , 'center' , 'column'] ,
            content : choiceObject.choices.filter(P.needs).map(P.builds.choice)
          } ,
          {
            id      : 'naviConsole' ,
            classes : ['naviContentSection' , 'center' , 'box']
          } ,
        ]
      } ,
    ]
  }

  return myDomObject
}

