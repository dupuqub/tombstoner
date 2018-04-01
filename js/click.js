
'use strict'

//......................................................................................................................

P.click = event =>
{
  if(event.target.id.slice(0, -2) === 'action_choice')
  {
    P.state.action.choices[event.target.id.slice(-1)].outcome()
  }

  else if(event.target.id === 'new')
  {
    P.dom.start.style.display = 'none'
    P.dom.game.style.display = 'flex'

    P.load_action(P.actions.intro[0])
  }
}

