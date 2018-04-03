
'use strict'

//......................................................................................................................

P.render = myDomObject =>
{
  const text =

    '<div'
    + (myDomObject.id ? ' id="' + myDomObject.id + '"' : '')
    + (myDomObject.classes.length ? ' class="' + myDomObject.classes.reduce(P.space) + '"' : '')
    + '>'
    + (myDomObject.content.length ? myDomObject.content.map(P.render).reduce(P.sum) : '')
    + '</div>'

  return text
}

