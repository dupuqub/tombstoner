
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
    pen.fillStyle = P.assembleColor(particle.color)
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

//......................................................................................................................

P.updates.particles = () =>
{
  P.particles =

    P.particles

      .filter(particle => particle.color.a > 0 && particle.radius > 0)
      .map(particle =>
      {
        const
        unit        = P.info.unit ,
        newParticle =
        {
          x      : particle.x + particle.speed * Math.cos(particle.angle * Math.PI / 180) ,
          y      : particle.y + particle.speed * Math.sin(particle.angle * Math.PI / 180) ,
          radius : particle.radius + particle.scale ,
          scale  : particle.scale ,
          accel  : particle.accel ,
          speed  : particle.speed + particle.accel ,
          angle  : particle.angle ,
          fade   : particle.fade ,
          color  :
          {
            r : particle.color.r ,
            g : particle.color.g ,
            b : particle.color.b ,
            a : particle.color.a - particle.fade ,
          } ,
          origin : particle.origin ,
        }

        return newParticle
      })
      .filter(particle => particle.color.a && particle.radius > 0.1)
}

//......................................................................................................................

P.assembleColor = color => 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')'

//......................................................................................................................

P.solveParticleItem = item =>
{
  const solved =

    item[0]
    ? P.random(item[0] , item[1])
    : typeof item === 'function'
    ? item()
    : item

  return solved
}

//......................................................................................................................

P.updates.timeouts = () =>
{
  P.emitters.forEach(emitter =>
  {
    if(emitter.active)
    {
      if(! P.timeouts[emitter.id])
      {
        P.timeouts[emitter.id] = () =>
        {
          const
          timer       = P.solveParticleItem(emitter.timer) ,
          amount      = P.solveParticleItem(emitter.amount) ,
          newParticle =
          {
            x      : P.solveParticleItem(emitter.birth.x) ,
            y      : P.solveParticleItem(emitter.birth.y) ,
            radius : P.solveParticleItem(emitter.radius) ,
            scale  : P.solveParticleItem(emitter.scale) ,
            accel  : P.solveParticleItem(emitter.accel) ,
            speed  : P.solveParticleItem(emitter.speed) ,
            angle  : P.solveParticleItem(emitter.angle) ,
            fade   : P.solveParticleItem(emitter.fade) ,
            color  :
            {
              r : P.solveParticleItem(emitter.color.r) ,
              g : P.solveParticleItem(emitter.color.g) ,
              b : P.solveParticleItem(emitter.color.b) ,
              a : P.solveParticleItem(emitter.color.a) ,
            } ,
            origin :
            {
              x : emitter.origin.x ,
              y : emitter.origin.y ,
            } ,
          }

          P.array(amount).forEach(() => P.particles.push(newParticle))

          setTimeout(P.timeouts[emitter.id] , timer)
        }

        P.timeouts[emitter.id]()
      }
    }
    else
    {
      delete P.timeouts[emitter.id]
    }
  })
}

//......................................................................................................................

P.timeouts = {}
P.particles = []
P.emitters =
[
  {
    id      : 'avatarLeftBack' ,
    active  : true ,
    timer   : 1 ,
    amount  : 1 ,
    radius  : [1 , 2] ,
    scale   : -0.1 ,
    accel   : -0.1 ,
    speed   : 2 ,
    angle   : () => P.state.ship.angle - 180 ,
    fade    : 0.1 ,
    color   :
    {
      r : 255 ,
      g : 255 ,
      b : 255 ,
      a : 1 ,
    },
    origin :
    {
      x : () => P.info.body.h / 2 ,
      y : () => P.info.body.h / 2 ,
    } ,
    birth : // absolute variation from origin at birth
    {
      x : 0 ,
      y : 0 ,
    } ,
  } ,
  {
    id      : 'template' ,
    active  : false ,
    timer   : 0 , // time between emissions in miliseconds
    amount  : 0 , // particles per emission
    radius  : 0 , // initial radius
    scale   : 0 , // radius added each frame
    accel   : 0 , // constant acceleration
    speed   : 0 , // initial speed
    angle   : 0 , // travel direction
    fade    : 0 , // opacity loss per frame
    color   :
    {
      r : 0 ,
      g : 0 ,
      b : 0 ,
      a : 0 ,
    },
    origin :
    {
      x : 0 ,
      y : 0 ,
    } ,
    birth : // absolute variation from origin at birth
    {
      x : 0 ,
      y : 0 ,
    } ,
  }
]

