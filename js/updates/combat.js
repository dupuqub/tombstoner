
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

  P.array(9).forEach((item, index) =>
  {
    const
    image = P.images.dust2 ,
    row   = index > 5 ? -1 : index > 2 ? 0 : 1 ,
    col   = [0,3,6].indexOf(index) !== -1 ? -1 : [1,4,7].indexOf(index) !== -1 ? 0 : 1 ,
    left  = 1 ,
    top   = 1

    pen.drawImage(

      image ,
      0 ,
      0 ,
      2000 ,
      2000 ,
      center - body.w / 2 - ship.x * unit + body.w * col * left,
      center - body.w / 2 - ship.y * unit + body.w * row * top,
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

