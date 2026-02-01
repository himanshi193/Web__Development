console.log("hellow guys!!")

let btn= document.querySelector('button')
let body=document.querySelector('body')
let isDark=true

btn.addEventListener("click",function(){
    // body.style.backgroundColor='green'

    if(isDark){
        body.style.backgroundColor='gold'
    }else{
        body.style.backgroundColor='maroon'
    }
    isDark=!isDark
})