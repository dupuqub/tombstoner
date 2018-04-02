
'use strict'

//......................................................................................................................

P.click = event =>
{
  const classes = Array.from(event.target.classList)

  if(classes.indexOf('header_button') !== -1)
  {
    const tab = event.target.id.slice(7)

    P.update_tab(tab)
  }

  else if(event.target.id.slice(0, -2) === 'navi_choice')
  {
    const
    action  = P.state.action(),
    index   = event.target.id.slice(-1),
    choice  = action.choices[index]

    choice.outcome()
  }

  else if(event.target.id === 'new')
  {
    P.hide(P.dom.start)
    P.show(P.dom.game)

    P.load_action(P.actions.intro[0])
  }
}

