
'use strict'

//......................................................................................................................

onresize = event => P.resize(event)
onmousemove = event => P.mouse_move(event)
onclick = event => P.click(event)

//......................................................................................................................

P.create = () =>
{
  P.hide(P.dom.game)

  P.updates.tab('navi')

  P.resize()
  P.update()
}

//......................................................................................................................

P.update = () =>
{
  // code

  window.requestAnimationFrame(P.update)
}

//......................................................................................................................

P.create()

