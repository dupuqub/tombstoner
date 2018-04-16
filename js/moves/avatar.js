
'use strict'

//......................................................................................................................

P.moves.avatar = () =>
{
  const
  unit    = P.info.unit ,
  ship    = P.state.ship ,
  engines = ship.engines ,
  speed   = ship.speed

  //....................................................................................................................
  // draw last frame

  if(speed.common.now)
  {
    const radians = (ship.angle - 90) * Math.PI / 180

    P.state.ship.x += speed.common.now * Math.cos(radians) * unit / 2
    P.state.ship.y += speed.common.now * Math.sin(radians) * unit / 2
  }

  if(speed.lateral.now)
  {
    const radians = (ship.angle - 180) * Math.PI / 180

    P.state.ship.x += speed.lateral.now * Math.cos(radians) * unit / 2
    P.state.ship.y += speed.lateral.now * Math.sin(radians) * unit / 2
  }

  //....................................................................................................................
  // calculate next frame

  engines.left || engines.right
  ? P.accels.avatar()
  : P.decels.avatar('common')

  if(engines.left !== 'sideways' && engines.right !== 'sideways'
  || engines.left === 'sideways' && engines.right === 'sideways')
  {
    P.decels.avatar('lateral')
  }

}

