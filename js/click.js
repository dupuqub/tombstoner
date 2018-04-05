
'use strict'

//......................................................................................................................

P.click = event =>
{
  const target = event.target.id

  if(target === 'new')
  {
    P.updates.build(P.builds.ship('navi') , 'screen')

    P.updates.choice(P.choices.intro[0]() , true)
  }

  else if(target === '')
  {
    //
  }
}

