
'use strict'

//......................................................................................................................

P.updates.combat = () =>
{
  const
  center = P.info.body.h / 2 ,
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,
  ship   = P.state.ship ,
  body   = P.info.body ,
  u      = P.info.unit

  // clean canvas

  pen.clearRect(0 , 0 , P.info.body.w , P.info.body.h)

  // draw dust

  // pen.drawImage(P.images.dust0 , 0 , 0 , 2000 , 2000 , -ship.x * u * 0.30 , -ship.y * u * 0.30 , body.w , body.w)
  // pen.drawImage(P.images.dust1 , 0 , 0 , 2000 , 2000 , -ship.x * u * 0.35 , -ship.y * u * 0.35 , body.w , body.w)
  // pen.drawImage(P.images.dust3 , 0 , 0 , 2000 , 2000 , -ship.x * u * 1.00 , -ship.y * u * 1.00 , body.w , body.w)

  P.array(9).forEach((item, index) =>
  {
    const
    image = P.images.dust2 ,
    row   = index > 5 ? -1 : index > 2 ? 0 : 1 ,
    col   = index === 0 || index === 3 || index === 6 ? -1 : index === 1 || index === 4 || index === 7 ? 0 : 1 ,
    left  = 1 ,
    top   = 1

    pen.drawImage(

      image ,
      0 ,
      0 ,
      2000 ,
      2000 ,
      center - body.w / 2 - ship.x * u + body.w * col * left,
      center - body.w / 2 - ship.y * u + body.w * row * top,
      body.w ,
      body.w
    )
  })

  // draw ship

  pen.fillStyle = '#FFF'
  pen.beginPath()
  pen.arc(center , center , ship.radius * u , 0 , Math.PI * 2)
  pen.fill()
}

