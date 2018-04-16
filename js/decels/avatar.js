
'use strict'

//......................................................................................................................

P.decels.avatar = type => // 'common' or 'lateral'
{
  const
  ship  = P.state.ship ,
  speed = ship.speed

  if(speed[type].now > 0)
  {
    const newSpeed = speed[type].now - ship.decel

    P.state.ship.speed[type].now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(speed[type].now < 0)
  {
    const newSpeed = speed[type].now + ship.decel

    P.state.ship.speed[type].now = newSpeed > 0 ? 0 : newSpeed
  }
}

