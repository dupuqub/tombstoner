
'use strict'

//......................................................................................................................

P.emitters =
[
  {
    id     : 'avatar0' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar1' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 45 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar2' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 90 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar3' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 135 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar4' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 180 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar5' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 225 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar6' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 270 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'avatar7' ,
    active : true ,
    timer  : 1 ,
    amount : 1 ,
    radius : 1 ,
    scale  : 1 ,
    accel  : -0.1 ,
    speed  : 4 ,
    angle  : () => P.state.ship.angle - 315 ,
    fade   : 0 ,
    color  :
    {
      r : () => P.random(0 , 255) ,
      g : () => P.random(0 , 255) ,
      b : () => P.random(0 , 255) ,
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
    id     : 'template' ,
    active : false ,
    timer  : 0 , // time between emissions in miliseconds
    amount : 0 , // particles per emission
    radius : 0 , // initial radius
    scale  : 0 , // radius added each frame
    accel  : 0 , // constant acceleration
    speed  : 0 , // initial speed
    angle  : 0 , // travel direction
    fade   : 0 , // opacity loss per frame
    color  :
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
    birth :
    {
      x : 0 ,
      Y : 0 ,
    }
  }
]

