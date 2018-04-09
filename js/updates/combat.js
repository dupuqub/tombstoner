
'use strict'

//......................................................................................................................

P.updates.combat = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,
  ship   = P.state.ship ,
  body   = P.info.body ,
  u      = P.info.unit

  // clean canvas

  pen.clearRect(0 , 0 , P.info.body.w , P.info.body.h)

  // draw dust

  pen.drawImage(P.images.dust0 , 0 , 0 , 2000 , 2000 , - ship.x * u * 0.30 , - ship.y * u * 0.30 , body.w , body.w)
  pen.drawImage(P.images.dust1 , 0 , 0 , 2000 , 2000 , - ship.x * u * 0.35 , - ship.y * u * 0.35 , body.w , body.w)
  pen.drawImage(P.images.dust2 , 0 , 0 , 2000 , 2000 , - ship.x * u * 0.80 , - ship.y * u * 0.80 , body.w , body.w)
  pen.drawImage(P.images.dust3 , 0 , 0 , 2000 , 2000 , - ship.x * u * 1.00 , - ship.y * u * 1.00 , body.w , body.w)

  console.log(P.info.body.w)

  // draw ship

  pen.fillStyle = '#FFF'
  pen.beginPath()
  pen.arc(P.info.body.h / 2 , P.info.body.h / 2 , ship.r * u , 0 , Math.PI * 2)
  pen.fill()
}

