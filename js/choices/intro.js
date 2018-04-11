
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
        {title : 'Let\'s do this'     , outcome : () => P.updates.navi(P.choices.intro[5]() , true , true)} ,
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
        {title : 'Let\'s do this' , outcome : () => P.updates.navi(P.choices.intro[5]() , true , true)} ,
        {title : 'What?!'         , outcome : () => P.updates.navi(P.choices.intro[2]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // 2

  () =>
  {
    const choice =
    {
      title   : 'You get to be a star pilot!' ,
      text    : 'You are now installed in a Blackstone ship.<br><br>Your mission is to deliver this ship to a specific planet in one piece.' ,
      options :
      [
        {title : 'Let\'s do this' , outcome : () => P.updates.navi(P.choices.intro[5]() , true , true)} ,
        {title : 'Why?'           , outcome : () => P.updates.navi(P.choices.intro[3]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // 3

  () =>
  {
    const choice =
    {
      title   : 'Connections are everything' ,
      text    : 'When the Blackstone reaches its destination it will become an antenna.<br><br>Our foundation\'s mission is to connect life across the universe.' ,
      options :
      [
        {title : 'Let\'s do this' , outcome : () => P.updates.navi(P.choices.intro[5]() , true , true)} ,
        {title : 'What about me?' , outcome : () => P.updates.navi(P.choices.intro[4]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // 4

  () =>
  {
    const choice =
    {
      title   : 'This is bigger than all of us' ,
      text    : 'Your brain will finally expire, but the benefits you\'ll bring to the future generations are priceless.' ,
      options :
      [
        {title : 'Let\'s do this' , outcome : () => P.updates.navi(P.choices.intro[5]() , true , true)} ,
      ]
    }

    return choice
  } ,

  //....................................................................................................................
  // 5

  () =>
  {
    const choice =
    {
      title   : 'The universe is a dangerous place' ,
      text    : 'Beat the following combat simulation to move on to the real thing.<br><br>We can\'t just throw you in space and expect great results.' ,
      options :
      [
        {
          title   : 'Start simulation' ,
          outcome : () =>
          {
            // prepare combat

            P.updates.layout(P.builds.combat() , P.dom('#screen'))
          }
        } ,
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

