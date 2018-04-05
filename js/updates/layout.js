
'use strict'

//......................................................................................................................

P.updates.layout = myDomObjectCreator =>
{
  P.state.layout = myDomObjectCreator()

  P.dom.screen().innerHTML = P.render(P.state.layout)
}

