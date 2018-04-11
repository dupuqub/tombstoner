
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

  P.info.dusts.forEach((dust , outerIndex) =>
  {
    P.array(9).forEach((unused, innerIndex) =>
    {
      const
      image = P.images.dusts[outerIndex] ,
      row   = innerIndex > 5 ? -1 : innerIndex > 2 ? 0 : 1 ,
      col   = [0,3,6].indexOf(innerIndex) !== -1 ? -1 : [1,4,7].indexOf(innerIndex) !== -1 ? 0 : 1 ,
      left  = Math.floor(ship.x / 800 * dust.parallax) ,
      top   = Math.floor(ship.y / 800 * dust.parallax)

      pen.drawImage
      (
        image ,

        // source
        0 ,
        0 ,
        2000 ,
        2000 ,

        // destination
        center - (ship.x * unit * dust.parallax) + (body.w * col) + (800 * unit * left) ,
        center - (ship.y * unit * dust.parallax) + (body.w * row) + (800 * unit * top) ,
        body.w ,
        body.w
      )
    })
  })

  //....................................................................................................................
  // draw ship

  pen.fillStyle = '#FFF'
  pen.beginPath()
  pen.arc(center , center , ship.radius * unit , 0 , Math.PI * 2)
  pen.fill()
}

