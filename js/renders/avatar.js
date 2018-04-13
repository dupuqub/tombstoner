
'use strict'

//......................................................................................................................

P.renders.avatar = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,

  ship   = P.state.ship ,
  body   = P.info.body ,
  center = canvas.width / 2 ,
  unit   = P.info.unit ,

  avatar = P.images.avatar

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
  // hitbox

  // pen.strokeStyle = '#0F0'
  // pen.beginPath()
  // pen.arc(center , center , ship.radius * unit , 0 , Math.PI * 2)
  // pen.stroke()

  //....................................................................................................................
  // direction

  // const radians = (P.state.ship.angle - 90) * Math.PI / 180

  // pen.strokeStyle = '#0F0'
  // pen.beginPath()
  // pen.moveTo(center, center)
  // pen.lineTo
  // (
  //   center + Math.cos(radians) * 100 ,
  //   center + Math.sin(radians) * 100
  // )
  // pen.stroke()
}

