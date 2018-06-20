
'use strict'

//......................................................................................................................

P.updates.particles = () =>
{
  P.particles =

    P.particles

      .filter(particle => particle.color.a > 0 && particle.radius < 200)
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
      .filter(particle => particle.color.a && particle.radius < 200)
}

