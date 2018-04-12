
'use strict'

//......................................................................................................................

P.gamepad = () =>
{
  const
  gamepad = P.gamepads[0] ,
  buttons = gamepad.buttons ,

  //....................................................................................................................
  // XBOX 360 nomenclature

  A = buttons[0].pressed ,
  B = buttons[1].pressed ,
  X = buttons[2].pressed ,
  Y = buttons[3].pressed ,

  L1 = buttons[4].pressed ,
  R1 = buttons[5].pressed ,
  L2 = buttons[6].pressed ,
  R2 = buttons[7].pressed ,

  BACK  = buttons[8].pressed ,
  START = buttons[9].pressed ,

  L3 = buttons[10].pressed ,
  R3 = buttons[11].pressed ,

  UP    = buttons[12].pressed ,
  DOWN  = buttons[13].pressed ,
  LEFT  = buttons[14].pressed ,
  RIGHT = buttons[15].pressed ,

  //....................................................................................................................
  // game mechanics

  ship = P.state.ship ,

  engines =
  {
    left  : L2 && L1 ? 'side' : L2 && ! L1 ? 'forwards' : ! L2 && L1 ? 'backwards' : null ,
    right : R2 && R1 ? 'side' : R2 && ! R1 ? 'forwards' : ! R2 && R1 ? 'backwards' : null
  }

  if(engines.left || engines.right)
  {
    const
    leftAngleModifier  = engines.left === 'forwards' ? 1 : engines.left === 'backwards' ? -1 : 0 ,
    rightAngleModifier = engines.right === 'forwards' ? -1 : engines.right === 'backwards' ? 1 : 0 ,
    angleModifier      = leftAngleModifier + rightAngleModifier

    P.state.ship.angle = ship.angle + ship.torque * angleModifier
  }
}

