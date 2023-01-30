const notes =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

//substitution
const notesNaturally =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

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

}






/*   console.log(
chord('d','minor7')
  );  
  */

export {chord};

//naturalized some third exp: C minor = C Eb G not C D# G


