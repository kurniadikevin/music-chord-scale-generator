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

test('Returns chord minor7 sharp system correctly', function () {

	
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