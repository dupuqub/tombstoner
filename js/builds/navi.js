
'use strict'

//......................................................................................................................

P.builds.navi = () =>
{
  const
  choice = P.info.choice ,
  myDom  =
  {
    id      : 'navi' ,
    classes : ['layout' , 'center' , 'column'] ,
    content :
    [
      {
        id      : 'naviTitle' ,
        classes : ['center'] ,
        content : [choice.title]
      } ,
      {
        id      : 'naviContent' ,
        classes : ['center' , 'row'] ,
        content :
        [
          {
            id      : 'naviText' ,
            classes : ['naviContentSection' , 'center' , 'box'] ,
            content : [choice.text]
          } ,
          {
            id      : 'naviButtonBox' ,
            classes : ['naviContentSection' , 'center' , 'column'] ,
            content : choice.options.filter(P.needs).map(P.builds.choice)
          } ,
          {
            id      : 'naviConsole' ,
            classes : ['naviContentSection' , 'center' , 'box']
          } ,
        ]
      } ,
    ]
  }

  return myDom
}

