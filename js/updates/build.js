
'use strict'

//......................................................................................................................

P.updates.build = (myDom , container , save) =>
{
  container.innerHTML = P.render(myDom)

  if(save) P.state[container] = myDom
}

