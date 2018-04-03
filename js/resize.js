
'use strict'

//......................................................................................................................

P.resize = event => // "event" is not used below, but it exists
{
  //....................................................................................................................
  // calculations

  const
  unitW    = window.innerWidth / P.info.aspect.w ,
  unitH    = window.innerHeight / P.info.aspect.h ,
  vertical = unitW < unitH ,
  w        = vertical ? window.innerWidth : unitH * P.info.aspect.w ,
  h        = ! vertical ? window.innerHeight : unitW * P.info.aspect.h

  //....................................................................................................................
  // store useful information for fast access

  P.info.body = { w , h }

  //....................................................................................................................
  // modify CSS

  Array.from(document.styleSheets).some(sheet =>
  {
    if(sheet.href !== null && sheet.href.indexOf('/root.css') !== -1)
    {
      sheet.cssRules[0].style.cssText =

        '--w : ' + w + 'px ;' +
        '--h : ' + h + 'px ;'

      return true // to stop running
    }
  } )
}

