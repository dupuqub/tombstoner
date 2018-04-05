
'use strict'

//......................................................................................................................

P.click = event =>
{
  const target = event.target.id

  if(target === 'new')
  {
    P.info.shipTab = 'navi'
    P.info.choice = P.choices.intro[0]()
    P.state.choice = P.choices.intro[0]()

    P.updates.build(P.builds.ship() , 'screen' , true)
  }

  else if(target === '')
  {
    //
  }
}

