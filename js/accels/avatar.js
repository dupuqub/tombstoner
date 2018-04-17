
'use strict'

//......................................................................................................................

P.accels.avatar = () =>
{
  //....................................................................................................................
  // angle

  const
  ship = P.state.ship ,

  engines = ship.engines ,
  left    = engines.left ,
  right   = engines.right ,

  leftAngleModifier  = left === 'forwards' ? 1 : left === 'backwards' ? -1 : 0 ,
  rightAngleModifier = right === 'forwards' ? -1 : right === 'backwards' ? 1 : 0 ,
  angleModifier      = leftAngleModifier + rightAngleModifier ,
  newAngle           = ship.angle + ship.torque * angleModifier ,
  finalAngle         =

      newAngle < 0
    ? newAngle + 360
    : newAngle < 360
    ? newAngle
    : newAngle - 360

  P.state.ship.angle = finalAngle

  //....................................................................................................................
  // common speed

  const
  leftSpeedModifier  = left === 'forwards' ? 2 : left === 'backwards' ? -1 : 0 ,
  rightSpeedModifier = right === 'forwards' ? 2 : right === 'backwards' ? -1 : 0 ,
  speedModifier      = (leftSpeedModifier + rightSpeedModifier) / 2 ,

  common      = ship.speed.common ,
  commonAccel = ship.accel * speedModifier ,
  commonNew   = common.now + commonAccel ,
  commonAim   = common.max.max * (speedModifier > 0 ? speedModifier : 1) ,
  commonStep  = (commonAim - common.max.now) / 20 ,
  commonMax   = common.max.now + commonStep ,
  commonFinal =

      commonNew > 0 && commonNew > commonMax
    ? commonMax
    : commonNew < 0 && commonNew < -commonMax
    ? -commonMax
    : commonNew

  P.state.ship.speed.common.max.now = commonMax
  P.state.ship.speed.common.now = commonFinal

  //....................................................................................................................
  // lateral speed

  if(left === 'sideways' && right !== 'sideways'
  || left !== 'sideways' && right === 'sideways')
  {
    const
    lateral      = ship.speed.lateral ,
    lateralAccel = ship.accel * 2 ,
    lateralNew   = lateral.now + (left === 'sideways' ? lateralAccel : -lateralAccel) ,
    lateralFinal =

        lateralNew > 0 && lateralNew > lateral.max
      ? lateral.max
      : lateralNew < 0 && lateralNew < -lateral.max
      ? -lateral.max
      : lateralNew

    P.state.ship.speed.lateral.now = lateralFinal
  }

  //....................................................................................................................
  // secondary common decel

  if(left === 'sideways' && (right === 'sideways' || right === null)
  || right === 'sideways' && (left === 'sideways' || left === null))
  {
    P.decels.avatar('common')
  }
}

