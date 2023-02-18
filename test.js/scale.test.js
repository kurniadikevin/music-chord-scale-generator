import { scale } from "../scale";


//MAYOR Chord test

test('Testing Mayor scale on mix system correctly',function(){
    
	expect(scale('c','Mayor')).toBe( 'C D E F G A B'
    );
    expect(scale('D','Mayor')).toBe( 'D E F# G A B C#'
    );
    expect(scale('c#','Mayor')).toBe( 'C# Eb F F# Ab Bb C'
    );
})

//minor natural scale testing
test('Testing Minor(Natual) scale on mix system correctly',function(){

	expect(scale('a','Minor(Natural)')).toBe( 'A B C D E F G'
    );
    expect(scale('d', 'Minor(Natural)')).toBe( 'D E F G A Bb C'
    );
   
})

test('Testing Mayor Pentatonic scale on mix system correctly', function(){
    expect(scale('c','Pentatonic-Mayor')).toBe('C D E G A');
    expect(scale('d','Pentatonic-Mayor')).toBe('D E F# A B');
})

test('Testing Minor Pentatonic scale on mix system correctly', function(){
    expect(scale('c','Pentatonic-Minor')).toBe('C Eb F G Bb');
    expect(scale('d','Pentatonic-Minor')).toBe('D F G A C');
    expect(scale('A','Pentatonic-Minor')).toBe('A C D E G');
})

//minor harmonic scale testing
test('Testing Harmonic Minor scale on mix system correctly',function(){

	expect(scale('a','Harmonic-Minor')).toBe( 'A B C D E F Ab'
    );
    expect(scale('d', 'Harmonic-Minor')).toBe( 'D E F G A Bb C#'
    );
   
})

//minor melodic scale testing
test('Testing Melodic Minor scale on mix system correctly',function(){

	expect(scale('a','Melodic-Minor')).toBe( 'A B C D E F# Ab A G F E D C B A'
    );
     expect(scale('d', 'Melodic-Minor')).toBe(  'D E F G A B C# D C Bb A G F E D'
    ); 
   
})