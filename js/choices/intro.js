
'use strict'

//......................................................................................................................

P.choices.intro =
[
  //....................................................................................................................
  // 0

  () =>
  {
    const choice =
    {
      title   : 'Welcome to the Blackstone Foundation!' ,
      text    : 'We\'re glad you decided to join us in our mission to connect the universe.<br><br>Shall we begin?' ,
      options :
      [
        {title : 'Let\'s do this'     , outcome : () => P.updates.navi(P.choices.intro[0]() , true , true)} ,
        {title : 'Where\'s my body?!' , outcome : () => P.updates.navi(P.choices.intro[1]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // 1

  () =>
  {
    const choice =
    {
      title   : 'It\'s complicated...' ,
      text    : 'Your body died, but you donated your brain to science.<br><br>Isn\'t it awesome?' ,
      options :
      [
        {title : 'Let\'s do this' , outcome : () => P.updates.navi(P.choices.intro[0]() , true , true)} ,
        {title : 'What?!'         , outcome : () => P.updates.navi(P.choices.intro[2]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // template

  () =>
  {
    const choice =
    {
      title   : '' ,
      text    : '' ,
      options :
      [
        {
          title : '' ,
          needs : [] ,
          clues :
          [
            {
              text  : '' ,
              needs : []
            } ,
          ] ,
          outcome : () =>
          {
            P.updates.navi(P.choices.intro[0]() , true , true)
          }
        } ,
      ]
    }

    return choice
  } ,
]

