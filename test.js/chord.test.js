import {chord} from '../script';

test('Returns chord mayor sharp system correctly', function () {

	expect(chord('c','mayor')).toBe( 'C E G'
    );
    expect(chord('c#','mayor')).toBe( 'C# F G#'
    );
    expect(chord('d','mayor')).toBe( 'D F# A'
    );
    expect(chord('d#','mayor')).toBe( 'D# G A#'
    );
    expect(chord('e','mayor')).toBe( 'E G# B'
    );
    expect(chord('f','mayor')).toBe( 'F A C'
    );
    expect(chord('f#','mayor')).toBe( 'F# A# C#'
    );
    expect(chord('g','mayor')).toBe( 'G B D'
    );
    expect(chord('g#','mayor')).toBe( 'G# C D#'
    );
    expect(chord('a','mayor')).toBe( 'A C# E'
    );
    expect(chord('a#','mayor')).toBe( 'A# D F'
    );
    expect(chord('b','mayor')).toBe( 'B D# F#'
    );
});

test('Returns chord minor sharp system correctly', function () {

	
	expect(chord('c','minor')).toBe( 'C D# G'
    );
    expect(chord('c#','minor')).toBe( 'C# E G#'
    );
    expect(chord('d','minor')).toBe( 'D F A'
    );
     expect(chord('d#','minor')).toBe( 'D# F# A#'
    ); 
    expect(chord('e','minor')).toBe( 'E G B'
    );
    expect(chord('f','minor')).toBe( 'F G# C'
    );
    expect(chord('f#','minor')).toBe( 'F# A C#'
    );
    expect(chord('g','minor')).toBe( 'G A# D'
    );
      expect(chord('g#','minor')).toBe( 'G# B D#'
    );  
    expect(chord('a','minor')).toBe( 'A C E'
    );
      expect(chord('a#','minor')).toBe( 'A# C# F'
    );  
    expect(chord('b','minor')).toBe( 'B D F#'
    );
});

test('Returns chord mayor7 sharp system correctly', function () {

	expect(chord('c','mayor7')).toBe( 'C E G B'
    );
    expect(chord('c#','mayor7')).toBe( 'C# F G# C'
    );
    expect(chord('d','mayor7')).toBe( 'D F# A C#'
    );
    expect(chord('d#','mayor7')).toBe( 'D# G A# D'
    );
    expect(chord('e','mayor7')).toBe( 'E G# B D#'
    );
    expect(chord('f','mayor7')).toBe( 'F A C E'
    );
    expect(chord('f#','mayor7')).toBe( 'F# A# C# F'
    );
    expect(chord('g','mayor7')).toBe( 'G B D F#'
    );
    expect(chord('g#','mayor7')).toBe( 'G# C D# G'
    );
    expect(chord('a','mayor7')).toBe( 'A C# E G#'
    );
    expect(chord('a#','mayor7')).toBe( 'A# D F A'
    );
    expect(chord('b','mayor7')).toBe( 'B D# F# A#'
    );
});

test('Returns chord minor7, sharp system correctly', function () {

	expect(chord('c','minor7')).toBe( 'C D# G A#'
    );
    expect(chord('c#','minor7')).toBe( 'C# E G# B'
    );
    expect(chord('d','minor7')).toBe( 'D F A C'
    );
     expect(chord('d#','minor7')).toBe( 'D# F# A# C#'
    ); 
    expect(chord('e','minor7')).toBe( 'E G B D'
    );
    expect(chord('f','minor7')).toBe( 'F G# C D#'
    );
    expect(chord('f#','minor7')).toBe( 'F# A C# E'
    );
    expect(chord('g','minor7')).toBe( 'G A# D F'
    );
      expect(chord('g#','minor7')).toBe( 'G# B D# F#'
    );  
    expect(chord('a','minor7')).toBe( 'A C E G'
    );
      expect(chord('a#','minor7')).toBe( 'A# C# F G#'
    );  
    expect(chord('b','minor7')).toBe( 'B D F# A'
    );
});

