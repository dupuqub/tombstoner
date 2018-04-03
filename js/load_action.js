
'use strict'

//......................................................................................................................

P.load_action = (action, type) =>
{
  P.state[type + '_action'] = action
  P.state.current_action = action

  action = action()

  action.arrival()

  P.dom.navi_title.innerHTML = action.title
  P.dom.navi_text.innerHTML = action.text
  P.dom.navi_console.innerHTML = ''
  P.dom.navi_choice_box.innerHTML = action.choices
    .filter(P.have_all_needs)
    .map   (P.write_choice)
    .reduce(P.sum, '')
}

