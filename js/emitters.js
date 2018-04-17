
'use strict'

//......................................................................................................................

P.emitters =
[
  {
    id      : 'avatarLeftBack' ,
    active  : true ,
    timer   : 1 ,
    amount  : 1 ,
    radius  : [1 , 2] ,
    scale   : -0.1 ,
    accel   : -0.1 ,
    speed   : 2 ,
    angle   : () => P.state.ship.angle - 180 ,
    fade    : 0.1 ,
    color   :
    {
      r : 255 ,
      g : 255 ,
      b : 255 ,
      a : 1 ,
    },
    origin :
    {
      x : () => P.info.body.h / 2 ,
      y : () => P.info.body.h / 2 ,
    } ,
    birth :
    {
      x : 0 ,
      y : 0 ,
    } ,
  } ,
  {
    id      : 'template' ,
    active  : false ,
    timer   : 0 , // time between emissions in miliseconds
    amount  : 0 , // particles per emission
    radius  : 0 , // initial radius
    scale   : 0 , // radius added each frame
    accel   : 0 , // constant acceleration
    speed   : 0 , // initial speed
    angle   : 0 , // travel direction
    fade    : 0 , // opacity loss per frame
    color   :
    {
      r : 0 ,
      g : 0 ,
      b : 0 ,
      a : 0 ,
    },
    origin :
    {
      x : 0 ,
      y : 0 ,
    } ,
    birth : // absolute variation from origin at birth
    {
      x : 0 ,
      y : 0 ,
    } ,
  }
]

