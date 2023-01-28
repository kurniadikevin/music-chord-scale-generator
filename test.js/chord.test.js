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