
'use strict'

//......................................................................................................................

P.updates.combat = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d')

  pen.clearRect(0 , 0 , canvas.width , canvas.height)

  P.moves.avatar()

  P.renders.dust()
  P.renders.avatar()
}

