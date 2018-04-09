
'use strict'

//......................................................................................................................

P.updates.combat = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,
  ship   = P.state.ship

  // clean canvas

  pen.clearRect(0 , 0 , P.info.body.w , P.info.body.h)

  // draw dust

  pen.drawImage(P.images.dust0 , 0 , 0 , 2000 , 2000 , - ship.x * 0.30 , - ship.y * 0.30 , P.info.body.w , P.info.body.w)
  pen.drawImage(P.images.dust1 , 0 , 0 , 2000 , 2000 , - ship.x * 0.35 , - ship.y * 0.35 , P.info.body.w , P.info.body.w)
  pen.drawImage(P.images.dust2 , 0 , 0 , 2000 , 2000 , - ship.x * 0.80 , - ship.y * 0.80 , P.info.body.w , P.info.body.w)
  pen.drawImage(P.images.dust3 , 0 , 0 , 2000 , 2000 , - ship.x * 1.00 , - ship.y * 1.00 , P.info.body.w , P.info.body.w)

  // draw ship

  pen.fillStyle = '#FFF'
  pen.beginPath()
  pen.arc(P.info.body.h / 2 , P.info.body.h / 2 , ship.r , 0 , Math.PI * 2)
  pen.fill()
}

