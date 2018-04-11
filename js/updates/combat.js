
'use strict'

//......................................................................................................................

P.updates.combat = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,

  ship   = P.state.ship ,
  body   = P.info.body ,
  center = canvas.width / 2 ,
  unit   = P.info.unit


  //....................................................................................................................
  // clean canvas

  pen.clearRect(0 , 0 , canvas.width , canvas.height)

  //....................................................................................................................
  // draw dust

  P.info.dusts.forEach((dust , outerIndex) =>
  {
    const image = P.images.dusts[outerIndex]

    P.array(9).forEach((unused, innerIndex) =>
    {
      const
      row = innerIndex > 5 ? -1 : innerIndex > 2 ? 0 : 1 ,
      col = [0,3,6].indexOf(innerIndex) !== -1 ? -1 : [1,4,7].indexOf(innerIndex) !== -1 ? 0 : 1 ,

      x = ship.x / unit * dust.parallax , // px
      y = ship.y / unit * dust.parallax , // px

      lft = Math.floor(x / 800) , // px
      top = Math.floor(y / 800)   // px

      pen.drawImage
      (
        image ,

        // source
        0 ,
        0 ,
        image.width ,
        image.width ,

        // destination
        center - (x * unit) + (body.w * col) + (body.w * lft) , // px (except origin to adapt to screen)
        center - (y * unit) + (body.w * row) + (body.w * top) , // px (except origin to adapt to screen)
        body.w ,
        body.w

        // destination x and y explanation
        // center - (origin) + (matrix) + (layout)
      )
    })
  })

  //....................................................................................................................
  // draw ship

  const avatar = P.images.avatar

  pen.save()
  pen.translate(center , center)
  pen.rotate(ship.angle * Math.PI / 180)

  pen.drawImage
  (
    avatar ,

    // source
    0 ,
    0 ,
    avatar.width ,
    avatar.width ,

    // destination
    - ship.radius * unit,
    - ship.radius * unit,
    ship.radius * 2 * unit,
    ship.radius * 2 * unit
  )

  pen.restore()

  //....................................................................................................................
  // draw ship's hitbox

  // pen.strokeStyle = '#0F0'
  // pen.beginPath()
  // pen.arc(center , center , ship.radius * unit , 0 , Math.PI * 2)
  // pen.stroke()
}

