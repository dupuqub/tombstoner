
'use strict'

//......................................................................................................................

P.load_action = action =>
{
  P.state.action = action

  P.dom.action_title.innerHTML = action.title
  P.dom.action_text.innerHTML = action.text
  P.dom.action_console.innerHTML = ''
  P.dom.action_choice_box.innerHTML = action.choices
    .filter(P.have_all_needs)
    .map   (P.write_choice)
    .reduce(P.sum, '')
}

