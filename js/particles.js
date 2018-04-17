
'use strict'

//......................................................................................................................

P.renders.particles = () =>
{
  //
}

//......................................................................................................................

P.updates.particles = () =>
{
  //
}

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
            size   : P.solveParticleItem(emitter.size) ,
            scale  : P.solveParticleItem(emitter.scale) ,
            accel  : P.solveParticleItem(emitter.accel) ,
            speed  : P.solveParticleItem(emitter.speed) ,
            angle  : P.solveParticleItem(emitter.angle) ,
            fade   : P.solveParticleItem(emitter.fade) ,
            color  :

              'rgb('
              + P.solveParticleItem(color.r) + ','
              + P.solveParticleItem(color.g) + ','
              + P.solveParticleItem(color.b) + ','
              + P.solveParticleItem(color.a) + ')' ,

            origin :
            {
              x : P.solveParticleItem(origin.x) + P.solveParticleItem(birth.x) ,
              y : P.solveParticleItem(origin.y) + P.solveParticleItem(birth.y) ,
            }
          }

          P.array(amount).forEach(() => P.particles.push(newParticle))

          setTimeout(P.timeouts[emitter.id] , timer)
        }
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
    id      : 'avatarLeftFront' ,
    active  : true ,
    timer   : 10 ,
    amount  : 1 ,
    size    : [1 , 3] ,
    scale   : 0 ,
    accel   : 0.5 ,
    speed   : 1 ,
    angle   : () => P.state.ship.angle ,
    fade    : 0.01 ,
    color   :
    {
      r : 255 ,
      g : 255 ,
      b : 255 ,
      a : 1 ,
    },
    origin :
    {
      x : () => P.info.body.height / 2 ,
      y : () => P.info.body.height / 2 ,
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
    size    : 0 , // initial size
    scale   : 0 , // size added each frame
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

