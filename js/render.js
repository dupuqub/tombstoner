
'use strict'

//......................................................................................................................

P.render = myDom =>
{
  const text =

    typeof myDom === 'string'
    ? myDom
    :
      '<'
      + (myDom.type ? myDom.type : 'div')
      + ''
      + (myDom.id ? ' id="' + myDom.id + '"' : '')
      + (myDom.classes && myDom.classes.length ? ' class="' + myDom.classes.reduce(P.skip) + '"' : '')
      + (myDom.attributes && myDom.attributes.length ? ' ' + myDom.attributes.map(P.attribute).reduce(P.skip) : '')
      + '>'
      + (myDom.content && myDom.content.length ? myDom.content.map(P.render).reduce(P.sum) : '')
      + '</'
      + (myDom.type ? myDom.type : 'div')
      + '>'

  return text
}

