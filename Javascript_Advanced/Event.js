// document.getElementById('rohit').addEventListener('click', function(e){
//     console.log(e);
// },false)

// type,timestamp,defaultPrevented
//target,toElement, srcElement,currentTarget
//clientX, clientY,screenX,screenY
//altKey,ctrlkey,shiftkey, keyCode

//Event Propogation (False : bubbling Up event Propogation)
//(True : Top Down approach)
//e.stopPropogation() : to stop bubbling

document.getElementById('rohit').addEventListener('click', function(e){
    console.log(e);
},false);


//defaultPrevented
