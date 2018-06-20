
'use strict'

//......................................................................................................................

P.draws.dust = () =>
{
  const dusts = P.info.dusts

  P.images.dusts = P.array(dusts.length).map(P.image)

  dusts.forEach((dust , index) =>
  {
    const
    canvas = document.createElement('canvas') ,
    pen    = canvas.getContext('2d')

    canvas.setAttribute('width' , 2000)
    canvas.setAttribute('height' , 2000)

    //..................................................................................................................
    // wireframe

    pen.strokeStyle = '#F00'
    pen.beginPath()
    pen.moveTo(0 , 0)
    pen.lineTo(2000 , 0)
    pen.lineTo(2000 , 2000)
    pen.lineTo(0 , 2000)
    pen.lineTo(0 , 0)
    pen.stroke()

    //..................................................................................................................
    // dust

    P.array(dust.amount).forEach(() =>
    {
      const radius = P.random(dust.radius[0] , dust.radius[1])

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
        x : P.random(0 , 2000 - radius) ,
        y : P.random(0 , 2000 - radius)
      }

      //................................................................................................................

      pen.fillStyle = dust.color === 'dust' ? color : dust.color
      pen.beginPath()
      pen.moveTo(position.x , position.y)
      pen.arc(position.x , position.y , radius , 0 , Math.PI * 2)
      pen.fill()
    })

    //..................................................................................................................
    // create and address

    P.images.dusts[index].src = canvas.toDataURL()
  })
}

