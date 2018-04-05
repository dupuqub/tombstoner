
'use strict'

//......................................................................................................................

P.updates.navi = (choice , render , save) =>
{
  P.info.choice = choice

  if(save) P.state.choice = P.info.choice
  if(render) P.updates.build(P.builds.navi() , P.dom('#shipContent') , false)
}

