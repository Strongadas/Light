const lamp = document.getElementById('lamp')
const lampOn = document.getElementById('turnOn')
const lampOff = document.getElementById('turnOff')
const reset = document.getElementById('reset')

function resetAll(){
    if(islampBroken()){
        lamp.src = "./img/desligada.jpg" 
        }
}
function islampBroken(){
  
      return lamp.src.indexOf ('quebrada') > -1
  
}
function lampon(){
    if(!islampBroken()){
    lamp.src = "./img/ligada.jpg" 
    }
}
function lampoff(){
    if(!islampBroken()){
    lamp.src = "./img/desligada.jpg" 
    }
}
function lampBroken(){
    
    lamp.src = "./img/quebrada.jpg" 

}

lampOn.addEventListener('click', lampon)
lampOff.addEventListener('click', lampoff)
lamp.addEventListener('mouseover', lampon)
lamp.addEventListener('mouseleave', lampoff)
lamp.addEventListener('dblclick', lampBroken)
reset.addEventListener('click',resetAll)
