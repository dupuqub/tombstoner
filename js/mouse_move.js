
'use strict'

//......................................................................................................................

P.mouse_move = event =>
{
  P.dom.navi_console.innerHTML = ''

  if(event.target.id.slice(0, -2) === 'navi_choice')
  {
    const
    index_number = Number(event.target.id.slice(-1)),
    action       = P.state.current_action(),
    choice       = action.choices[index_number]

    P.dom.navi_console.innerHTML = choice.clues
      .filter(P.have_all_needs)
      .map   (P.write_clue)
      .reduce(P.sum, '')
  }
}

