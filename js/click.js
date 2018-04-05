
'use strict'

//......................................................................................................................

P.click = event =>
{
  const target = event.target.id

  if(target === 'new')
  {
    P.updates.layout(P.layouts.ship)
    P.updates.choice(P.choices.intro[0] , true)
  }

  else if(target === '')
  {
    //
  }
}

