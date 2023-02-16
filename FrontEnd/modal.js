let modal=null
const focusableSelector="button, a, input, textarea"
let focusables=[]
let previouslyFocusedElement=null
let image=document.querySelector("#getFile")

const openModal= async function(e){
    e.preventDefault()
    const target=e.target.getAttribute("href")
    if (target.startsWith ("#")){
        modal=document.querySelector(target) 
    }   else{
        modal= await loadModal(target)
    }    
    focusables=Array.from(modal.querySelectorAll(focusableSelector))
    previouslyFocusedElement=document.querySelector(':focus')
    modal.style.display=null
    focusables[0].focus()    
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal','true')
    modal.addEventListener('click',closeModal)  
    modal.querySelector('.js-modal-close').addEventListener ('click',closeModal)
    modal.querySelector('.js-modal-stop').addEventListener ('click',stopPropagation)  
    image.value=""
    console.log(image.value) 
    image = document.querySelector("#getFile");
console.log(image.value)
/*if (image.value!==""){  
    const imageElement = document.createElement("img")
    imageElement.src = image.value  
    const divPhoto=document.querySelector("#photo")
    divPhoto.innerHTML=""
    divPhoto.appendChild(imageElement)
    }*/
}
const closeModal=function (e){
    if(modal===null) return
    if(previouslyFocusedElement!==null) previouslyFocusedElement.focus()
    e.preventDefault()   
    modal.setAttribute('aria-hidden','true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click',closeModal)
    modal.querySelector('.js-modal-close').removeEventListener ('click',closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener ('click',stopPropagation)
    const hideModal=function(){
        modal.style.display="none" 
        modal.removeEventListener('animationend',hideModal)
        modal=null
    }
    modal.addEventListener('animationend',hideModal)
    
}
//garde la modale ouverte quand on clique dessus
const stopPropagation=function (e){
    e.stopPropagation()
}
//garde la tabulation à l'intérieur de la modale
const focusInModal= function(e){
    e.preventDefault()
    let index=focusables.findIndex(f => f === modal.querySelector(':focus'))
   if(e.shiftKay===true){
    index--
   }else{
    index++
   }
    if (index>= focusables.length){
        index=0
    }
    if(index<0){
        index=focusables.length-1
    }
    focusables[index].focus()
}
const loadModal= async function (url){    
    const target ='#' +url.split('#')[1]
    const existingModal=document.querySelector(target)
    if (existingModal!==null)return existingModal
    const html= await fetch (url).then(response => response.text())
    const element=document.createRange().createContextualFragment(html).querySelector(target)
    document.body.append(element)
    return element
}

document.querySelectorAll('.js-modal').forEach(a =>{
    a.addEventListener('click',openModal)
})
window.addEventListener('mouseup', function(e){
    var obj = document.querySelector(".premiere");
    var obj2= document.querySelector(".seconde")
    console.log(obj)
    console.log(e.target)
    if (!obj.contains(e.target)&&!obj2.contains(e.target)) {
        closeModal(e)
    }
})
window.addEventListener('keydown', function(e){
    if(e.key==='Tab' && modal!==null){
        console.log("ecran")
     focusInModal(e)
    }
 })

 var loadFile = function(event) {
    
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('disparait').style.display = 'none';
  
 

};

 
 