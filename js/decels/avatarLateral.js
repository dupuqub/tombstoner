
'use strict'

//......................................................................................................................

P.decels.avatarLateral = () =>
{
  const
  ship    = P.state.ship ,
  speed   = ship.speed

  if(speed.lateral.now > 0)
  {
    const newSpeed = speed.lateral.now - ship.decel

    P.state.ship.speed.lateral.now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(speed.lateral.now < 0)
  {
    const newSpeed = speed.lateral.now + ship.decel

    P.state.ship.speed.lateral.now = newSpeed > 0 ? 0 : newSpeed
  }
}

