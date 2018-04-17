
'use strict'

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

