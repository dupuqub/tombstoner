
'use strict'

//......................................................................................................................

P.click = event =>
{
  const target = event.target.id

  //....................................................................................................................

  if(target === 'new')
  {
    P.info.shipTab = 'navi'

    P.updates.navi(P.choices.intro[0]() , false , true)
    P.updates.build(P.builds.ship() , P.dom('#screen') , true)
  }

  //....................................................................................................................

  else if(target.slice(0 , 10) === 'naviButton')
  {
    const index = Number(target.slice(-1))

    P.info.choice.options[index].outcome()
  }
}

