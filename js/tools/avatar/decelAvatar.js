
'use strict'

//......................................................................................................................

P.decelAvatar = engines =>
{
  const
  unit = P.info.unit ,
  ship = P.state.ship

  if(ship.speed.common.now > 0)
  {
    const newSpeed = ship.speed.common.now - ship.decel

    P.state.ship.speed.common.now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(ship.speed.common.now < 0)
  {
    const newSpeed = ship.speed.common.now + ship.decel

    P.state.ship.speed.common.now = newSpeed > 0 ? 0 : newSpeed
  }
}

