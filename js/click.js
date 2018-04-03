
'use strict'

//......................................................................................................................

P.click = event =>
{
  const classes = Array.from(event.target.classList)

  //....................................................................................................................
  // header

  if(classes.indexOf('header_button') !== -1)
  {
    const tab = event.target.id.slice(7)

    if(tab === 'status') P.state.status_action = P.actions.status[0]

    P.updates.tab(tab)
    P.load_action(P.state[tab + '_action'], tab)
  }

  //....................................................................................................................
  // choice

  else if(event.target.id.slice(0, -2) === 'navi_choice')
  {
    const
    action  = P.state.current_action(),
    index   = event.target.id.slice(-1),
    choice  = action.choices[index]

    choice.outcome()
  }

  //....................................................................................................................
  // new game

  else if(event.target.id === 'new')
  {
    P.hide(P.dom.start)
    P.show(P.dom.game)

    P.load_action(P.actions.intro[0])
  }
}

