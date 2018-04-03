
'use strict'

//......................................................................................................................

P.actions.intro =
[
  //....................................................................................................................
  // 0

  () => (
  {
    title   : 'Welcome to the Blackstone Organization!',
    text    : 'We are glad you decided to join us in our mission to connect the universe.<br><br>Shall we begin?',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'Where\'s my body?!',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[1], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 1

  () => (
  {
    title   : 'It\'s complicated...',
    text    : 'Your body died, but your brain was preserved for science, isn\'t that awesome?',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'What the fuck?!',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[2], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 2

  () => (
  {
    title   : 'You get be a star pilot!',
    text    : 'An offical fleet ship will be assigned to your command.<br><br>You\'ll assemble your own crew and travel around the universe installing the great Blackstones.',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'What is a Blackstone?',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[3], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 3

  () => (
  {
    title   : 'They\'re very, very, VERY good antennas',
    text    : 'The very best form of interstellar communication available in the market right now.<br><br>We consider ourselves to be a giant family and wish you\'d feel the same some day.',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'Why me?',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[4], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 4

  () => (
  {
    title   : 'We signed a contract',
    text    : 'We\'re an open-source and non-for-profit organization aiming to connect different life forms across the universe.<br><br>You donate your brain to us, thanks!',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'Where\'s my family?',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[5], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 5

  () => (
  {
    title   : 'We cannot say',
    text    : 'It\'s agreed upon that knowing such matters are detrimental to the mission at hand, which is bigger than all of us.',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'Antennas over family?',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[6], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 6

  () => (
  {
    title   : 'Not at all',
    text    : 'The universe is at a critical stage where everything we know is compromised.<br><br>We must suffer now so that life (as we know it) survives the future.<br><br> Shall we head to your ship?',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'I\'m not a pilot',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[7], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 7

  () => (
  {
    title   : 'Not a problem!',
    text    : 'Enginneers took great care in making a very friendly user interface.<br><br>Me :)))<br><br>Navi, the navigator. Your job is telling me what to do, mine is knowing how to do it.',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
      {
        title   : 'Sounds like a stretch',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[8], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 8

  () => (
  {
    title   : 'You are more amazing than you know',
    text    : 'Your brain has many of the tools needed for interstellar relations and communications.<br><br>Things I lack.<br><br>We are both very essential parts of it.',
    arrival : () => {},
    choices :
    [
      {
        title   : 'Ok... I\'m ready',
        needs   : [],
        clues   : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 9

  () => (
  {
    title   : 'Choose your ship',
    text    : 'You may choose 1 of 3 unique starter ships from the Blackstone Corporation!<br><br>It will be your new body and a new home for your future crew.',
    arrival : () => {},
    choices :
    [
      {
        title : 'Ghost (edgy)',
        needs : [],
        clues :
        [
          {text : 'Crew limit = 1<br>Starting crew = 1', needs : []},
          {text : 'Mod limit = 8<br>Starting mods = 4', needs : []},
          {text : 'Shield = 1<br>Core = 1', needs : []},
          {text : 'Beam = 1<br>Engine = 1', needs : []},
        ],
        outcome : () =>
        {
          P.state.ship =
          {
            title      : 'Ghost',
            crew_limit : 1,
            mod_limit  : 8,
            mods       : [],
            shield     : {max : 1, now : 1},
            core       : {max : 1, now : 1},
            beam       : 1,
            engine     : 1,
          }

          P.load_action(P.actions.intro[10], 'navi')
        }
      },
      {
        title : 'Argus (classic)',
        needs : [],
        clues :
        [
          {text : 'Crew limit = 3<br>Starting crew = 1', needs : []},
          {text : 'Mod limit = 4<br>Starting mods = 2', needs : []},
          {text : 'Shield = 3<br>Core = 1', needs : []},
          {text : 'Beam = 3<br>Engine = 3', needs : []},
        ],
        outcome : () =>
        {
          P.state.ship =
          {
            title      : 'Argus',
            crew_limit : 3,
            mod_limit  : 4,
            mods       : [],
            shield     : {max : 3, now : 3},
            core       : {max : 1, now : 1},
            beam       : 3,
            engine     : 3,
          }

          P.load_action(P.actions.intro[10], 'navi')
        }
      },
      {
        title : 'Mothor (safe)',
        needs : [],
        clues :
        [
          {text : 'Crew limit = 5<br>Starting crew = 1', needs : []},
          {text : 'Mod limit = 1<br>Starting mods = 0', needs : []},
          {text : 'Shield = 5<br>Core = 1', needs : []},
          {text : 'Beam = 5<br>Engine = 5', needs : []},
        ],
        outcome : () =>
        {
          P.state.ship =
          {
            title      : 'Mothor',
            crew_limit : 5,
            mod_limit  : 1,
            mods       : [],
            shield     : {max : 5, now : 5},
            core       : {max : 1, now : 1},
            beam       : 5,
            engine     : 5,
          }

          P.load_action(P.actions.intro[10], 'navi')
        }
      },
    ]
  }),

  //....................................................................................................................
  // 10

  () => (
  {
    title   : 'Congratulations!',
    text    : 'You chose ' + P.state.ship.title + '.<br><br>You can always check your current condition by clicking the new "STATUS" tab above.<br><br>You can always get back here through the "NAVI" tab.',
    arrival : () =>
    {
      P.show(P.dom.header_navi)
      P.show(P.dom.header_status)
    },
    choices :
    [
      {
        title : 'Been there, done that',
        needs : [],
        clues : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[0], 'navi')
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
          P.load_action(P.actions.intro[0], 'navi')
        }
      },
    ]
  }),
]

