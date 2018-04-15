
'use strict'

//......................................................................................................................

P.moveAvatar = engines =>
{
  const
  unit = P.info.unit ,
  ship = P.state.ship

  engines.left || engines.right
  ? P.accelAvatar(engines)
  : P.decelAvatar(engines)

  //....................................................................................................................
  // decel lateral

  if(ship.speed.lateral.now > 0)
  {
    const newSpeed = ship.speed.lateral.now - ship.decel

    P.state.ship.speed.lateral.now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(ship.speed.lateral.now < 0)
  {
    const newSpeed = ship.speed.lateral.now + ship.decel

    P.state.ship.speed.lateral.now = newSpeed > 0 ? 0 : newSpeed
  }

  //....................................................................................................................
  // move

  const speed = P.state.ship.speed

  if(speed.common.now)
  {
    const radians = (P.state.ship.angle - 90) * Math.PI / 180

    P.state.ship.x += speed.common.now * Math.cos(radians) * unit / 2
    P.state.ship.y += speed.common.now * Math.sin(radians) * unit / 2
  }

  if(speed.lateral.now)
  {
    const radians = (P.state.ship.angle - 180) * Math.PI / 180

    P.state.ship.x += speed.lateral.now * Math.cos(radians) * unit / 2
    P.state.ship.y += speed.lateral.now * Math.sin(radians) * unit / 2
  }
}

