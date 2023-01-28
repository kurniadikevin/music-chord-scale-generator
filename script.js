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

  //minor
  else if(type === 'minor'){
    let root = roots.toUpperCase();
    
    let rootIndex= notes.indexOf(root);
      
    //third index
    let thirdIndex;
    //octave note
    if(rootIndex+4 > 11){
      thirdIndex = notes[(rootIndex + 4) - notes.length];

      // third node sharp on mayor
      if(thirdIndex.length===2){
        thirdIndex = notes[(rootIndex + 3) - notes.length];
      }

    } 

    //non-octave
    else{
      thirdIndex= notes[rootIndex+4] + 'b';// third node natural note
    }

    const naturalThirdIndex= function(item){
        if(item ==='Fb'){
            return 'E';
        } else if( item === 'Cb'){
            return 'B';
        }else if(item.length===3){
            let itemArr = item.split('');
            return itemArr[0];
        } 
        else{
            return item;
        }

    }

    //fifth index
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }

    let arrResult = [notes[rootIndex],naturalThirdIndex(thirdIndex) ,notes[fifthIndex]]
      return arrResult;
  }
}

console.log(
chord('c','mayor')
  );





