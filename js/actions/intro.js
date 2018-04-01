
'use strict'

//......................................................................................................................

P.actions.intro =
[
  //....................................................................................................................
  // 0
  {
    title   : 'Welcome to the Blackstone Organization!',
    text    : 'We are glad you decided to join us in our mission to connect the universe.<br><br>Shall we begin?',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Where\'s my body?!',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[1])
        }
      },
    ]
  },

  //....................................................................................................................
  // 1
  {
    title   : 'It\'s complicated...',
    text    : 'Your body died, but your brain was preserved for science, isn\'t that awesome?',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'What the fuck?!',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[2])
        }
      },
    ]
  },

  //....................................................................................................................
  // 2
  {
    title   : 'You get be a star pilot!',
    text    : 'An offical fleet ship will be assigned to your command.<br><br>You\'ll assemble your own crew and travel around the universe installing the great Blackstones.',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'What is a Blackstone?',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[3])
        }
      },
    ]
  },

  //....................................................................................................................
  // 3
  {
    title   : 'They\'re very, very, VERY good antennas',
    text    : 'The very best form of interstellar communication available in the market right now.<br><br>We consider ourselves to be a giant family and wish you\'d feel the same some day.',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Why me?',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[4])
        }
      },
    ]
  },

  //....................................................................................................................
  // 4
  {
    title   : 'We signed a contract',
    text    : 'We\'re an open-source and non-for-profit organization aiming to connect different life forms across the universe.<br><br>You donate your brain to us, thanks!',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Where\'s my family?',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[5])
        }
      },
    ]
  },

  //....................................................................................................................
  // 5
  {
    title   : 'We cannot say',
    text    : 'It\'s agreed upon that knowing such matters are detrimental to the mission at hand, which is bigger than all of us.',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Antennas over family?',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[6])
        }
      },
    ]
  },

  //....................................................................................................................
  // 6
  {
    title   : 'Not at all',
    text    : 'The universe is at a critical stage where everything we know is compromised.<br><br>We must suffer now so that life (as we know it) survives the future.<br><br> Shall we head to your ship?',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'I\'m not a pilot',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[7])
        }
      },
    ]
  },

  //....................................................................................................................
  // 7
  {
    title   : 'That is not a problem!',
    text    : 'The enginneers took great care to make a very friendly user interface.<br><br>Me :)))<br><br>Your job is mainly telling me what you feel you should do and I take care of technicalities.',
    choices :
    [
      {
        title   : 'Let\'s do this',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Sounds like a stretch',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[8])
        }
      },
    ]
  },

  //....................................................................................................................
  // 8
  {
    title   : 'You are more amazing than you know',
    text    : 'Your brain has many of the tools needed for interstellar relations and communications.<br><br>Things I lack.<br><br>We are both very essential parts of it.',
    choices :
    [
      {
        title   : 'Ok... I\'m ready',
        needs   : [],
        info    : [],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
    ]
  },

  //....................................................................................................................
  // 9
  {
    title   : 'Choose your ship',
    text    : 'You may choose 1 of 3 unique starter ships from the Blackstone Corporation!<br><br>It\'s your new body.',
    choices :
    [
      {
        title : 'Ghost',
        needs : [],
        info  :
        [
          {
            text  : 'Crew limit = 0<br>Mod limit = 5<br>',
            needs : []
          },
        ],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title   : 'Argus',
        needs   : [],
        info    :
        [
          {
            text  : 'Crew limit = 2<br>Mod limit = 2<br>',
            needs : []
          },
        ],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
      {
        title : 'Mothor',
        needs : [],
        info  :
        [
          {
            text  : 'Crew limit = 3<br>Mod limit = 0<br>',
            needs : [],
          },
        ],
        outcome : () =>
        {
          P.load_action(P.actions.intro[9])
        }
      },
    ]
  },
]

