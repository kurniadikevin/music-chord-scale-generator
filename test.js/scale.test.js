import { scale } from "../scale";


//MAYOR Chord test

test('Testing Mayor scale on mix scale correctly',function(){
    
	expect(scale('c','Mayor')).toBe( 'C D E F G A B'
    );
    expect(scale('D','Mayor')).toBe( 'D E F# G A B C#'
    );
    expect(scale('c#','Mayor')).toBe( 'C# Eb F F# Ab Bb C'
    );
})

//minor scale testing
test('Testing Minor scale on mix scale correctly',function(){

	expect(scale('a','Minor')).toBe( 'A B C D E F G'
    );
    expect(scale('d', 'Minor')).toBe( 'D E F G A Bb C'
    );
   
})