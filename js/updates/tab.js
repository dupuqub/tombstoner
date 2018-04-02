
'use strict'

//......................................................................................................................

P.update_tab = tab =>
{
  P.state.tab = tab

  P.dom.header_buttons.forEach(button => button.classList.remove('selected_header_button'))
  P.dom['header_' + tab].classList.add('selected_header_button')

  P.dom.layouts.forEach(P.hide)
  P.show(P.dom[tab])
}

