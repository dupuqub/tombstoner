
'use strict'

//......................................................................................................................

onresize    = event => P.resize(event)
onclick     = event => P.click(event)
onmousemove = event => P.hover(event)
onkeydown   = event => P.press(event)
onkeyup     = event => P.release(event)

//......................................................................................................................

P.start = () =>
{
  P.draws.dust()
  P.draws.avatar()

  P.resize()
  P.updates.layout(P.builds.combat() , P.dom('#screen'))
}

//......................................................................................................................

P.loop = () =>
{
  if(P.state.layout.id === 'combat') P.updates.combat()

  window.requestAnimationFrame(P.loop)

  //....................................................................................................................
  // temporary movement for testing parallax and rotation

  let ship = P.state.ship

  if     (P.keyPool.indexOf('ArrowLeft') !== -1)  P.state.ship.x -= ship.speed
  else if(P.keyPool.indexOf('ArrowRight') !== -1) P.state.ship.x += ship.speed

  if     (P.keyPool.indexOf('ArrowUp') !== -1)   P.state.ship.y -= ship.speed
  else if(P.keyPool.indexOf('ArrowDown') !== -1) P.state.ship.y += ship.speed

  ship = P.state.ship

  P.state.ship.angle =

    P.keyPool.indexOf('ArrowRight') !== -1
    ? (P.keyPool.indexOf('ArrowUp') !== -1 ? 45 : P.keyPool.indexOf('ArrowDown') !== -1 ? 135 : 90)
    : P.keyPool.indexOf('ArrowLeft') !== -1
    ? (P.keyPool.indexOf('ArrowUp') !== -1 ? -45 : P.keyPool.indexOf('ArrowDown') !== -1 ? -135 : -90)
    : (P.keyPool.indexOf('ArrowUp') !== -1 ? 0 : P.keyPool.indexOf('ArrowDown') !== -1 ? 180 : ship.angle)

  console.log(P.state.ship.angle)
}

//......................................................................................................................

P.start()
P.loop()

