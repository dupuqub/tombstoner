
'use strict'

//......................................................................................................................

P.updates.navi = (choice , render , save) =>
{
  P.info.choice = choice

  if(render) P.dom('#shipContent').innerHTML = P.render(P.builds.navi())
  if(save) P.state.choice = P.info.choice
}

