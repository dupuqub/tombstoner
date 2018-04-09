
'use strict'

//......................................................................................................................

P.builds.dust = () =>
{
  [1 , 2 , 3 , 4].forEach(radius =>
  {
    const
    canvas = document.createElement('canvas') ,
    pen    = canvas.getContext('2d')

    canvas.setAttribute('width' , 2000)
    canvas.setAttribute('height' , 2000)

    pen.fillStyle = radius < 3 ? '#FFF' : '#111'
    pen.beginPath()

    P.array(200).forEach(() =>
    {
      const
      randomX = P.random(0 , 2000 - radius) ,
      randomY = P.random(0 , 2000 - radius)

      pen.moveTo(randomX , randomY)
      pen.arc(randomX , randomY , radius , 0 , Math.PI * 2)
    })

    pen.fill()

    P.images['dust' + (radius - 1)].src = canvas.toDataURL()
  })
}