test('Returns chord dominant7 sharp system correctly', function () {

	expect(chord('c','dom7')).toBe( 'C E G A#'
    );
    expect(chord('c#','dom7')).toBe( 'C# F G# B'
    );
    expect(chord('d','dom7')).toBe( 'D F# A C'
    );
    expect(chord('d#','dom7')).toBe( 'D# G A# C#'
    );
    expect(chord('e','dom7')).toBe( 'E G# B D'
    );
    expect(chord('f','dom7')).toBe( 'F A C D#'
    );
    expect(chord('f#','dom7')).toBe( 'F# A# C# E'
    );
    expect(chord('g','dom7')).toBe( 'G B D F'
    );
    expect(chord('g#','dom7')).toBe( 'G# C D# F#'
    );
    expect(chord('a','dom7')).toBe( 'A C# E G'
    );
    expect(chord('a#','dom7')).toBe( 'A# D F G#'
    );
    expect(chord('b','dom7')).toBe( 'B D# F# A'
    );
});

test('Returns chord augmented, sharp system correctly', function () {

	expect(chord('c','aug')).toBe( 'C E G#'
    );
    expect(chord('c#','aug')).toBe( 'C# F A'
    );
    expect(chord('d','aug')).toBe( 'D F# A#'
    );
    expect(chord('d#','aug')).toBe( 'D# G B'
    );
    expect(chord('e','aug')).toBe( 'E G# C'
    );
    expect(chord('f','aug')).toBe( 'F A C#'
    );
    expect(chord('f#','aug')).toBe( 'F# A# D'
    );
    expect(chord('g','aug')).toBe( 'G B D#'
    );
    expect(chord('g#','aug')).toBe( 'G# C E'
    );
    expect(chord('a','aug')).toBe( 'A C# F'
    );
    expect(chord('a#','aug')).toBe( 'A# D F#'
    );
    expect(chord('b','aug')).toBe( 'B D# G'
    );
});

test('Returns chord diminished, sharp system correctly', function () {

	expect(chord('c','dim')).toBe( 'C E F#'
    );
    expect(chord('c#','dim')).toBe( 'C# F G'
    );
    expect(chord('d','dim')).toBe( 'D F# G#'
    );
    expect(chord('d#','dim')).toBe( 'D# G A'
    );
    expect(chord('e','dim')).toBe( 'E G# A#'
    );
    expect(chord('f','dim')).toBe( 'F A B'
    );
    expect(chord('f#','dim')).toBe( 'F# A# C'
    );
    expect(chord('g','dim')).toBe( 'G B C#'
    );
    expect(chord('g#','dim')).toBe( 'G# C D'
    );
    expect(chord('a','dim')).toBe( 'A C# D#'
    );
    expect(chord('a#','dim')).toBe( 'A# D E'
    );
    expect(chord('b','dim')).toBe( 'B D# F'
    );
});


test('Returns chord halfDim7, sharp system correctly', function () {

	expect(chord('c','halfDim7')).toBe( 'C D# F# A#'
    );
    expect(chord('c#','halfDim7')).toBe( 'C# E G B'
    );
    expect(chord('d','halfDim7')).toBe( 'D F G# C'
    );
     expect(chord('d#','halfDim7')).toBe( 'D# F# A C#'
    ); 
    expect(chord('e','halfDim7')).toBe( 'E G A# D'
    );
    expect(chord('f','halfDim7')).toBe( 'F G# B D#'
    );
    expect(chord('f#','halfDim7')).toBe( 'F# A C E'
    );
    expect(chord('g','halfDim7')).toBe( 'G A# C# F'
    );
      expect(chord('g#','halfDim7')).toBe( 'G# B D F#'
    );  
    expect(chord('a','halfDim7')).toBe( 'A C D# G'
    );
      expect(chord('a#','halfDim7')).toBe( 'A# C# E G#'
    );  
    expect(chord('b','halfDim7')).toBe( 'B D F A'
    );
});

test('Returns chord dim7, sharp system correctly', function () {

	expect(chord('c','dim7')).toBe( 'C D# F# A'
    );
    expect(chord('c#','dim7')).toBe( 'C# E G A#'
    );
    expect(chord('d','dim7')).toBe( 'D F G# B'
    );
     expect(chord('d#','dim7')).toBe( 'D# F# A C'
    ); 
    expect(chord('e','dim7')).toBe( 'E G A# C#'
    );
    expect(chord('f','dim7')).toBe( 'F G# B D'
    );
    expect(chord('f#','dim7')).toBe( 'F# A C D#'
    );
    expect(chord('g','dim7')).toBe( 'G A# C# E'
    );
      expect(chord('g#','dim7')).toBe( 'G# B D F'
    );  
    expect(chord('a','dim7')).toBe( 'A C D# F#'
    );
      expect(chord('a#','dim7')).toBe( 'A# C# E G'
    );  
    expect(chord('b','dim7')).toBe( 'B D F G#'
    );
});

