

const scale= function(roots,type){
    const notes =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

    if(type === 'Mayor'){
        let mayorInterval=[ 0, 2, 4, 5, 7, 9, 11];
        return  scaleIntervalInput(roots,mayorInterval)
    } else if( type === 'Minor'){
        let minorInterval =[ 0, 2, 3, 5, 7, 8, 10];
        return scaleIntervalInput(roots, minorInterval);
    }

}


const scaleIntervalInput = (roots, interval)=>{
    const notes =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

    let root = roots.charAt(0).toUpperCase() + roots.slice(1);  
    let rootIndex= notes.indexOf(root);

  
    let arrScale = [];
    for (let i=0; i< interval.length ; i++){
        let scalePosition=  rootIndex + interval[i];
        if(scalePosition > 11){
            scalePosition -= notes.length;
        }

        arrScale.push(
            notes[ scalePosition ]
        );
    }
    return arrScale.join(' ');
}

export {scale};