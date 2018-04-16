
'use strict'

//......................................................................................................................

P.accels.avatar = () =>
{
  //....................................................................................................................
  // angle

  const
  unit = P.info.unit ,
  ship = P.state.ship ,

  engines = ship.engines ,
  left    = engines.left ,
  right   = engines.right ,

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

  //....................................................................................................................
  // common speed

  const
  leftSpeedModifier  = left === 'forwards' ? 2 : left === 'backwards' ? -1 : 0 ,
  rightSpeedModifier = right === 'forwards' ? 2 : engines.right === 'backwards' ? -1 : 0 ,
  speedModifier      = (leftSpeedModifier + rightSpeedModifier) / 2 ,

  commonAccel    = ship.accel * speedModifier ,
  commonMaxSpeed = ship.speed.common.max * (speedModifier > 0 ? speedModifier : 1) ,
  newCommon      = ship.speed.common.now + commonAccel

  P.state.ship.speed.common.now =

      newCommon > 0 && newCommon > commonMaxSpeed
    ? commonMaxSpeed
    : newCommon < 0 && newCommon < -commonMaxSpeed
    ? -commonMaxSpeed
    : newCommon

  //....................................................................................................................
  // lateral speed

  if(left === 'sideways' && right !== 'sideways'
  || left !== 'sideways' && right === 'sideways')
  {
    const
    lateralAccel    = ship.accel ,
    lateralMaxSpeed = ship.speed.lateral.max * (speedModifier > 0 ? speedModifier : 1) ,
    newLateral      = ship.speed.lateral.now + (left === 'sideways' ? lateralAccel : -lateralAccel)

    P.state.ship.speed.lateral.now =

        newLateral > 0 && newLateral > lateralMaxSpeed
      ? lateralMaxSpeed
      : newLateral < 0 && newLateral < -lateralMaxSpeed
      ? -lateralMaxSpeed
      : newLateral
  }

  //....................................................................................................................
  // secondary common decel

  if(left === 'sideways' && (right === 'sideways' || right === null)
  || right === 'sideways' && (left === 'sideways' || left === null))
  {
    P.decels.avatar('common')
  }
}

