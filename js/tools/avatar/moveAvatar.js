
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
  // move

  if(P.state.ship.speed.now)
  {
    const radians = (P.state.ship.angle - 90) * Math.PI / 180

    P.state.ship.x += P.state.ship.speed.now * Math.cos(radians) * unit
    P.state.ship.y += P.state.ship.speed.now * Math.sin(radians) * unit
  }
}

