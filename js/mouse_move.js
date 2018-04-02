
'use strict'

//......................................................................................................................

P.mouse_move = event =>
{
  P.dom.action_console.innerHTML = ''

  if(event.target.id.slice(0, -2) === 'action_choice')
  {
    const
    index_number = Number(event.target.id.slice(-1)),
    action       = P.state.action(),
    choice       = action.choices[index_number]

    P.dom.action_console.innerHTML = choice.clues
      .filter(P.have_all_needs)
      .map   (P.write_clue)
      .reduce(P.sum, '')
  }
}

