
'use strict'

//......................................................................................................................

P.draws.dust = () =>
{
  P.info.dusts.forEach((dust , index) =>
  {
    const
    canvas = document.createElement('canvas') ,
    pen    = canvas.getContext('2d')

    canvas.setAttribute('width' , 2000)
    canvas.setAttribute('height' , 2000)

    // wireframe

    // pen.strokeStyle = '#F00'
    // pen.beginPath()
    // pen.moveTo(0 , 0)
    // pen.lineTo(2000 , 0)
    // pen.lineTo(2000 , 2000)
    // pen.lineTo(0 , 2000)
    // pen.lineTo(0 , 0)
    // pen.stroke()

    // dust

    pen.fillStyle = dust.color

    pen.beginPath()

    P.array(dust.amount).forEach(() =>
    {
      const random =
      {
        x : P.random(0 , 2000 - dust.radius) ,
        y : P.random(0 , 2000 - dust.radius)
      }

      pen.moveTo(random.x , random.y)
      pen.arc(random.x , random.y , dust.radius , 0 , Math.PI * 2)
    })

    pen.fill()

    P.images['dust' + index] = new Image
    P.images['dust' + index].src = canvas.toDataURL()
  })
}

