
'use strict'

//......................................................................................................................

P.create_word = () =>
{
  const
  size  = P.dice(1, 4),
  tonic = (size < 2) ? null : P.dice(0, size - 1),
  word  = P.array(size)
    .map((item, index) => P.create_syllable(tonic === index))
    .map((item, index) => index ? item : item[0].toUpperCase() + item[1])
    .reduce(P.sum)

  return word
}

//......................................................................................................................

P.create_syllable = tonic =>
{
  const
  consonant = P.info.consonants[P.dice(0, P.last_in(P.info.consonants))],
  vowel     = P.info.vowels[P.dice(0, P.last_in(P.info.vowels))],
  syllable  = consonant + (tonic ? vowel.toUpperCase() : vowel)

  return syllable
}

