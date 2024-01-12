window.addEventListener('keypress', (key)=>{

let audio = document.querySelector(`audio[data-key="${key.keyCode}"]`)
let div = document.querySelector(`div[data-key="${key.keyCode}"]`)

if(audio===null&&div===null){

 return;}
 
audio.currentTime = 0;
audio.play()
div.classList.add('kit2')
setTimeout(()=>{
    div.classList.remove('kit2') 
},100)

})



// let keys = document.querySelectorAll(".kit");
// keys.forEach(key => key.addEventListener('transitionend', (e)=>{
//    if(e.propertyName !== 'transform'){
//     return
//    }
//    console.log(e.classList)
// }) )


