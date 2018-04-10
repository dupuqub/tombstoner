
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
  unit   = P.info.unit

  //....................................................................................................................
  // clean canvas

  pen.clearRect(0 , 0 , P.info.body.w , P.info.body.h)

  //....................................................................................................................
  // draw dust

//   pen.drawImage(P.images.dust0 , 0 , 0 , 2000 , 2000 , -ship.x * unit * 0.30 , -ship.y * unit * 0.30 , body.w , body.w)
//   pen.drawImage(P.images.dust1 , 0 , 0 , 2000 , 2000 , -ship.x * unit * 0.35 , -ship.y * unit * 0.35 , body.w , body.w)
//   pen.drawImage(P.images.dust2 , 0 , 0 , 2000 , 2000 , -ship.x * unit * 1.00 , -ship.y * unit * 1.00 , body.w , body.w)
//   pen.drawImage(P.images.dust3 , 0 , 0 , 2000 , 2000 , -ship.x * unit * 1.20 , -ship.y * unit * 1.20 , body.w , body.w)

  P.array(9).forEach((item, index) =>
  {
    const
    image = P.images.dust2 ,
    row   = index > 5 ? -1 : index > 2 ? 0 : 1 ,
    col   = [0,3,6].indexOf(index) !== -1 ? -1 : [1,4,7].indexOf(index) !== -1 ? 0 : 1 ,
    left  = Math.floor(ship.x / 800) ,
    top   = Math.floor(ship.y / 800)

    pen.drawImage(

      image ,
      0 ,
      0 ,
      2000 ,
      2000 ,
      center - (ship.x * unit) + (body.w * col) + (800 * left * unit) ,
      center - (ship.y * unit) + (body.w * row) + (800 * top * unit) ,
      body.w ,
      body.w
    )
  })

  //....................................................................................................................
  // draw ship

  pen.fillStyle = '#FFF'
  pen.beginPath()
  pen.arc(center , center , ship.radius * unit , 0 , Math.PI * 2)
  pen.fill()
}

