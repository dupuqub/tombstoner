
'use strict'

//......................................................................................................................

P.actions.status =
[
  //....................................................................................................................
  // 0

  () => (
  {
    title   : P.state.ship.title,
    text    : '',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Mods',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[1], 'status')
        }
      },
      {
        title   : 'Crew',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[2], 'status')
        }
      },
      {
        title   : 'Journal',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[3], 'status')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 1

  () => (
  {
    title   : 'Mods',
    text    : '',
    arrival : () => {},
    choices :
    [
      {
        title   : '',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[0], 'status')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 2

  () => (
  {
    title   : 'Crew',
    text    : '',
    arrival : () => {},
    choices :
    [
      {
        title   : '',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[0], 'status')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 3

  () => (
  {
    title   : 'Journal',
    text    : '',
    arrival : () => {},
    choices :
    [
      {
        title   : '',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.status[0], 'status')
        }
      },
    ]
  }),

  //....................................................................................................................
  // template

  () => (
  {
    title   : '',
    text    : '',
    arrival : () => {},
    choices :
    [
      {
        title : '',
        needs : [],
        clues :
        [
          {
            text  : '',
            needs : []
          },
        ],
        outcome : () =>
        {
          P.load_action(P.actions.status[0], 'status')
        }
      },
    ]
  }),
]

