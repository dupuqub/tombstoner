
'use strict'

//......................................................................................................................

P.decelAvatar = engines =>
{
  const
  unit = P.info.unit ,
  ship = P.state.ship

  if(ship.speed.now > 0)
  {
    const newSpeed = ship.speed.now - ship.decel

    P.state.ship.speed.now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(ship.speed.now < 0)
  {
    const newSpeed = ship.speed.now + ship.decel

    P.state.ship.speed.now = newSpeed > 0 ? 0 : newSpeed
  }
}

