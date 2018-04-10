
'use strict'

//......................................................................................................................

P.draws.dust = () =>
{
  P.array(4).forEach((item , index) =>
  {
    const
    canvas = document.createElement('canvas') ,
    pen    = canvas.getContext('2d') ,
    radius = index + 1

    canvas.setAttribute('width' , 2000)
    canvas.setAttribute('height' , 2000)

    // wireframe

    pen.strokeStyle = '#F00'
    pen.beginPath()
    pen.moveTo(0 , 0)
    pen.lineTo(2000 , 0)
    pen.lineTo(2000 , 2000)
    pen.lineTo(0 , 2000)
    pen.lineTo(0 , 0)
    pen.stroke()

    // dust

    pen.fillStyle = radius < 3 ? '#FFF' : 'rgba(255 , 255 , 255 , 0.1)'

    pen.beginPath()

    P.array(200).forEach(() =>
    {
      const random =
      {
        x : P.random(0 , 2000 - radius) ,
        y : P.random(0 , 2000 - radius)
      }

      pen.moveTo(random.x , random.y)
      pen.arc(random.x , random.y , radius , 0 , Math.PI * 2)
    })

    pen.fill()

    P.images['dust' + index].src = canvas.toDataURL()
  })
}