test('Returns chord aug7 ,sharp system correctly', function () {

	expect(chord('c','aug7')).toBe( 'C E G# A#'
    );
    expect(chord('c#','aug7')).toBe( 'C# F A B'
    );
    expect(chord('d','aug7')).toBe( 'D F# A# C'
    );
    expect(chord('d#','aug7')).toBe( 'D# G B C#'
    );
    expect(chord('e','aug7')).toBe( 'E G# C D'
    );
    expect(chord('f','aug7')).toBe( 'F A C# D#'
    );
    expect(chord('f#','aug7')).toBe( 'F# A# D E'
    );
    expect(chord('g','aug7')).toBe( 'G B D# F'
    );
    expect(chord('g#','aug7')).toBe( 'G# C E F#'
    );
    expect(chord('a','aug7')).toBe( 'A C# F G'
    );
    expect(chord('a#','aug7')).toBe( 'A# D F# G#'
    );
    expect(chord('b','aug7')).toBe( 'B D# G A'
    );
});

test('Returns chord mayor9 ,sharp system correctly', function () {

	expect(chord('c','mayor9')).toBe( 'C E G B D'
    );
    expect(chord('C#','mayor9')).toBe( 'C# F G# C D#'
    );
    expect(chord('F','mayor9')).toBe( 'F A C E G'
    );
});

test('Returns chord minor9 ,sharp system correctly', function () {

	expect(chord('c','minor9')).toBe( 'C D# G A# D'
    );
    expect(chord('C#','minor9')).toBe( 'C# E G# B D#'
    );
    expect(chord('F','minor9')).toBe( 'F G# C D# G'
    );  
});

test('Returns chord mayor11 ,sharp system correctly', function () {

	expect(chord('c','mayor11')).toBe( 'C E G B D F'
    );
    expect(chord('C#','mayor11')).toBe( 'C# F G# C D# F#'
    );
    expect(chord('F','mayor11')).toBe( 'F A C E G A#'
    );
});

test('Returns chord minor11 ,sharp system correctly', function () {

	expect(chord('c','minor11')).toBe( 'C D# G A# D F'
    );
    expect(chord('C#','minor11')).toBe( 'C# E G# B D# F#'
    );
    expect(chord('F','minor11')).toBe( 'F G# C D# G A#'
    );  
});

test('Returns chord mayor13 ,sharp system correctly', function () {

	expect(chord('c','mayor13')).toBe( 'C E G B D F A'
    );
    expect(chord('C#','mayor13')).toBe( 'C# F G# C D# F# A#'
    );
    expect(chord('F','mayor13')).toBe( 'F A C E G A# D'
    );
});

test('Returns chord minor13 ,sharp system correctly', function () {

	expect(chord('c','minor13')).toBe( 'C D# G A# D F A'
    );
    expect(chord('C#','minor13')).toBe( 'C# E G# B D# F# A#'
    );
    expect(chord('F','minor13')).toBe( 'F G# C D# G A# D'
    );  
});


test('Returns chord dom9 ,sharp system correctly', function () {

	expect(chord('c','dom9')).toBe( 'C E G A# D'
    );
    expect(chord('C#','dom9')).toBe( 'C# F G# B D#'
    );
    expect(chord('F','dom9')).toBe( 'F A C D# G'
    );
});

test('Returns chord dom11 ,sharp system correctly', function () {

	expect(chord('c','dom11')).toBe( 'C E G A# D F'
    );
    expect(chord('C#','dom11')).toBe( 'C# F G# B D# F#'
    );
    expect(chord('F','dom11')).toBe( 'F A C D# G A#'
    );
});

test('Returns chord dom13 ,sharp system correctly', function () {

	expect(chord('c','dom13')).toBe( 'C E G A# D F A'
    );
    expect(chord('C#','dom13')).toBe( 'C# F G# B D# F# A#'
    );
    expect(chord('F','dom13')).toBe( 'F A C D# G A# D'
    );
});