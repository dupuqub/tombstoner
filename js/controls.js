
'use strict'

//......................................................................................................................

P.controls = () =>
{
  const
  gamepad = P.gamepads[0] ,
  buttons = gamepad ? gamepad.buttons : P.array(16).map(item => ({pressed : false})) ,

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

  S = P.keyPool.indexOf('s') !== -1 ,
  C = P.keyPool.indexOf('c') !== -1 ,
  L = P.keyPool.indexOf('l') !== -1 ,
  M = P.keyPool.indexOf('m') !== -1 ,

  //....................................................................................................................
  // game mechanics

  engines =
  {
    left :

      L2 && L1 || S && C
      ? 'side'
      : L2 && ! L1 || S && ! C
      ? 'forwards'
      : ! L2 && L1 || ! S && C
      ? 'backwards'
      : null ,

    right :

      R2 && R1 || L && M
      ? 'side'
      : R2 && ! R1 || L && ! M
      ? 'forwards'
      : ! R2 && R1 || ! L && M
      ? 'backwards'
      : null
  }

  P.moveAvatar(engines)
}

