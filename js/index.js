
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
  P.resize()
  P.draws.dust()
  P.updates.layout(P.builds.main() , P.dom('#screen'))
}

//......................................................................................................................

P.loop = () =>
{
  if(P.state.layout.id === 'combat') P.updates.combat()

  window.requestAnimationFrame(P.loop)

  // temporary movement for testing parallax

  if     ( P.keyPool.indexOf('ArrowLeft') !== -1)  P.state.ship.x -= P.state.ship.speed
  else if( P.keyPool.indexOf('ArrowRight') !== -1) P.state.ship.x += P.state.ship.speed

  if     ( P.keyPool.indexOf('ArrowUp') !== -1)   P.state.ship.y -= P.state.ship.speed
  else if( P.keyPool.indexOf('ArrowDown') !== -1) P.state.ship.y += P.state.ship.speed
}


//......................................................................................................................

P.start()
P.loop()

