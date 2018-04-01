
'use strict'

//......................................................................................................................

P.resize = event => // "event" is not used below, but it exists
{
  //....................................................................................................................
  // calculations

  const
  unit_w   = window.innerWidth / P.info.aspect.w,
  unit_h   = window.innerHeight / P.info.aspect.h,
  vertical = unit_w < unit_h,
  w        = vertical ? window.innerWidth : unit_h * P.info.aspect.w,
  h        = ! vertical ? window.innerHeight : unit_w * P.info.aspect.h

  //....................................................................................................................
  // store useful information for fast access

  P.info.body = {w , h}

  //....................................................................................................................
  // modify CSS

  Array.from(document.styleSheets).some(sheet =>
  {
    if(sheet.href !== null && sheet.href.indexOf('/root.css') !== -1)
    {
      const new_root =

        '--w : ' + w + 'px;' +
        '--h : ' + h + 'px;'

      sheet.cssRules[0].style.cssText = new_root

      return true
    }
  } )
}

