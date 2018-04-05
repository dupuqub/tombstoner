
'use strict'

//......................................................................................................................

P.updates.build = (myDomObject , container , save) =>
{
  if(save) P.state[container] = myDomObject

  P.dom[container]().innerHTML = P.render(P.state[container])
}

