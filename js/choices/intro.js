
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
      choices :
      [
        {title : 'Let\'s do this'     , outcome : () => P.updates.choice(P.choices.intro[0] , true)} ,
        {title : 'Where\'s my body?!' , outcome : () => P.updates.choice(P.choices.intro[1] , true)} ,
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
      choices :
      [
        {title : 'Let\'s do this' , outcome : () => P.updates.choice(P.choices.intro[0] , true)} ,
        {title : 'What?!'         , outcome : () => P.updates.choice(P.choices.intro[2] , true)} ,
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
      choices :
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
            P.updates.choice(P.choices.intro[0] , true)
          }
        } ,
      ]
    }

    return choice
  } ,
]

