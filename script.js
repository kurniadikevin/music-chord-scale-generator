const notes =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

//substitution
const notesX =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

const chord = function (roots,type){

  //MAYOR
  if(type ==='mayor'){
  let root = roots.toUpperCase();  
  let rootIndex= notes.indexOf(root);
  
  //third mayor
  let thirdIndex;
      if((rootIndex+4) > 11){
    thirdIndex = (rootIndex + 4) - notes.length;
  } else{
    thirdIndex= rootIndex+4;
  }
    
  let fifthIndex;
    if(rootIndex+7 > 11){
    fifthIndex = (rootIndex + 7) - notes.length;
  } else{
    fifthIndex= rootIndex+7;
  }
    
  let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex]]
    return arrResult.join(' ');
  }

  //MINOR
  else if(type === 'minor'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = (rootIndex + 3) - notes.length;
    } else{
     thirdIndex= rootIndex+3;
    }

    //fifth index
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //MAYOR7
  else if(type === 'mayor7'){
    let root = roots.toUpperCase(); 
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
        if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }
    
    //seventh mayor
    let seventhIndex;
    if(rootIndex+11 > 11){
      seventhIndex = (rootIndex + 11) - notes.length;
    } else{
      seventhIndex= rootIndex+11;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }

    //MINOR7
    else if(type === 'minor7'){
      let root = roots.toUpperCase();
      
      let rootIndex= notes.indexOf(root);
        
      //third index minor
      let thirdIndex;
      if((rootIndex+3) > 11){
       thirdIndex = notes[(rootIndex + 3) - notes.length];
      } else{
       thirdIndex= notes[rootIndex+3];
      }
  
      //fifth index
      let fifthIndex;
        if(rootIndex+7 > 11){
        fifthIndex = (rootIndex + 7) - notes.length;
      } else{
        fifthIndex= rootIndex+7;
      }

      //seventh index minor
      let seventhIndex;
      if((rootIndex+10) > 11){
        seventhIndex = (rootIndex + 10) - notes.length;
       } else{
        seventhIndex= rootIndex+10;
       }
  
      let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
        return arrResult.join(' ');
    }

    //DOMINANT7
  else if(type === 'dom7'){
    let root = roots.toUpperCase(); 
    let rootIndex= notes.indexOf(root);
    
    //mayor
    let thirdIndex;
        if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }
    // minor 
    let seventhIndex;
    if(rootIndex+10 > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
    } else{
      seventhIndex= rootIndex+10;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }

  //DIMINISHED TRIAD
  else if(type === 'dim'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
    if((rootIndex+4) > 11){
     thirdIndex = (rootIndex + 4) - notes.length;
    } else{
     thirdIndex= rootIndex+4;
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //AUGMENTED TRIAD
  else if(type === 'aug'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
    if((rootIndex+4) > 11){
     thirdIndex = (rootIndex + 4) - notes.length;
    } else{
     thirdIndex= rootIndex+4;
    }

    //sharp fifth index
    let fifthIndex;
      if(rootIndex+8 > 11){
      fifthIndex = (rootIndex + 8) - notes.length;
    } else{
      fifthIndex= rootIndex+8;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //HALF-DIMINISHED7
  else if(type === 'halfDim7'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third index minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = notes[(rootIndex + 3) - notes.length];
    } else{
     thirdIndex= notes[rootIndex+3];
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    //seventh index minor
    let seventhIndex;
    if((rootIndex+10) > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
     } else{
      seventhIndex= rootIndex+10;
     }

    let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
  }

  //DIMINISHED7
   else if(type === 'dim7'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third index minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = notes[(rootIndex + 3) - notes.length];
    } else{
     thirdIndex= notes[rootIndex+3];
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    //seventh index diminished (double flat)
    let seventhIndex;
    if((rootIndex+9) > 11){
      seventhIndex = (rootIndex + 9) - notes.length;
     } else{
      seventhIndex= rootIndex+9;
     }

    let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
  }

  //AUGMENTED7
  else if(type === 'aug7'){
    let root = roots.toUpperCase(); 
    let rootIndex= notes.indexOf(root);
    
    //mayor
    let thirdIndex;
        if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
     //sharp fifth index
     let fifthIndex;
     if(rootIndex+8 > 11){
     fifthIndex = (rootIndex + 8) - notes.length;
   } else{
     fifthIndex= rootIndex+8;
   }

    // minor sevent
    let seventhIndex;
    if(rootIndex+10 > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
    } else{
      seventhIndex= rootIndex+10;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }
}





/* 
   console.log(
chord('c#','mayor7')
  );  
   */

export {chord};

//naturalized some third exp: C minor = C Eb G not C D# G


