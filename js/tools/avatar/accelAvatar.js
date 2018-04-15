
'use strict'

//......................................................................................................................

P.accelAvatar = engines =>
{
  // angle

  const
  unit = P.info.unit ,
  ship = P.state.ship ,

  left  = engines.left ,
  right = engines.right ,

  leftAngleModifier  = left === 'forwards' ? 1 : left === 'backwards' ? -1 : 0 ,
  rightAngleModifier = right === 'forwards' ? -1 : right === 'backwards' ? 1 : 0 ,
  angleModifier      = leftAngleModifier + rightAngleModifier ,
  newAngle           = ship.angle + ship.torque * angleModifier

  P.state.ship.angle =

      newAngle < 0
    ? newAngle + 360
    : newAngle < 360
    ? newAngle
    : newAngle - 360

  // speed

  const
  leftSpeedModifier  = left === 'forwards' ? 2 : left === 'backwards' ? -1 : 0 ,
  rightSpeedModifier = right === 'forwards' ? 2 : engines.right === 'backwards' ? -1 : 0 ,
  speedModifier      = (leftSpeedModifier + rightSpeedModifier) / 2 ,

  newAccel = ship.accel * speedModifier ,
  maxSpeed = ship.speed.max * (speedModifier > 0 ? speedModifier : 1) ,
  newSpeed = ship.speed.now + newAccel

  P.state.ship.speed.now =

    newSpeed > 0 && newSpeed > maxSpeed
    ? maxSpeed
    : newSpeed < 0 && newSpeed < - maxSpeed
    ? - maxSpeed
    : newSpeed

  if(left === 'sideways' && (right === 'sideways' || right === null)
  || right === 'sideways' && (left === 'sideways' || left === null))
  {
    P.decelAvatar()
  }
}

