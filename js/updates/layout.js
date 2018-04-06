
'use strict'

//......................................................................................................................

P.updates.layout = myDom =>
{
  P.dom('#screen').innerHTML = P.render(myDom)

  P.state.layout = myDom
}

