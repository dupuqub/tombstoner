
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

    //..................................................................................................................
    // wireframe

    // pen.strokeStyle = '#F00'
    // pen.beginPath()
    // pen.moveTo(0 , 0)
    // pen.lineTo(2000 , 0)
    // pen.lineTo(2000 , 2000)
    // pen.lineTo(0 , 2000)
    // pen.lineTo(0 , 0)
    // pen.stroke()

    //..................................................................................................................
    // dust

    P.array(dust.amount).forEach(() =>
    {
      //................................................................................................................

      const color =

        'rgba('
        + P.random(127,255) + ','
        + P.random(127,255) + ','
        + P.random(127,255) + ','
        + Math.random() + ')'

      //................................................................................................................

      const position =
      {
        x : P.random(0 , 2000 - dust.radius) ,
        y : P.random(0 , 2000 - dust.radius)
      }

      //................................................................................................................

      pen.fillStyle = dust.color === 'dust' ? color : dust.color
      pen.beginPath()
      pen.moveTo(position.x , position.y)
      pen.arc(position.x , position.y , dust.radius , 0 , Math.PI * 2)
      pen.fill()
    })

    //..................................................................................................................
    // create and address

    P.images['dust' + index] = new Image
    P.images['dust' + index].src = canvas.toDataURL()
  })
}

