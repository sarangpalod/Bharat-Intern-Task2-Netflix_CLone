const box= document.querySelectorAll(".question .col-box");

const description =document.querySelectorAll(".col-description");
const plus = document.querySelectorAll(".col span");

box.forEach((boxes , index )=>{
boxes.onclick=function (e) {
    
    plus.forEach((plusSign , x)=>{
        if(index == x){
            plusSign.classList.toggle("signShow");
        } 
        if(index!=x){
            plusSign.classList.remove("signShow");
        }
    })
    description.forEach((des , list) =>{
        if(index == list){
            des.classList.toggle("showbox");
        }
        
            if (index != list) {
                des.classList.remove('showbox');
            }
    })

    
}
})

