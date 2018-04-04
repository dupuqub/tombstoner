
'use strict'

//......................................................................................................................

P.render = myDomObject =>
{
  const text =

    typeof myDomObject === 'string'
    ? myDomObject
    :
      '<div'
      + (myDomObject.id ? ' id="' + myDomObject.id + '"' : '')
      + (myDomObject.classes && myDomObject.classes.length ? ' class="' + myDomObject.classes.reduce(P.skip) + '"' : '')
      + '>'
      + (myDomObject.content && myDomObject.content.length ? myDomObject.content.map(P.render).reduce(P.sum) : '')
      + '</div>'

  return text
}

