
'use strict'

//......................................................................................................................

P.render = myDom =>
{
  const text =

    typeof myDom === 'string'
    ? myDom
    :
      '<div'
      + (myDom.id ? ' id="' + myDom.id + '"' : '')
      + (myDom.classes && myDom.classes.length ? ' class="' + myDom.classes.reduce(P.skip) + '"' : '')
      + '>'
      + (myDom.content && myDom.content.length ? myDom.content.map(P.render).reduce(P.sum) : '')
      + '</div>'

  return text
}

