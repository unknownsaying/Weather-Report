// In DreamCore, everything is symbolic
type DreamSymbol = {
  literal: any;
  symbolicMeaning: string[];
  emotionalWeight: number;
  canManifestPhysically: boolean;
};

// A simple object becomes complex symbolism
const ordinaryObject: DreamSymbol = {
  literal: 'key',
  symbolicMeaning: ['access', 'freedom', 'solution', 'responsibility'],
  emotionalWeight: 0.7,
  canManifestPhysically: true
};

// Weather reflects collective emotions
type EmotionalWeather = {
  precipitation: 'tears' | 'confetti' | 'ash' | 'memories';
  temperature: 'warm_nostalgia' | 'cold_fear' | 'neutral_detachment';
  atmosphericPressure: 'heavy_guilt' | 'light_joy' | 'tense_anxiety';
  visibility: 'clear_clarity' | 'foggy_confusion' | 'blinding_rage';
};

// Generate logical paradoxes
type Paradox = {
  statement: string;
  makesSenseInDreams: true;
  realityCoefficient: number; // How much it affects reality
  effects: ('confusion' | 'insight' | 'madness' | 'enlightenment')[];
};

const exampleParadox: Paradox = {
  statement: "This dream is dreaming you",
  makesSenseInDreams: true,
  realityCoefficient: 0.8,
  effects: ['confusion']
};