
'use strict'

//......................................................................................................................

P.updates.choice = (choiceCreator , save) =>
{
  const choice = choiceCreator()

  if(save) P.state.choice = choice

  P.dom.naviTitle().innerHTML = choice.title
  P.dom.naviText().innerHTML = choice.text
  P.dom.naviConsole().innerHTML = ''
  P.dom.naviButtonBox().innerHTML = choice.choices
    .filter(P.haveAllNeeds)
    .map   (P.writeChoice)
    .reduce(P.sum, '')
}

