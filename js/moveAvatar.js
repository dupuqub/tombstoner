
'use strict'

//......................................................................................................................

P.moveAvatar = engines =>
{
  const
  unit = P.info.unit ,
  ship = P.state.ship

  //....................................................................................................................
  // acceleration

  if(engines.left || engines.right)
  {
    const
    leftAngleModifier  = engines.left === 'forwards' ? 1 : engines.left === 'backwards' ? -1 : 0 ,
    rightAngleModifier = engines.right === 'forwards' ? -1 : engines.right === 'backwards' ? 1 : 0 ,
    angleModifier      = leftAngleModifier + rightAngleModifier ,
    newAngle           = ship.angle + ship.torque * angleModifier

    P.state.ship.angle = newAngle < 0 ? newAngle + 360 : newAngle < 360 ? newAngle : newAngle - 360

    const
    leftSpeedModifier  = engines.left === 'forwards' ? 2 : engines.left === 'backwards' ? -1 : 1 ,
    rightSpeedModifier = engines.right === 'forwards' ? 2 : engines.right === 'backwards' ? -1 : 1 ,
    speedModifier      = (leftSpeedModifier + rightSpeedModifier) / 2,

    newAccel = ship.accel * speedModifier ,
    newSpeed = ship.speed.now + newAccel ,
    maxSpeed = ship.speed.max * (speedModifier > 0 ? speedModifier : 1)

    P.state.ship.speed.now =

      newSpeed > 0 && newSpeed > maxSpeed
      ? maxSpeed
      : newSpeed < 0 && newSpeed < - maxSpeed
      ? - maxSpeed
      : newSpeed
  }

  //....................................................................................................................
  // deceleration

  else if(ship.speed.now > 0)
  {
    const newSpeed = ship.speed.now - ship.decel

    P.state.ship.speed.now = newSpeed < 0 ? 0 : newSpeed
  }
  else if(ship.speed.now < 0)
  {
    const newSpeed = ship.speed.now + ship.decel

    P.state.ship.speed.now = newSpeed > 0 ? 0 : newSpeed
  }

  //....................................................................................................................
  // move

  if(P.state.ship.speed.now)
  {
    const radians = (P.state.ship.angle - 90) * Math.PI / 180

    P.state.ship.x += P.state.ship.speed.now * Math.cos(radians) * unit
    P.state.ship.y += P.state.ship.speed.now * Math.sin(radians) * unit
  }
}

