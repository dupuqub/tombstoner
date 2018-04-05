
'use strict'

//......................................................................................................................

const P = // project
{
  choices : {} ,
  layouts : {} ,
  updates : {} ,
}

//......................................................................................................................

P.dom = // document object model
{
  screen : () => document.querySelector('#screen') ,

  naviTitle     : () => document.querySelector('#naviTitle') ,
  naviText      : () => document.querySelector('#naviText') ,
  naviButtonBox : () => document.querySelector('#naviButtonBox') ,
  naviConsole   : () => document.querySelector('#naviConsole') ,
}

//......................................................................................................................

P.info =
{
  body   : {w : null , h : null} ,
  aspect : {w : 16 , h : 9} ,
}

//......................................................................................................................

P.state =
{
  layout            : null ,
  choice            : null ,
  ship              : null ,
  shipContentLayout : 'navi' ,
}

