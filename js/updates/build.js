
'use strict'

//......................................................................................................................

P.updates.build = (myDomObject , container) =>
{
  P.state[container] = myDomObject

  P.dom[container]().innerHTML = P.render(P.state[container])
}

