
'use strict'

//......................................................................................................................

P.updates.layout = myDomObjectGenerator =>
{
  P.state.layout = myDomObjectGenerator()

  P.dom.screen.innerHTML = P.render(P.state.layout)
}

