const notes =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

const chord = function (roots,type){
  //mayor
  if(type ==='mayor'){
  let root = roots.toUpperCase();
    
  let rootIndex= notes.indexOf(root);
    
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
    return arrResult;
  }

  else if(type === 'minor'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    let thirdIndex;
        if(rootIndex+4 > 11){
      thirdIndex = notes[(rootIndex + 4) - notes.length];
    } else{
      thirdIndex= notes[rootIndex+4] + 'b'
    }
      
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }
      
    let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex]]
      return arrResult;
  }
}

console.log(
chord('b','mayor')
  );



