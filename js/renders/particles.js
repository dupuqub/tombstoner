
'use strict'

//......................................................................................................................

P.renders.particles = () =>
{
  const
  canvas = P.dom('canvas') ,
  pen    = canvas.getContext('2d') ,
  unit   = P.info.unit ,
  body   = P.info.body ,
  center = canvas.width / 2

  P.particles.forEach(particle =>
  {
    pen.fillStyle = P.color(particle.color)
    pen.beginPath()
    pen.arc
    (
      particle.origin.x() + particle.x * unit,
      particle.origin.y() + particle.y * unit,
      particle.radius * unit ,
      0 ,
      Math.PI * 2
    )
    pen.fill()
  })
}

